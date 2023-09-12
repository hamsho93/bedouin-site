import { and, eq, sql } from "drizzle-orm";

import { db } from "@/db";
import { Books, Needs, Wants, books, needs, wants } from "@/db/schema";
import { createTRPCRouter, privateProcedure } from "@/server/trpc";

function filterUniqueObjects(arr: any) {
  const uniqueMap = new Map();
  return arr.filter((obj: any) => {
    const id = obj.id;
    if (!uniqueMap.has(id)) {
      uniqueMap.set(id, true);
      return true;
    }
    return false;
  });
}

export const bookRouter = createTRPCRouter({
  getCurrentMonthBooks: privateProcedure.query(async ({ ctx }) => {
    const currentMonthBooks = await db
      .select()
      .from(books)
      .where(
        and(
          eq(books.userId, ctx.userId),
          sql`MONTH(books.createdAt) = MONTH(NOW())`,
          sql`YEAR(books.createdAt) = YEAR(NOW())`
        )
      )
      .leftJoin(needs, eq(books.id, needs.bookId))
      .leftJoin(wants, eq(books.id, wants.bookId));

    const bookMap = new Map();

    currentMonthBooks.forEach((row) => {
      const bookId = row.books.id;

      if (!bookMap.has(bookId)) {
        bookMap.set(bookId, {
          books: row.books,
          needs: [],
          wants: [],
        });
      }

      if (row.needs) {
        bookMap.get(bookId).needs.push(row.needs);
      }

      if (row.wants) {
        bookMap.get(bookId).wants.push(row.wants);
      }
    });

    const structuredData: { books: Books; needs: Needs[]; wants: Wants[] }[] =
      Array.from(bookMap.values());

    const firstBook = structuredData[0];
    firstBook.needs = filterUniqueObjects(firstBook.needs);
    firstBook.wants = filterUniqueObjects(firstBook.wants);

    return firstBook;
  }),
});

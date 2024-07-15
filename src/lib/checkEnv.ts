// src/lib/checkEnv.ts
export function checkEnv() {
    if (!process.env.DATABASE_URL) {
      console.error("DATABASE_URL is missing");
    }
    if (!process.env.NEXTAUTH_SECRET) {
      console.error("NEXTAUTH_SECRET is missing");
    }
    if (!process.env.GOOGLE_CLIENT_ID) {
      console.error("GOOGLE_CLIENT_ID is missing");
    }
    if (!process.env.GOOGLE_CLIENT_SECRET) {
      console.error("GOOGLE_CLIENT_SECRET is missing");
    }
    if (!process.env.NEXT_PUBLIC_SITE_URL) {
      console.error("NEXT_PUBLIC_SITE_URL is missing");
    }
    if (!process.env.NEXTAUTH_URL) {
      console.error("NEXTAUTH_URL is missing");
    }
  }
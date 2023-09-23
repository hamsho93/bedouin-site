"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

import { cn } from "@/lib/utils";
import { CurrencyType } from "@/config";
import { buttonVariants } from "@/components/ui/button";
import { MiscIncomeForm } from "@/components/forms/misc-income-form";

export const MiscIncome = ({
  initialBalance,
  currency,
}: {
  initialBalance: number;
  currency: CurrencyType;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className={cn(buttonVariants(), "rounded-full")}>
        Income
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Income
              </ModalHeader>
              <MiscIncomeForm
                onClose={onClose}
                currency={currency}
                initialBalance={initialBalance}
              />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

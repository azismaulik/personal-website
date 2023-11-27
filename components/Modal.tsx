import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";

import React from "react";

const Modal = ({ text }: { text: any }) => {
  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>{text}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

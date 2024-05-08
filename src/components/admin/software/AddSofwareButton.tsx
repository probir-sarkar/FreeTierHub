"use client";
import { Button } from "@/components/ui/button";
import { useSoftwareStore } from "./software.state";
import { PlusIcon } from "lucide-react";

function AddSoftwareButton() {
  const { setSheetOpen, clearEditingSoftware } = useSoftwareStore();
  return (
    <Button
      onClick={() => {
        clearEditingSoftware();
        setSheetOpen(true);
      }}
    >
      <PlusIcon className="mr-2 h-4 w-4" />
      Add Software
    </Button>
  );
}

export default AddSoftwareButton;

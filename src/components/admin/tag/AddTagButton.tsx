"use client";
import { Button } from "@/components/ui/button";
import { useTagStore } from "./tag.state";
import { PlusIcon } from "lucide-react";

function AddTagButton() {
  const { setSheetOpen, clearEditingTag, setEditingTag } = useTagStore();
  return (
    <Button
      onClick={() => {
        clearEditingTag();
        setSheetOpen(true);
      }}
    >
      <PlusIcon className="mr-2 h-4 w-4" />
      Add Tag
    </Button>
  );
}

export default AddTagButton;

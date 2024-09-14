"use client";
import { Button } from "@/components/ui/button";
import { useCategoryStore } from "./category.state";
import { PlusIcon } from "lucide-react";

function AddCategoryButton() {
  const { setSheetOpen, clearEditingCategory, setEditingCategory } = useCategoryStore();
  return (
    <Button
      onClick={() => {
        clearEditingCategory();
        setSheetOpen(true);
      }}
    >
      <PlusIcon className="mr-2 h-4 w-4" />
      Add Category
    </Button>
  );
}

export default AddCategoryButton;

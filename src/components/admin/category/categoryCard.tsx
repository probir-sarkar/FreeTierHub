"use client";
import { CategoryDocument } from "@/models/Soft";
import { useCategoryStore } from "./category.state";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { DeleteIcon, Settings, TrashIcon } from "lucide-react";

interface CategoryCardProps {
  category: CategoryDocument;
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  const { setEditingCategory, setSheetOpen } = useCategoryStore();
  return (
    <div className="rounded-lg bg-white shadow-lg dark:bg-gray-950">
      <div className="p-6 relative">
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            className="h-8 w-8"
            size="icon"
            variant="outline"
            onClick={() => {
              setEditingCategory(category);
              setSheetOpen(true);
            }}
          >
            <Settings className="h-4 w-4" />
            <span className="sr-only">Edit</span>
          </Button>
          <Button className="h-8 w-8" size="icon" variant="outline">
            <TrashIcon className="h-4 w-4" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
          /{category.slug}
        </span>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{category.name}</h3>
        </div>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{category.description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;

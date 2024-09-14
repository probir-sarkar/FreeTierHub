"use client";
import { TagDocument } from "@/models/Tag";
import { useTagStore } from "./tag.state";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { DeleteIcon, Settings, TrashIcon } from "lucide-react";

interface TagCardProps {
  tag: TagDocument;
}

const TagCard: FC<TagCardProps> = ({ tag }) => {
  const { setEditingTag, setSheetOpen } = useTagStore();
  return (
    <div className="rounded-lg bg-white shadow-lg dark:bg-gray-950">
      <div className="p-6 relative">
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            className="h-8 w-8"
            size="icon"
            variant="outline"
            onClick={() => {
              setEditingTag(tag);
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
        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">/{tag.slug}</span>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{tag.name}</h3>
        </div>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{tag.description}</p>
      </div>
    </div>
  );
};

export default TagCard;

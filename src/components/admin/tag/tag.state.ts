import { create } from "zustand";
import { TagDocument } from "@/models/Tag";

interface TagStore {
  editingTag: TagDocument | null;
  sheetOpen: boolean;
  setSheetOpen: (open: boolean) => void;
  setEditingTag: (Tag: TagDocument) => void;
  clearEditingTag: () => void;
}

export const useTagStore = create<TagStore>((set) => ({
  editingTag: null,
  setEditingTag: (Tag) => set({ editingTag: Tag }),
  sheetOpen: false,
  setSheetOpen: (open) => set({ sheetOpen: open }),
  clearEditingTag: () => set({ editingTag: null })
}));

import { create } from "zustand";
import { CategoryDocument } from "@/models/Soft";

interface CategoryStore {
  editingCategory: CategoryDocument | null;
  sheetOpen: boolean;
  setSheetOpen: (open: boolean) => void;
  setEditingCategory: (category: CategoryDocument) => void;
  clearEditingCategory: () => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  editingCategory: null,
  setEditingCategory: (category) => set({ editingCategory: category }),
  sheetOpen: false,
  setSheetOpen: (open) => set({ sheetOpen: open }),
  clearEditingCategory: () => set({ editingCategory: null }),
}));

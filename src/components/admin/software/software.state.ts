import { create } from "zustand";
import { ParsedSoftware } from "@/models/Soft"; // Assuming ParsedSoftware is the appropriate type for software documents

interface SoftwareStore {
  editingSoftware: ParsedSoftware | null;
  sheetOpen: boolean;
  setSheetOpen: (open: boolean) => void;
  setEditingSoftware: (software: ParsedSoftware) => void;
  clearEditingSoftware: () => void;
}

export const useSoftwareStore = create<SoftwareStore>((set) => ({
  editingSoftware: null,
  setEditingSoftware: (software) => set({ editingSoftware: software }),
  sheetOpen: false,
  setSheetOpen: (open) => set({ sheetOpen: open }),
  clearEditingSoftware: () => set({ editingSoftware: null })
}));

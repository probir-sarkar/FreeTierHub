import { create } from "zustand";
import { SoftwareDocument } from "@/models/Soft"; // Assuming SoftwareDocument is the appropriate type for software documents

interface SoftwareStore {
  editingSoftware: SoftwareDocument | null;
  sheetOpen: boolean;
  setSheetOpen: (open: boolean) => void;
  setEditingSoftware: (software: SoftwareDocument) => void;
  clearEditingSoftware: () => void;
}

export const useSoftwareStore = create<SoftwareStore>((set) => ({
  editingSoftware: null,
  setEditingSoftware: (software) => set({ editingSoftware: software }),
  sheetOpen: false,
  setSheetOpen: (open) => set({ sheetOpen: open }),
  clearEditingSoftware: () => set({ editingSoftware: null }),
}));

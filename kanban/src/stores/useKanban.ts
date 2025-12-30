import { create } from "zustand";

interface Board {
  id: string;
  name: string;
}

interface KanbanState {
  boards: Board[];
  createBoard: (board: Board) => void;
}

export const useKanban = create<KanbanState>((set) => ({
  boards: [],
  createBoard: (board: Board) =>
    set((state) => ({ boards: [...state.boards, board] })),
}));

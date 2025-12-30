import { create } from "zustand";

/**
 * 看板(Board)数据结构
 */
interface Board {
  id: string;
  name: string;
}

/**
 * 看板状态管理器接口定义
 */
interface KanbanState {
  // 看板列表
  boards: Board[];
  // 创建看板的方法
  createBoard: (board: Board) => void;
}

/**
 * 使用 Zustand 创建的看板 Store
 */
export const useKanban = create<KanbanState>((set) => ({
  // 初始看板列表为空
  boards: [],
  // 实现创建看板的方法，将新看板添加到列表中
  createBoard: (board: Board) =>
    set((state) => ({ boards: [...state.boards, board] })),
}));

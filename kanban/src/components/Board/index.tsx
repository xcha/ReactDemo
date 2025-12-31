import { useKanban } from "@/stores/useKanban";
import { Task } from "./Task";
import { DndContext } from "@dnd-kit/core";
import { KanbanGroup } from "./KanbanGroup";

export const Board = () => {
  const { boards } = useKanban();

  return (
    <DndContext>
    <div className="flex flex-row">
      {boards.map((board) => (
        <div key={board.id} className="flex flex-row">
          <KanbanGroup title={board.id}>
            <div className="kanban-group p-2 mr-1 w-[260px] rounded-xl bg-blue-100">
              <div className="flex flex-col">
                <div className="w-fit rounded-full bg-blue-200 px-1 mb-2">
                  进行中
                </div>
                <div>
                  {[0, 1, 2].map((item) => (
                    <Task key={item} id={item} title={`任务${item}`} />
                  ))}
                </div>
              </div>
            </div>          
          </KanbanGroup>
        </div>
      ))}
    </div>
    </DndContext>
  );
};

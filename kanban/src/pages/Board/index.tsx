import { useKanban } from "@/stores/useKanban";
import { Button } from "@/components/ui/button";
import { Board } from "@/components/Board";
export const BoardPage = () => {
  const { boards, createBoard } = useKanban();
  return (
    <div className="bg-amber-200">
      <Board />
      <Button
        variant="default"
        onClick={() => {
          createBoard({ id: `${boards.length}`, name: "新板" });
        }}
      >
        创建
      </Button>
    </div>
  );
};

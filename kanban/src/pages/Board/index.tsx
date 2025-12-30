import { useKanban } from '@/stores/useKanban'
import { Button } from '@/components/ui/button'

export const Board =() => {
  const { boards, createBoard } = useKanban()
  return (
    <> 
    <div>
      <h1>{boards.map((board) => board.name).join(', ')}</h1>
    </div>
      <Button onClick={() => createBoard({ id: `${boards.length}`, name: '新版' })}>
        Create Board
      </Button>
    </>
   
  )
}

export default Board

import { useDroppable } from '@dnd-kit/core'
import React from 'react'

interface KanbanGroupProps extends React.PropsWithChildren {
  /** 分组标题（如：待处理、进行中、已完成） */
  title: string
}

/**
 * 看板分组组件 - 作为拖拽放置区域（Droppable）
 */
export const KanbanGroup = (props: KanbanGroupProps) => {
    const {setNodeRef} = useDroppable({
        id: props.title, // 必填：唯一标识符，通常与分组名称或 ID 对应
      })
  return (
   <div ref={setNodeRef}>
     {props.children}
   </div>
  )
}

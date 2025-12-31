import { useDraggable } from '@dnd-kit/core'

interface TaskProps {
  /** 任务标题，同时也作为该可拖拽元素的唯一 ID */
  id: string | number
  title: string
}

/**
 * 任务卡片组件 - 支持拖拽功能
 */
export const Task = (props: TaskProps) => {
  const { id, title } = props

  // 使用 dnd-kit 的 useDraggable Hook 使组件可拖拽
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id, // 必填：唯一标识符
    data: {
      type: 'task', // 附加数据，方便在拖拽结束时识别类型
    },
  })

  // 根据拖拽状态动态计算位移样式
  const style: React.CSSProperties = {
    // 如果 transform 存在（正在被拖拽），将其转换为 CSS transform 字符串
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  }

  return (
    <div
      ref={setNodeRef} // 将 DOM 节点注册到 dnd-kit
      {...attributes} // 注入无障碍属性
      {...listeners} // 注入拖拽相关的事件监听器（如 pointerdown）
      style={style}
      className="p-2 mb-1 bg-white border-gray-100 rounded-md shadow-sm cursor-grab active:cursor-grabbing"
    >
      {title}
    </div>
  )
}

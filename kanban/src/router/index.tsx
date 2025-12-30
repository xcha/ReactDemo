import { createBrowserRouter } from 'react-router-dom'
import { BoardPage } from '@/pages/Board'

const routers = [
  {
    path: '/',
    element: <div>Home</div>,
  },
  {
    path: '/board',
    element: <BoardPage />,
  },
]

export const router = createBrowserRouter(routers)
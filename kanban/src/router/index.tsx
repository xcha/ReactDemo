/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom'
import Board from '@/pages/Board'

const routers = [
  {
    path: '/',
    element: <div>Home</div>,
  },
  {
    path: '/board',
    element: <Board />,
  },
]

export const router = createBrowserRouter(routers)
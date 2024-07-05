import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import QuizDescription from './components/app/QuizDescription.tsx'
import Quiz from './app/routes/quiz/Quiz.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        path: '/',
        element: <QuizDescription />,
        index: true
      },
      {
        path: 'quiz',
        element: <Quiz />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

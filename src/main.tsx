import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './app/App.tsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import QuizDescription from './components/app/QuizDescription.tsx'
import Home from './app/routes/home'
import QuizDescription from './app/routes/quiz/index.tsx'
import Question from './app/routes/quiz/question/index.tsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children : [
//       {
//         element: <Home />,
//         index: true,
//       },
//       {
//         path: 'quiz/:quizId',
//         element:  <QuizDescription />,
//       },
//       {
//         path: 'question/:questionId',
//         element: <div>question</div>,
//       }
      
//     ]
//   },
 
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={'/quiz/:quizId'} element={<QuizDescription />} />
      <Route path={'question/:questionId'} element={<p>asdf</p>} />
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

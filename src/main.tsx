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
import AuthLayout from './app/routes/auth/index.tsx';
import Login from './app/routes/auth/login/index.tsx';
import Register from './app/routes/auth/register/index.tsx';
import ForgotPassword from './app/routes/auth/forgot-password/index.tsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/auth",
//         element: <AuthLayout />,
//         children: [
//           {
//             path: "/auth/login",
//             element: <Login />
//           },
//           {
//             path: "/auth/register",
//             element: <Register />
//           },
//           {
//             path: "/auth/forgot-password",
//             element: <ForgotPassword />
//           }
//         ]
//       },
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: '/quiz/:quizId',
//         element: <QuizDescription />,
//       },
//       {
//         path: '/quiz/:quizId/question/:questionId',
//         element: <Question />,
//       },

//     ]
//   },
//   {
//     path: "/not-found",
//     element: <div>Not found</div>
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={'/quiz/:quizId'} element={<QuizDescription />} />
      <Route path={'/quiz/:quizId/question/:questionId'} element={<Question />} />

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      </Route>
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

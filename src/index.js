import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   Outlet,
//   createRoutesFromElements,
// } from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar'
import Task1 from './Routes/Task1'
// import Task2 from './Routes/Task2'
// import Task3 from './Routes/Task3'

const AppLayout = () => (
  <>
    <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div class="h-full px-2 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <Sidebar />
      </div>
    </aside>
    <div class="content p-4 sm:ml-64">
      {/* <Outlet /> */}
      <Task1 />
    </div>
    
  </>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Task1 />,
//       },
//       // {
//       //   path: "/tasks",
//       //   element: <Task1 />,
//       // },
//       // {
//       //   path: "/task2",
//       //   element: <Task2 />,
//       // },
//       // {
//       //   path: "/task3",
//       //   element: <Task3 />,
//       // },
//     ],
// },
// ])

root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <AppLayout />
  </React.StrictMode>
)


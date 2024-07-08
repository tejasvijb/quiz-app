import './App.css'

import { Outlet } from "react-router-dom";


function App() {

  return (
    <main className='flex justify-center items-center align-center h-full'>
      <section className='relative drop-shadow-lg	rounded-md w-[450px] sm:h-fit sm:min-h-[570px] max-sm:h-screen border overflow-y-auto'>

        <Outlet />


      </section>
    </main >
  )
}

export default App

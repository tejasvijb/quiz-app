import './App.css'

import { Outlet } from "react-router-dom";


function App() {

  return (
    <main className='flex justify-center items-center align-center h-full'>
      <section className='relative 	rounded-md w-[450px] h-screen border '>
        <Outlet />
      </section>
    </main >
  )
}

export default App

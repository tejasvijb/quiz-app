import './App.css'

import { Outlet } from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


// Create a client
const queryClient = new QueryClient()


function App() {

  return (
    <QueryClientProvider client={queryClient}>

      <main className='flex justify-center items-center align-center h-full'>
        <section className='relative 	rounded-md w-[450px] h-screen border '>
          <Outlet />
        </section>
      </main >
      <ReactQueryDevtools initialIsOpen={false} />



    </QueryClientProvider>

  )
}

export default App

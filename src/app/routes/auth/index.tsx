import { Outlet } from "react-router-dom";



export default function AuthLayout() {


  // return (
  //   <div className="h-full bg-[url('/background.png')] ">
  //     <Outlet />
  //   </div>
  // )

  return (
    <div className="relative h-full">
      <div className="absolute inset-0 bg-[url('/background.png')] bg-red-200 bg-cover bg-center opacity-15"></div>
      <div className="relative h-full z-10">
        <Outlet />
      </div>
    </div>
  )
}
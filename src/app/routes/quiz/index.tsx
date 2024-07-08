import { Share, Volume1 } from "lucide-react";
import { Avatar, AvatarFallback } from "../../../components/ui/avatar";
import Drawer from "./components/Drawer";
// import { Avatar, AvatarFallback } from "../ui/avatar";
// import Drawer from "../common/Drawer";


export default function QuizDescription() {



  return (
    <div className="h-full flex flex-col justify-between p-3">
      <div>
        <div className="h-[26vh] bg-[url('/hero.png')] object-cover bg-no-repeat bg-cover bg-center  "  >
        </div>
        {/* Quiz author section */}
        <div className='flex justify-between mt-4 items-center'>
          <div className='flex gap-2 items-center'>
            <Avatar >
              <AvatarFallback className='bg-red-200'>
                RL
              </AvatarFallback>
            </Avatar>
            <p> Rachel Lopez </p>
          </div>
          <div>
            <Share color="grey" />
          </div>
        </div>
        {/* Quiz author section */}
        <div className='mt-4 flex justify-between items-center'>
          <h3 className='font-bold text-lg' > Friday Quiz (July 5, 2024)</h3>
          <Volume1 color='grey' />
        </div>

        <div className='mt-2'>
          <p className='text-slate-500 text-sm'>
            This quiz travels the world, tests science, sport, social media and sci-fi. It even gives you something to hum for the rest of the day. Are you up for it?
          </p>
        </div>
      </div>

      {/* <div className='flex justify-center items-center p-12'>
        <Button className='bg-blue-400'>Let's Play</Button>
        </div> */}
      <div >
        <div >
          <Drawer />
        </div>
        <footer className='flex justify-end'>
          <a href="#">
            <p className='text-[9px] text-slate-600'>Got questions? Make them a quiz. It's easy</p>
          </a>
        </footer>
      </div>
    </div>
  )
}
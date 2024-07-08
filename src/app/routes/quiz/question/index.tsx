import { Volume2 } from "lucide-react";
import Timer from "../../../../components/common/Timer";

export default function Question() {
    return (
        <div className="bg-slate-100 h-full">
            <div className="flex justify-between items-center bg-white  px-4 py-2">
                <div className="flex flex-col gap-1">
                    <p className="text-sm">Friday Quiz (July 5, 2024)</p>
                    <p className="text-[14px] font-bold text-red-500">Question 1/10</p>
                </div>
                <div className="flex gap-4 items-center">
                    <Volume2 />
                    <Timer initialTime={50} />
                </div>
            </div>
            
            <div className="grid items-center w-full">
                <div className="h-[200px] w-full flex justify-center items-center py-2">
                    <img src="./kafka.png" alt="kafka" className="object-contain h-full"  />
                </div>
            </div>

            <div className="my-2 px-4">
                <p>Who is the author in the image above who also said <span className="font-semibold">'Writing is utter solitude, the descent into the cold abyss of oneself'</span>.</p>
            </div>

            <div className="px-4">
                <ul className="flex flex-col gap-2 ">
                    <li className="bg-white rounded-md p-2">Albert Camus</li>
                    <li className="bg-white rounded-md p-2">Fyodor Dostoevsky</li>
                    <li className="bg-white rounded-md p-2">Virginia Woolf</li>
                    <li className="bg-white rounded-md p-2">Franz Kafka</li>
                </ul>
            </div>

            <footer className='flex justify-end p-3 bg-white mt-2'>
            <a href="#">
              <p className='text-[9px] text-slate-600'>Got questions? Make them a quiz. It's easy</p>
            </a>
          </footer>
        </div>
    )
}

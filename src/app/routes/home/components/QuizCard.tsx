import { Copy, Share } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { IQuizCard } from "../../../types/home";
import { Link } from "react-router-dom";




export default function QuizCard({ id,date, img, title } : IQuizCard) {


    return (
        <div className="p-2 border flex flex-col justify-between rounded-md ">
            <div>
                <p className="font-semibold text-xs mb-2">{date}</p>
                <div className="flex justify-center mb-2">
                    <img src={img} alt="indiaicc2024" className="h-[100px] w-[80px] object-cover"/>
                </div>
                <p className="text-[10px] text-slate-500">
                           {title}
                </p>
            </div>
            
            <div className="flex justify-between mt-2">
            <Link to={`quiz/${id}`}><Button variant="outline">Play</Button></Link>
                <div className="flex gap-4 items-center">
                <Copy color="grey" size={20} />
                <Share color="grey" size={20} />
                </div>
            </div>
        </div>
    )
}
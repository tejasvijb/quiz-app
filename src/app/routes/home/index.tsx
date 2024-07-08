import { IQuizCard } from "../../types/home";
import QuizCard from "./components/QuizCard";



const QuizData: IQuizCard[] = [
    {
        id: '1',
        date: 'Monday Quiz (July 8, 2024)',
        img: './india.png',
        title: "Answer 10 Questions to relive India's Epic Triumph: 11-Year Wait for ICC Title Ends with T20 World Cup Glory!",
    },
    {
        id: '2',
        date: 'Monday Quiz (July 8, 2024)',
        img: './chandrayan3.jpeg',
        title: 'Lunar Pursuit: Chandrayaan-3 Quiz Challenge'
    },
    {
        id: '3',
        date: 'Monday Quiz (July 8, 2024)',
        img: './quiztime.jpg',
        title: 'Lunar Pursuit dolor'
    },
    {
        id: '4',
        date: 'Monday Quiz (July 8, 2024)',
        img: './quiztime.jpg',
        title: 'Lunar Pursuit dolor'
    },
    {
        id: '5',
        date: 'Monday Quiz (July 8, 2024)',
        img: './quiztime.jpg',
        title: 'Lunar Pursuit dolor'
    }
]

export default function Home() {

    return (
        <div className="p-2">
            <header className="text-center">
                <h1 style={{background: "linear-gradient(90deg, rgba(130,116,255,1) 0%, rgba(163,90,161,1) 65%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}} className="font-bold text-2xl">
                    Welcome to BrainTease!
                </h1>
                <p className="text-slate-500">Challenge your mind with engaging quizzes and puzzles; earn points, badges, and rewards to amaze your friends and colleagues!</p>
            </header>

            <div className="grid grid-cols-2 gap-2 mt-8 ">

                { QuizData.map(quizItem => <QuizCard id={quizItem.id} key={quizItem.id} date={quizItem.date} img={quizItem.img} title={quizItem.title} /> ) }

            </div>
        </div>
    )
}
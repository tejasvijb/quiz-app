// src/components/Drawer.js
import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { Button } from '../../../../components/ui/button';
import { Link } from 'react-router-dom';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const questionId = '2'


  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center p-20">
      <Button onClick={toggleDrawer} className='bg-blue-400'>Let's Play</Button>
      <div
        className={`absolute z-30 bottom-0 left-0 w-full bg-gray-800 text-white p-4 transform transition-transform duration-300 ${isOpen ? 'translate-y-0 bottom-0' : 'translate-y-full'
          } ${!isOpen && 'invisible'}`}
      >
        <div className="flex justify-center mb-8">
          <h1 className="font-semibold text-sm">Rules to get you started</h1>
        </div>

        <div className='flex flex-col gap-2 p-2'>
          <ul className='list-disc	'>
            <li>
              <p className='text-[12px]'>You get 50 seconds to answer each question; watch the timer at the top</p>
            </li>
            <li>
              <p className='text-[12px]'>5 points for the correct answer; up to 5 additional points as Speed bonus if you answer quickly</p>
            </li>
            <li>
              <p className='text-[12px]'>There is no negative marking for wrong answers.</p>
            </li>
          </ul>
        </div>
        <Link to={`question/1`}>
          <div className='flex justify-center mt-4'><Button onClick={toggleDrawer} className='bg-blue-400'>Got it!</Button></div>
        </Link>

      </div>
    </div>
  );
};

export default Drawer;

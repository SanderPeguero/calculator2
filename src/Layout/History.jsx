import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

function History({ history, onClick }) {
    return (
        <div className='w-full h-[30rem]  bg-gradient-to-b from-gray-800 bg-gray-700 rounded-xl'>
            <div className='w-full h-10  flex flex-row items-center justify-between'>
                {/* Function onClick: To close the screen */}
                <button onClick={onClick} className='ml-2 text-white font-semibold'>Done</button>
                <span className='text-white font-bold'>History</span>
                {/* Create a clear history function */}
                <button className='mr-2   font-semibold hover:bg-red-500 hover:p-1 hover:rounded-full'><FaTrashAlt color='white' /></button>

            </div>
            <ul className='text-white'>
                {history.map((item, index) => (
                    // flex justify-end: They position the elements at the end of the right
                    <li className='flex justify-end  border-b border-gray-600 mb-2' key={index}>
                        {/* mr: margen  right  mb: margen  bottom */}
                        <span className='mr-4 mb-2'>   {item.expression} = {item.result}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default History;
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Accordion = ({ title, children, icon }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`rounded-md ${isOpen ? 'bg-primarycl text-white' : 'bg-transparent dark:bg-darkbg text-black'} group`}>
            <div
                className={`flex items-center justify-between px-3 cursor-pointer h-10 ${isOpen ? 'bg-primarycl text-white' : 'bg-transparent dark:bg-darkbg text-black dark:text-white hover:text-white'} rounded-md group-hover:bg-primarycl dark:hover:bg-primarycl`}
                onClick={toggleAccordion}
            >
                <div className='w-full flex justify-start items-center gap-3'>
                    <i className='text-2xl'>{icon}</i>
                    <span className="text-base font-medium pt-1 w-full">{title}</span>
                </div>
                <span className={`transform transition-transform ${isOpen ? 'rotate-180 pb-1' : 'rotate-0 pt-1'}`}>
                    <FiChevronDown className='text-lg' />
                </span>
            </div>
            {isOpen && <div className="bg-white dark:bg-darkbg dark:text-white flex border border-gray-200 rounded-b-md w-full">{children}</div>}
        </div>
    );
};

export default Accordion;

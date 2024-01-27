import React, { useEffect, useRef, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles


const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff  ',
  boxShadow: 24,
  p: 4,
};

const UserResetPassword = ({isOpen}) => {  
    const [accordionOne, setAccordionOne] = useState(true);  
    const [subject, setSubject] = useState("User Reset Password");
    const defaultTemplate = `
      <p><strong>@user_name,</strong></p>
      <br />
      <p>Your advertisement creation mail has sent successfully</p>
      
     <br />
      <p>Thanks</p>
    `;
    const [editorValue, setEditorValue] = useState(defaultTemplate);
    const [content, setContent] = useState('');


    const quillModules = {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
        [{ align: [] }],
        [{ color: [] }],
        ['code-block'],
        ['clean'],
      ],
    };
  
  
    const quillFormats = [
      'header',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'list',
      'bullet',
      'link',
      'image',
      'align',
      'color',
      'code-block',
    ];
  
  
    const handleEditorChange = (newContent) => {
      setContent(newContent);
    };
    return (
    
    <div>
      <Accordion expanded={accordionOne} className="w-full " style={{ padding: "0px" }}>
        <AccordionSummary
          onClick={() => setAccordionOne(!accordionOne)}
          className='bg-white dark:bg-darkbg'
          expandIcon={<ExpandMoreIcon className="dark:text-white" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <button className="dark:text-white text-black  font-bold text-md ">
            User Reset Password
          </button>
        </AccordionSummary>
        <AccordionDetails className="dark:bg-gray-700">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
            <div className="flex flex-col gap-8 ">
              <div className='px-2'>
                <h1 className='text-base font-bold text-black dark:text-white'>Subject</h1>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="border px-2 py-1 text-gray-600 dark:bg-white border-gray-600 w-full rounded-sm outline-none"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className='px-2'>
                <h1 className='text-base font-bold text-black dark:text-white'>Message</h1>
                <div className="max-h-[500px] w-80 md:w-[450px]">
          <QuillEditor
            value={defaultTemplate || ''}
            onChange={handleEditorChange}
            modules={quillModules}
            formats={quillFormats}
            className="w-full !max-h-96 bg-white dark:bg-white text-black"
          />
        </div>
              </div>
              <div className='flex justify-start items-center px-2'>
                <button className='bg-primarycl text-white px-4 py-2 rounded-md border-none w-20 h-10 hover:bg-darkbg hover:text-white !hover:border-2 hover:border-primarycl  dark:bg-primarycl dark:text-white'>Send</button>
              </div>
              <div
                className="text-red-800 dark:text-red-600 text-sm px-2 font-light"
              >
                <p>@name will be replaced dynamically with name</p>
                <p>@user_name will be replaced dynamically with username</p>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default UserResetPassword
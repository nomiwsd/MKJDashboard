import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles


const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

const AdvertiseCreatorMail = () => {
  const [subject, setSubject] = useState("Advertise Creator Mail");
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
    <div><div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
      <div className="flex flex-col gap-3">
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
          <div className="max-h-[500px]">
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
          className="text-red-800 dark:text-red-600 text-sm px-2 py-2 font-light"
        >
          <p>@name will be replaced dynamically with name</p>
          <p>@user_name will be replaced dynamically with username</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AdvertiseCreatorMail
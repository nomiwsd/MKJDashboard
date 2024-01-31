'use client'
import React from 'react'
import { useState,useEffect } from 'react';
import Category from '../../../components/Category';

const useLocalStorage = (key, defaultValue) => {
  const storedValue = typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
  const initial = storedValue ? JSON.parse(storedValue) : defaultValue;

  const [value, setValue] = useState(initial);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};


const AddCategory = () => {
  const [categories, setCategories] = useLocalStorage('categories', []);
  const [newCategory, setNewCategory] = useState({
    imageUrl: '',
    titles: ['', '', ''],
    mainHeading: '',
  });

  const addCategory = () => {
    if (newCategory.imageUrl && newCategory.titles.some(title => title.trim() !== '') && newCategory.mainHeading.trim() !== '') {
      setCategories([...categories, newCategory]);
      setNewCategory({ imageUrl: '', titles: ['', '', ''], mainHeading: '' });
    } else {
      alert('Please provide a valid image URL, at least one title, and a main heading.');
    }
  };

  const handleInputChange = (index, value) => {
    setNewCategory(prevCategory => ({
      ...prevCategory,
      titles: prevCategory.titles.map((title, i) => (i === index ? value : title)),
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCategory({ ...newCategory, imageUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 px-4 my-8">
      <div className='flex flex-col gap-4 w-full md:w-2/4 xl:w-1/4'>
      <h1 className="text-2xl font-semibold mb-2">Add New Category</h1>   
    <form className="mt-2">
      <div className='flex flex-col  gap-2 justify-start'>
      <label className="text-base font-medium dark:text-white">Image URL:</label>
      <input
        type="text"
        value={newCategory.imageUrl}
        onChange={(e) => setNewCategory({ ...newCategory, imageUrl: e.target.value })}
        className="border border-primarycl rounded-md p-2 w-full bg-white"
      /></div>
      <div className='flex flex-col  gap-2 justify-start'>
      <label className="text-base font-medium dark:text-white">Upload Image:</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="file:py-2 file:px-4 file:rounded-md
        file:border2 file:border-primarycl file:text-sm file:font-semibold
        file:bg-white file:text-primarycl
        hover:file:bg-primarycl hover:file:text-white"
      />
      </div>
      <div className='flex flex-col gap-2 justify-start'>
      <label className="text-base font-medium dark:text-white">Main Heading:</label>
      <input
        type="text"
        value={newCategory.mainHeading}
        onChange={(e) => setNewCategory({ ...newCategory, mainHeading: e.target.value })}
        className="border p-2 w-full mb-4 bg-white rounded-md"
      />
      </div>
      <div className='flex flex-col  gap-2 justify-start'>
      <label className="text-base font-medium dark:text-white">Titles (up to 3):</label>
      {newCategory.titles.map((title, index) => (
        <input
          key={index}
          type="text"
          value={title}
          onChange={(e) => handleInputChange(index, e.target.value)}
          className="border p-2 w-full mb-2 bg-white rounded-md"
        />
      ))}
      </div>
      
    </form>
    <button onClick={addCategory} className="bg-primarycl hover:bg-darkbg rounded-md text-white px-4 py-2 mb-4 w-36 h-12">
      Add Category
    </button>
      </div>
     <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full justify-center items-center md:items-start md:w-2/4 xl:3/4">
        {categories.map((category, index) => (
          <Category key={index} {...category} />
        ))}
      </div>
  </div>
  );
}

export default AddCategory
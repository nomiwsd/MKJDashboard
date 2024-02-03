'use client'
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
};

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
  const [rows, setRows] = useState([]);
  const [newCategory, setNewCategory] = useState({
    imageUrl: '',
    titles: ['', '', ''],
    mainHeading: '',
  });
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleOpenAddModal = () => setAddModalOpen(true);
  const handleCloseAddModal = () => setAddModalOpen(false);
  const handleOpenEditModal = () => setEditModalOpen(true);
  const handleCloseEditModal = () => setEditModalOpen(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleActionClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleActionClose = () => {
    setAnchorEl(null);
  };

  const handleEditMenuClick = (id) => {
    handleActionClose();
    handleEdit(id);
  };

  const handleDeleteMenuClick = (id) => {
    handleActionClose();
    handleDelete(id);
  };
  // Initialize rows from the categories stored in local storage
  useEffect(() => {
    setRows(categories.map((category, index) => ({
      ...category,
      id: index + 1,
    })));
  }, [categories]);

  const addCategory = () => {
    if (newCategory.imageUrl && newCategory.titles.some(title => title.trim() !== '') && newCategory.mainHeading.trim() !== '') {
      const newCategoryWithId = {
        id: categories.length + 1,
        categoryimg: newCategory.imageUrl,
        categoryname: newCategory.mainHeading,
        firsttitle: newCategory.titles[0],
        secondtitle: newCategory.titles[1],
        thirdtitle: newCategory.titles[2],
      };

      setCategories([...categories, newCategoryWithId]);
      setRows(prevRows => [
        ...prevRows,
        {
          id: newCategoryWithId.id,
          categoryimg: newCategoryWithId.categoryimg,
          categoryname: newCategoryWithId.categoryname,
          firsttitle: newCategoryWithId.firsttitle,
          secondtitle: newCategoryWithId.secondtitle,
          thirdtitle: newCategoryWithId.thirdtitle,
        },
      ]);

      setNewCategory({ imageUrl: '', titles: ['', '', ''], mainHeading: '' });
      handleCloseAddModal();
    } else {
      alert('Please provide a valid image URL, at least one title, and a main heading.');
    }
  };

  const handleEdit = (id) => {
    const selectedCategory = categories.find(category => category.id === id);

    if (selectedCategory) {
      setNewCategory({
        imageUrl: selectedCategory.categoryimg || '',
        titles: [selectedCategory.firsttitle || '', selectedCategory.secondtitle || '', selectedCategory.thirdtitle || ''],
        mainHeading: selectedCategory.categoryname || '',
      });

      setSelectedCategoryId(id);
      handleOpenEditModal();
    } else {
      console.error(`Category with ID ${id} not found.`);
    }
  };

  const handleDelete = (id) => {
    const updatedCategories = categories.filter(category => category.id !== id);
    setCategories(updatedCategories);
    setRows(prevRows => prevRows.filter(row => row.id !== id));
  };
  const handleModalClose = () => {
    setNewCategory({ imageUrl: '', titles: ['', '', ''], mainHeading: '' });
    setSelectedCategoryId(null);
    handleCloseEditModal();
  };

  const handleSaveEdit = () => {
    const updatedCategories = categories.map(category => {
      if (category.id === selectedCategoryId) {
        return {
          id: category.id,
          categoryimg: newCategory.imageUrl,
          categoryname: newCategory.mainHeading,
          firsttitle: newCategory.titles[0],
          secondtitle: newCategory.titles[1],
          thirdtitle: newCategory.titles[2],
        };
      } else {
        return category;
      }
    });

    setCategories(updatedCategories);
    setRows(prevRows => prevRows.map(row => {
      if (row.id === selectedCategoryId) {
        return {
          ...row,
          categoryimg: newCategory.imageUrl,
          categoryname: newCategory.mainHeading,
          firsttitle: newCategory.titles[0],
          secondtitle: newCategory.titles[1],
          thirdtitle: newCategory.titles[2],
        };
      } else {
        return row;
      }
    }));

    handleModalClose();
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

  const handleAddNewCategory = () => {
    setNewCategory({ imageUrl: '', titles: ['', '', ''], mainHeading: '' });
    handleOpenAddModal();
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    { field: 'categoryimg', headerName: 'Category Image', width: 150 },
    {
      field: 'categoryname',
      headerName: 'Category Name',
      width: 130,
      editable: true,
    },
    {
      field: 'firsttitle',
      headerName: 'First Title',
      width: 100,
      editable: true,
    },
    {
      field: 'secondtitle',
      headerName: 'Second Title',
      width: 100,
      editable: true,
    },
    {
      field: 'thirdtitle',
      headerName: 'Third Title',
      width: 100,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      renderCell: (params) => (
        <div>
          <button
            className='bg-primarycl rounded-md py-1 px-2 text-white flex gap-1'
            onClick={(event) => handleActionClick(event)}
          >
              <span className="text-white text-base font-medium">Action</span>
              <span>
                <EditIcon className="text-white text-base font-medium" />
              </span>
          </button>
          <Menu
            id={`menu-${params.row.id}`}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleActionClose}
          >
            <MenuItem onClick={() => handleEditMenuClick(params.row.id)}>Edit</MenuItem>
            <MenuItem onClick={() => handleDeleteMenuClick(params.row.id)}>Delete</MenuItem>
          </Menu>
        </div>
      ),
    },
  ];

  return (
    <div className='flex flex-col gap-4'>
      <div> <button className="bg-primarycl hover:bg-white hover:text-black hover:border hover:border-primarycl rounded-md text-white px-2 h-10" onClick={handleAddNewCategory}>
        Add New Category
      </button></div>
      <Box sx={{ height: 400 }} className='sm:w-fit' >
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          pageSizeOptions={[8, 12]}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 12 },
            },
          }}
        />
      </Box>
      <Modal
        open={isAddModalOpen}
        onClose={handleCloseAddModal}
        aria-labelledby="add-modal-title"
        aria-describedby="add-modal-description"
        className='overflow-auto pb-10'>
        <Box sx={style} className='flex flex-col gap-2 rounded-md focus:outline-none'>
          <div className='flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
            <h1 className="text-2xl font-semibold">Add New Category</h1>
            <button onClick={handleCloseAddModal} className='bg-primarycl w-10 h-10'>
              <CloseIcon className='text-white' />
            </button>
          </div>
          <form className='px-4 py-2'>
            <div className='flex flex-col gap-1 justify-start'>
              <label className="text-lg font-semibold dark:text-white">Image URL:</label>
              <input
                type="text"
                value={newCategory.imageUrl}
                onChange={(e) => setNewCategory({ ...newCategory, imageUrl: e.target.value })}
                className="border border-primarycl rounded-md p-2 w-full bg-white"
              />
            </div>
            <div className='flex flex-col gap-1 justify-start'>
              <label className="text-lg font-semibold dark:text-white">Upload Image:</label>
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
            <div className='flex flex-col gap-1 justify-start'>
              <label className="text-lg font-semibold dark:text-white">Main Heading:</label>
              <input
                type="text"
                value={newCategory.mainHeading}
                onChange={(e) => setNewCategory({ ...newCategory, mainHeading: e.target.value })}
                className="border p-2 w-fullbg-white rounded-md"
              />
            </div>
            <div className='flex flex-col gap-1 justify-start'>
              <label className="text-lg font-semibold dark:text-white">Titles (up to 3):</label>
              {newCategory.titles.map((title, index) => (
                <input
                  key={index}
                  type="text"
                  value={title}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className="border p-2 w-full bg-white rounded-md"
                />
              ))}
            </div>
          </form>
          <div className='px-4 py-2'>
            <button onClick={addCategory} className="bg-primarycl hover:bg-white hover:text-black hover:border hover:border-primarycl rounded-md text-white px-2 h-10">
              Add Category
            </button>
          </div>

        </Box>
      </Modal>


      <Modal
      open={isEditModalOpen}
      onClose={handleCloseEditModal}
      aria-labelledby="edit-modal-title"
      aria-describedby="edit-modal-description"
        className='overflow-auto'>
        <Box sx={style} className='flex flex-col gap-2 rounded-md focus:outline-none'>
          <div className='flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
            <h1 className="text-2xl font-semibold">Edit Category</h1>
            <button onClick={handleModalClose} className='bg-primarycl w-10 h-10'>
              <CloseIcon className='text-white' />
            </button>
          </div>
          <form className='px-4 py-2'>
            <div className='flex flex-col gap-1 justify-start'>
              <label className="text-lg font-semibold dark:text-white">Image URL:</label>
              <input
                type="text"
                value={newCategory.imageUrl}
                onChange={(e) => setNewCategory({ ...newCategory, imageUrl: e.target.value })}
                className="border border-primarycl rounded-md p-2 w-full bg-white"
              />
            </div>
            <div className='flex flex-col gap-1 justify-start'>
              <label className="text-lg font-semibold dark:text-white">Main Heading:</label>
              <input
                type="text"
                value={newCategory.mainHeading}
                onChange={(e) => setNewCategory({ ...newCategory, mainHeading: e.target.value })}
                className="border p-2 w-full mb-4 bg-white rounded-md"
              />
            </div>
            <div className='flex flex-col gap-1 justify-start'>
              <label className="text-lg font-semibold dark:text-white">Titles (up to 3):</label>
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
            <button onClick={handleSaveEdit} className="bg-primarycl hover:bg-white hover:text-black hover:border hover:border-primarycl rounded-md text-white px-2 h-10">
              Save Changes
            </button>
          </form>

        </Box>
      </Modal>
    </div>
  );
};

export default AddCategory;

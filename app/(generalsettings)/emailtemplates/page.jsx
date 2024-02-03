'use client'
import React from 'react';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import CloseIcon from '@mui/icons-material/Close';
import AdminResetPassword from './adminresetpassword/AdminResetPassword';
import UserResetPassword from './userresetpassword/UserResetPassword';
import UserVerifyLinkEmail from './userverifylinkmail/UserVerifyLinkMail';
import UserVerifyCodeEmail from './userverifycodemail/UserVerifyCodeEmail';
import AdvertiseCreatorMail from './advertisecreatormail/AdvertiseCreatorMail';
import AdvertiseDraftMail from './advertisedraftmail/AdvertiseDraftMail';
import AdvertiseExpireMail from './advertiseexpiremail/AdvertiseExpireMail';
import AdvertiseDeleteMail from './advertisedeletemail/AdvertiseDeleteMail';
import { Box } from '@mui/material';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,

};

const EmailTemplates = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedModal, setSelectedModal] = useState(null);
  const [Open, setOpen] = useState(false);

  const handleRowClick = (params) => {
    if (params && params.row && params.row.id !== undefined) {
      setSelectedRow(params.row.id);

      // Determine which modal to open based on the selected row
      switch (params.row.id) {
        case 1:
          setSelectedModal('modal1');
          break;
        case 2:
          setSelectedModal('modal2');
          break;
        case 3:
          setSelectedModal('modal3');
          break;
        case 4:
          setSelectedModal('modal4');
          break;
        case 5:
          setSelectedModal('modal5');
          break;
        case 6:
          setSelectedModal('modal6');
          break;
        case 7:
          setSelectedModal('modal7');
          break;
        case 8:
          setSelectedModal('modal8');
          break;
        default:
          setSelectedModal(null);
      }

      setOpen(true);
    }
  };

  const handleCloseModal = () => {
    setSelectedModal(null);
    setOpen(false);
  };
  const rows = [
    {
      id: 1,
      title: "Admin Reset Password",
      action: "Action",
    },
    {
      id: 2,
      title: "User Reset Password",
      action: "Action",
    },
    {
      id: 3,
      title: "User Verify Link Mail",
      action: "Action",
    },
    {
      id: 4,
      title: "User Verify Code Mail",
      action: "Action",
    },
    {
      id: 5,
      title: "Advertisement Creation Mail",
      action: "Action",
    },
    {
      id: 6,
      title: "Advertisement Draft Mail",
      action: "Action",
    },
    {
      id: 7,
      title: "Advertisement Expire Mail",
      action: "Action",
    },
    {
      id: 8,
      title: "Advertisement Delete Mail",
      action: "Action",
    },
  ];
  const columns = [
    {
      field: "title",
      width: 250,
      sortable: false,
      headerAlign: "center",
      headerClassName: "border flex justify-center item-center border-black border-t-0 font-normal text-center",
      cellClassName:
        "text-black dark:text-white text-sm font-normal flex justify-center item-center text-center border border-t-0  border-r-0",
      renderHeader: (params) => (
        <b className='text-xs font-black text-center p-12 dark:text-white'>
          Title
        </b>
      ),
    },

    {
      field: 'action',
      type: 'button',
      headerClassName: 'border border-black border-r-0 border-t-0 font-normal border-l-0 ',
      sortable: false,
      width:90,
      cellClassName: 'text-black dark:text-white border border-t-0  border-r-0 ',
      renderHeader: () => (
        <b className='text-xs font-black p-0 dark:text-white'>Action</b>
      ),
      renderCell: (params) => {
        return (
           <button
              className="btn bg-primarycl px-2 py-1 rounded-md w-full"
              onClick={() => handleRowClick(params)}
            >
              <span className="text-white text-sm">Action</span>
              <span>
                <EditIcon className="text-white text-sm" />
              </span>
            </button>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col gap-2 w-full py-2">
      <h2 className='text-2xl font-bold'>Email Templates</h2>
      <div>
        <DataGrid
          unstable_ignoreValueFormatterDuringExport
          onRowSelectionModelChange={(select) => {
            console.log(select);
          }}
          rows={rows}
          columns={columns}
          onRowClick={handleRowClick}
          pageSizeOptions={[8, 4]}
          checkboxSelection
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          className="sm:w-fit dark:!text-white"
          rowHeight={35}
          columnHeaderHeight={42}
        />
      </div>
      {selectedModal === 'modal1' && (
        <Modal open={Open} onClose={handleCloseModal}>
          <Box sx={style} className='flex flex-col gap-2 rounded-md focus:outline-none'>
            <div className='flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
              <h1 className="text-2xl font-semibold">Admin Reset Password</h1>
              <button onClick={handleCloseModal} className='bg-primarycl w-10 h-10'>
                <CloseIcon className='text-white' />
              </button>
            </div>
            <AdminResetPassword />
            </Box>
        </Modal>
      )}
      {selectedModal === 'modal2' && (
        <Modal open={Open} onClose={handleCloseModal}>
          <Box sx={style} className='flex flex-col gap-2 rounded-md focus:outline-none'>
            <div className='flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
              <h1 className="text-2xl font-semibold">User Reset Password</h1>
              <button onClick={handleCloseModal} className='bg-primarycl w-10 h-10'>
                <CloseIcon className='text-white' />
              </button>
            </div>
            <UserResetPassword /></Box>
        </Modal>
      )}
      {selectedModal === 'modal3' && (
        <Modal open={Open} onClose={handleCloseModal}>
          <Box sx={style} className='flex flex-col gap-2 rounded-md focus:outline-none'>
            <div className='flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
              <h1 className="text-2xl font-semibold">User Verify Link Email</h1>
              <button onClick={handleCloseModal} className='bg-primarycl w-10 h-10'>
                <CloseIcon className='text-white' />
              </button>
            </div>  <UserVerifyLinkEmail /></Box>
        </Modal>
      )}
      {selectedModal === 'modal4' && (
        <Modal open={Open} onClose={handleCloseModal}>
          <Box sx={style} className='flex flex-col gap-2 rounded-md focus:outline-none'>
            <div className='flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
              <h1 className="text-2xl font-semibold">User Verify Code Mail</h1>
              <button onClick={handleCloseModal} className='bg-primarycl w-10 h-10'>
                <CloseIcon className='text-white' />
              </button>
            </div><UserVerifyCodeEmail /></Box>
        </Modal>
      )}
      {selectedModal === 'modal5' && (
        <Modal open={Open} onClose={handleCloseModal}>
          <Box sx={style} className='flex flex-col gap-2 rounded-md focus:outline-none'>
            <div className='flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
              <h1 className="text-2xl font-semibold">Advertise Creator Mail</h1>
              <button onClick={handleCloseModal} className='bg-primarycl w-10 h-10'>
                <CloseIcon className='text-white' />
              </button>
            </div>   <AdvertiseCreatorMail /></Box>
        </Modal>
      )}
      {selectedModal === 'modal6' && (
        <Modal open={Open} onClose={handleCloseModal}>
          <Box sx={style} className='flex flex-col gap-2 rounded-md focus:outline-none'>
            <div className='flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
              <h1 className="text-2xl font-semibold">Advertise Draft Mail</h1>
              <button onClick={handleCloseModal} className='bg-primarycl w-10 h-10'>
                <CloseIcon className='text-white' />
              </button>
            </div>  <AdvertiseDraftMail /> </Box>
        </Modal>
      )}
      {selectedModal === 'modal7' && (
        <Modal open={Open} onClose={handleCloseModal}>
          <Box sx={style} className='flex flex-col gap-2 rounded-md focus:outline-none'>
            <div className='flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
              <h1 className="text-2xl font-semibold">Advertise Expire Mail</h1>
              <button onClick={handleCloseModal} className='bg-primarycl w-10 h-10'>
                <CloseIcon className='text-white' />
              </button>
            </div> <AdvertiseExpireMail /> </Box>
        </Modal>
      )}
      {selectedModal === 'modal8' && (
        <Modal open={Open} onClose={handleCloseModal}>
          <Box sx={style} className='flex flex-col gap-2 rounded-md focus:outline-none'>
            <div className='flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
              <h1 className="text-2xl font-semibold">Advertise Delete Mail</h1>
              <button onClick={handleCloseModal} className='bg-primarycl w-10 h-10'>
                <CloseIcon className='text-white' />
              </button>
            </div> <AdvertiseDeleteMail /> </Box>
        </Modal>
      )}
    </div>
  );
};

export default EmailTemplates
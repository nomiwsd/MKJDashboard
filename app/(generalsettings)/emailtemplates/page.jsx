'use client'
import React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import AdminResetPassword from './adminresetpassword/AdminResetPassword';
import UserResetPassword from './userresetpassword/UserResetPassword';
import UserVerifyLinkEmail from './userverifylinkmail/UserVerifyLinkMail';
import UserVerifyCodeEmail from './userverifycodemail/UserVerifyCodeEmail';
import AdvertiseCreatorMail from './advertisecreatormail/AdvertiseCreatorMail';
import AdvertiseDraftMail from './advertisedraftmail/AdvertiseDraftMail';
import AdvertiseExpireMail from './advertisedraftmail/AdvertiseDraftMail';
import AdvertiseDeleteMail from './advertisedeletemail/AdvertiseDeleteMail';

const EmailTemplates = () => {
  const [accordionOne, setAccordionOne] = useState(true);
  // const selectFile = useRef(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (params) => {
    setSelectedRow(params.row.id);
  };
   const [anchorEl, setAnchorEl] = React.useState(null);
   const opens = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    setOpen(true);
  };
  const handleClose3 = () => {
    setOpen2(true);
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
      width: 270,
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
      headerClassName: 'border border-black border-r-0 flex justify-center item-center p-6 text-center border-t-0 font-normal border-l-0 ',
      sortable: false,
      width: 100,
      cellClassName: 'text-black dark:text-white flex justify-center item-center text-center border border-t-0  border-r-0',
      renderHeader: (params) => (
        <b className='text-xs font-black p-0 dark:text-white'>Action</b>
      ),
      renderCell: (params) => {
        return (
          <div className="flex justify-center item-center w-full dark:text-white">
            <button
              className="btn bg-primarycl px-2 py-1 rounded-md w-full"
              onClick={() => handleRowClick(params)}
            >
              <span>
                <EditIcon className="text-white text-sm" />
              </span>
              <span className="text-white text-sm">Action</span>
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex lg:flex-row flex-col gap-4 w-full px-4 py-4">
    <div className="lg:w-[40%] sm:w-fit w-full">
      <Accordion expanded={accordionOne}>
        <AccordionSummary className='dark:bg-darkbg dark:text-white'
          onClick={() => setAccordionOne(!accordionOne)}
          expandIcon={<ExpandMoreIcon className="dark:text-white" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <button className="dark:text-white text-black font-myfont font-bold text-md ">
            Show Contents for Email
          </button>
        </AccordionSummary>
        <AccordionDetails className="dark:bg-darkbg dark:text-white">
          <div className="relative overflow-x-auto dark:!text-white">
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
              className="custom-datagrid dark:!text-white"
              rowHeight={35}
              columnHeaderHeight={42}
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>

    {/* Render the selected section based on the selected row */}
    {selectedRow === 1 && <AdminResetPassword isOpen={true} />}
    {selectedRow === 2 && <UserResetPassword isOpen={true} />}
    {selectedRow === 3 && <UserVerifyLinkEmail isOpen={true} />}
    {selectedRow === 4 && <UserVerifyCodeEmail isOpen={true} />}
    {selectedRow === 5 && <AdvertiseCreatorMail isOpen={true} />}
    {selectedRow === 6 && <AdvertiseDraftMail isOpen={true} />}
    {selectedRow === 7 && <AdvertiseExpireMail isOpen={true} />}
    {selectedRow === 8 && <AdvertiseDeleteMail isOpen={true} />}
    {/* Add more sections as needed */}
  </div>
  );
};

export default EmailTemplates
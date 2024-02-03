import React, { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, createTheme } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";  // Import Modal component from Material-UI
import { Close } from "@mui/icons-material";
export default function CountriesTab() {
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
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  // State to manage modal open/close
  const [rows, setRows] = useState('');

  const handleAddNewCountry = () => {
    setOpenModal(true);
    resetInputState();
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleCloseEditModal = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const resetHandler = () => {
    setInput({
      countryName: "",
      countryCode: "",
      currencyCode: "",
      phoneCode: "",
      state: "",
      city: "",
    });
    setSelectedCountryCode("");
    setSelectedCountryPhone("");
    setSelectedCurrencyCode("");
    setSelectedCountry("");
  };
  const resetInputState = () => {
    setInput({
      countryName: "",
      countryCode: "",
      currencyCode: "",
      phoneCode: "",
      state: "",
      city: "",
    });
  };
  
  const columns = [
    {
      field: "id",
      headerName: "ID",
      sortable: false,
      headerClassName: "border border-black",
      width: 20,
      cellClassName: "text-black dark:text-white border border-t-0 border-r-0 text-sm",
      renderHeader: () => (
        <b className="text-sm font-bold">ID</b>
      ),
    },
    {
      field: "countryName",
      sortable: false,
      width: 140,
      cellClassName: "text-black dark:text-white border border-t-0 border-r-0 text-sm",
      renderHeader: () => (
        <Tooltip placement="top" title="Country Name">
          <b className="text-sm font-bold">Country Name</b>
        </Tooltip>
      ),
    },
    {
      field: "countryCode",
      width: 65,
      sortable: false,
      headerClassName: "border border-black",
      cellClassName: "text-black dark:text-white text-center border border-t-0 border-r-0",
      renderHeader: () => (
        <Tooltip placement="top" title="Country 2-Letter Code">
          <b className="text-sm font-bold">Code</b>
        </Tooltip>
      ),
    },
    {
      field: "currencyCode",
      headerName: "Currency Code",
      width: 80,
      headerClassName: "border border-black ",
      sortable: false,
      cellClassName: "text-black dark:text-white border border-t-0 border-r-0 text-sm",
      renderHeader: () => (
        <Tooltip placement="top" title="Currency Code">
          <b className="text-sm font-bold">
            Currency
          </b>
        </Tooltip>
      ),
    },
    {
      field: "phoneCode",
      headerName: "Phone Code",
      headerClassName: "border border-black",
      width: 100,
      sortable: false,
      cellClassName: "text-black dark:text-white border border-t-0 border-r-0 text-sm",
      renderHeader: () => (
        <Tooltip placement="top" title="Phone Code">
          <b className="text-sm font-bold">Phone</b>
        </Tooltip>
      ),
    },
    {
      field: "state",
      headerName: "State",
      headerClassName: "border border-black",
      sortable: false,
      width: 140,
      cellClassName: "text-black dark:text-white border border-t-0 border-r-0 text-sm",
      renderHeader: () => (
        <Tooltip placement="top" title="State">
          <b className="text-sm font-bold">State</b>
        </Tooltip>
      ),
    },
    {
      field: "city",
      headerName: "City",
      headerClassName: "border border-black",
      sortable: false,
      width: 140,
      cellClassName: "text-black dark:text-white border border-t-0 border-r-0 text-sm",
      headerclassname: "bold-header",
      renderHeader: () => (
        <Tooltip placement="top" title="City">
          <b className="text-sm font-bold">City</b>
        </Tooltip>
      ),
    },
     {
      field: "action",
      type: "button",
      headerClassName: " border-black",
      sortable: false,
      width: 90,
      cellClassName: "text-black dark:text-white border border-t-0 border-r-0 text-sm",
      renderHeader: () => (
        <b className="text-sm font-bold">Action</b>
      ),
      renderCell: (params) => {
        const handleCellClick = (event) => {
          event.stopPropagation();
          console.log("Cell clicked in row with ID: ", params.id);
        };

        return (
          <div onClick={handleCellClick}>
            <button
              className="bg-primarycl px-2 py-1 rounded-md"
              id="basic-button"
              aria-controls={opens ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={opens ? "true" : undefined}
              onClick={(event) => {
                handleClick(event);
                handleEdit(params);
              }}
            >
              <span>
                <EditIcon className="text-white" style={{ fontSize: "18px" }} />
              </span>
              <span style={{ fontSize: "14px" }} className="text-white">
                {" "}
                Action
              </span>
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={opens}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => {
                setSelectedRow(params.row);
                handleEdit(params);
              }}>Edit</MenuItem>
              <MenuItem onClick={() => {
                setSelectedRow(params.row);
                handleDeleteRow();
              }}>Delete</MenuItem>
            </Menu>
          </div>
        );
      },
    },
  ];
  
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [selectedCountryPhone, setSelectedCountryPhone] = useState("");
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState("");

  const [input, setInput] = useState({
    countryName: "",
    countryCode: "",
    currencyCode: "",
    phoneCode: "",
    state: "",
    city: "",
  });

  const onChangeHandler = (e, name) => {
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newCountry = {
      id: rows.length + 1,
      countryName: input.countryName,
      countryCode: input.countryCode,
      currencyCode: input.currencyCode,
      phoneCode: input.phoneCode,
      state: input.state,
      city: input.city,
    };

    const existingCountries = JSON.parse(localStorage.getItem("countries")) || [];
    const updatedCountries = [...existingCountries, newCountry];

    localStorage.setItem("countries", JSON.stringify(updatedCountries));
    setRows(updatedCountries);

    resetHandler();
    handleCloseModal();
  };

  useEffect(() => {
    const storedCountries = JSON.parse(localStorage.getItem("countries")) || [];
    setRows(storedCountries);
  }, []);

  const [selectedRow, setSelectedRow] = useState(null);

  const handleEdit = (params) => {
    setSelectedRow(params.row);
    setOpen(true);
  };

  useEffect(() => {
    if (selectedRow) {
      setInput({
        countryName: selectedRow.countryName || "",
        countryCode: selectedRow.countryCode || "",
        currencyCode: selectedRow.currencyCode || "",
        phoneCode: selectedRow.phoneCode || "",
        state: selectedRow.state || "",
        city: selectedRow.city || "",
      });
    }
  }, [selectedRow]);

  const handleUpdateRow = () => {
    const rowIndex = rows.findIndex((row) => row.id === selectedRow.id);
    const updatedRow = {
      ...selectedRow,
      countryName: input.countryName,
      countryCode: input.countryCode,
      currencyCode: input.currencyCode,
      phoneCode: input.phoneCode,
      state: input.state,
      city: input.city,
    };

    const updatedRows = [...rows];
    updatedRows[rowIndex] = updatedRow;
    setRows(updatedRows);
    handleCloseEditModal();
  };

  const handleDeleteRow = () => {
    const updatedRows = rows.filter((row) => row.id !== selectedRow.id);
    setRows(updatedRows);

    localStorage.setItem("countries", JSON.stringify(updatedRows));
  };
  return (
    <div>
      <button
        onClick={handleAddNewCountry}
        className="rounded-md bg-primarycl h-10 w-48 mb-2 px-4 py-2 text-white"
        type="button"
      >
        Add New Country
      </button>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
      >
        <Box sx={style} className='flex flex-col gap-2 rounded-md focus:outline-none'>
          <div className='flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
            <h1 className="text-2xl font-semibold">Add New Country</h1>
            <button onClick={handleCloseModal} className='bg-primarycl w-10 h-10'>
              <Close className='text-white' />
            </button>
          </div>
          <form onSubmit={onSubmitHandler} className="px-4 py-2">
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-col md:flex-row gap-2 w-full">
                <div className="flex flex-col w-full md:w-1/2">
                  <label className="flex flex-col w-full">
                    <b className="text-base font-medium">
                      Country Name
                    </b>
                    <input
                      placeholder="Country Name"
                      autoComplete="off"
                      type="text"
                      className="dark:text-white w-full text-sm text-black bg-transparent outline-none border border-gray-200 py-1 rounded-md px-2"
                      value={input.countryName}
                      onChange={(e) => onChangeHandler(e, 'countryName')}
                    />

                  </label>
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <b className="text-base font-medium">
                    Country Code
                  </b>
                  <input
                    value={input.countryCode}
                    className="dark:text-white w-full text-sm text-black bg-transparent outline-none border border-gray-200 py-1 rounded-md px-2"
                    type="text"
                    name="countryCode"
                    id=""
                    placeholder="Country Code"
                    onChange={(e) => onChangeHandler(e, 'countryCode')}

                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2 w-full">
                {" "}
                <div className="flex flex-col w-full md:w-1/2">
                  <b className="text-base font-medium">
                    Currency Code
                  </b>
                  <input
                    value={input.currencyCode}
                    required
                    className="text-black text-sm dark:text-white bg-transparent outline-none border border-gray-200 py-1 rounded-md px-2"
                    type="text"
                    name="currencyCode"
                    id=""
                    placeholder="Currency Code"
                    onChange={(e) => onChangeHandler(e, 'currencyCode')}

                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <b className="text-base font-medium">
                    Phone Code
                  </b>
                  <input
                    value={input.phoneCode}
                    className="dark:text-white text-sm w-full text-black bg-transparent outline-none border border-gray-200 py-1 rounded-md px-2"
                    type="text"
                    name="phoneCode"
                    id=""
                    placeholder=" Phone Code"
                    onChange={(e) => onChangeHandler(e, 'phoneCode')}

                  />
                </div>
              </div>

              <div className="flex gap-2 md:flex-row flex-col w-full">
                <div className="flex flex-col gap-0 w-full md:w-1/2">
                  <b className="text-base font-medium">State</b>
                  <input
                    value={input.state}
                    required
                    className="text-black w-full dark:text-white bg-transparent outline-none border border-gray-200 py-1 rounded-md px-2"
                    type="text"
                    name="state"
                    id=""
                    placeholder=" State"
                    onChange={(e) => onChangeHandler(e, 'state')}

                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <b className="text-base font-medium">City</b>
                  <input
                    value={input.city}
                    required
                    className="dark:text-white text-sm w-full text-black bg-transparent outline-none border border-gray-200 py-1 rounded-md px-2"
                    type="text"
                    name="city"
                    id=""
                    placeholder="City"
                    onChange={(e) => onChangeHandler(e, 'city')}

                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-3 py-4">
              <button
                onClick={resetHandler}
                className="rounded-md bg-primarycl h-10  w-20 px-4 py-2  hover:text-black hover:bg-white hover:border hover:border-primarycl text-white"
                type="button"
              >
                Reset
              </button>{" "}
              <button
                className="rounded-md bg-primarycl h-10 w-20  px-4 py-2  hover:text-black hover:bg-white hover:border hover:border-primarycl text-white "
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </Box>
      </Modal>
      <div className="w-fit rounded-md border border-gray-200">
        <DataGrid
          // disableRowSelectionOnClick={true}
          unstable_ignoreValueFormatterDuringExport
          onRowSelectionModelChange={(select) => {
            console.log(select);
          }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          className="custom-datagrid"
          pageSizeOptions={[5, 10]}
          checkboxSelection
          rowHeight={35}
          columnHeaderHeight={42}
        />
      </div>
      <Modal open={open} onClose={handleCloseEditModal} closeAfterTransition>
        <Box sx={style} className='flex flex-col gap-2 rounded-md focus:outline-none'>
          <div className='flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
            <h1 className="text-2xl font-semibold">Edit Country</h1>
            <button onClick={handleCloseEditModal} className='bg-primarycl w-10 h-10'>
              <Close className='text-white' />
            </button>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleUpdateRow();
          }} className="px-4 py-2">
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-col md:flex-row gap-2 w-full">
                <div className="flex flex-col w-full md:w-1/2">
                  <label className="flex flex-col w-full">
                    <b className="text-base font-medium">
                      Country Name
                    </b>
                    <input
                      placeholder="Country Name"
                      autoComplete="off"
                      type="text"
                      className="dark:text-white w-full text-sm text-black bg-transparent outline-none border border-gray-200 py-1 rounded-md px-2"
                      value={input.countryName}
                      onChange={(e) => onChangeHandler(e, 'countryName')}
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <b className="text-base font-medium">
                    Country Code
                  </b>
                  <input
                    value={input.countryCode}
                    className="dark:text-white w-full text-sm text-black bg-transparent outline-none border border-gray-200 py-1 rounded-md px-2"
                    type="text"
                    name="countryCode"
                    onChange={(e) => onChangeHandler(e, 'countryCode')}
                    placeholder="Country Code"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2 w-full">
                <div className="flex flex-col w-full md:w-1/2">
                  <label className="flex flex-col w-full">
                    <b className="text-base font-medium">
                      Currency Code
                    </b>
                    <input
                      placeholder="Country Name"
                      autoComplete="off"
                      type="text"
                      className="dark:text-white w-full text-sm text-black bg-transparent outline-none border border-gray-200 py-1 rounded-md px-2"
                      value={input.currencyCode}
                      onChange={(e) => onChangeHandler(e, 'currencyCode')}
                    />
                  </label>
                </div>

                <div className="flex flex-col w-full md:w-1/2">
                  <label className="flex flex-col w-full">
                    <b className="text-base font-medium">
                      Phone Code
                    </b>
                    <input
                      placeholder="Phone Code"
                      autoComplete="off"
                      type="text"
                      className="dark:text-white w-full text-sm text-black bg-transparent outline-none border border-gray-200 py-1 rounded-md px-2"
                      value={input.phoneCode}
                      onChange={(e) => onChangeHandler(e, 'phoneCode')}
                    />
                  </label>
                </div>

              </div>
              <div className="flex flex-col md:flex-row gap-2 w-full">
                <div className="flex flex-col w-full md:w-1/2">
                  <b className="text-base font-medium">
                    State
                  </b>
                  <input
                    value={input.state}
                    className="dark:text-white w-full text-sm text-black bg-transparent outline-none border border-gray-200 py-1 rounded-md px-2"
                    type="text"
                    name="State"
                    onChange={(e) => onChangeHandler(e, 'state')}
                    placeholder="State"
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <label className="flex flex-col w-full">
                    <b className="text-base font-medium">
                      City
                    </b>
                    <input
                      placeholder="City"
                      autoComplete="off"
                      type="text"
                      className="dark:text-white w-full text-sm text-black bg-transparent outline-none border border-gray-200 py-1 rounded-md px-2"
                      value={input.city}
                      onChange={(e) => onChangeHandler(e, 'city')}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-3 py-4">
              <button
                className="rounded-md bg-primarycl h-10 w-20 px-4 py-2  hover:text-black hover:bg-white hover:border hover:border-primarycl text-white "
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

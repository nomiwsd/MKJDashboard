import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Autocomplete from "@mui/material/Autocomplete";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import EditModalCountry from "./EditModal";
// import DeleteModal from "./DeleteModal";
// import AddNewCountry from "./AddNewCountry";
export default function CountriesTab() {
  const [accordionOne, setAccordionOne] = useState(true);
  const [accordionThree, setAccordionThree] = useState(true);
  // const selectFile = useRef(null);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

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
      countryName: "Bangladesh",
      countryCode: "BD",
      currencyCode: "BDT",
      phnCode: "+88",
      state: "Chittangong",
      city: "Dhaka",
      action: "Action",
    },
    {
      id: 2,
      countryName: "United States",
      countryCode: "US",
      currencyCode: "USD",
      phnCode: "+1",
      state: "New York",
      city: "New York",
      action: "Action",
    },
    {
      id: 3,
      countryName: "Canada",
      countryCode: "CA",
      currencyCode: "CAD",
      phnCode: "+1",
      state: " Ontario",
      city: "Toronto",
      action: "Action",
    },
    {
      id: 6,
      countryName: "Brazil",
      countryCode: " BR",
      currencyCode: " BRL",
      phnCode: "+88",
      state: " Rio de Janeiro",
      city: " Rio de Janeiro",
      action: "Action",
    },
    {
      id: 4,
      countryName: "India",
      countryCode: "IN",
      currencyCode: "INR",
      phnCode: " +91",
      state: "Maharashtra",
      city: "Mumbai",
      action: "Action",
    },

    {
      id: 5,
      countryName: "United Kingdom",
      countryCode: "GB",
      currencyCode: " GBP",
      phnCode: "+44",
      state: "Londo",
      city: "Londo",
      action: "Action",
    },
  ];
  const columns = [
    {
      field: "id",
      headerName: "ID",
      sortable: false,
      headerClassName: "border border-black",

      maxWidth: 10,
      cellClassName: "text-black dark:text-white border border-t-0 border-r-0 text-[14px]",
      renderHeader: (params) => (
        <b style={{ fontSize: "14px", fontWeight: 700 }}>ID</b>
      ),
    },
    {
      field: "countryName",
      sortable: false,
      width: 120,

      cellClassName: "text-black dark:text-white border border-t-0 border-r-0 text-[14px]",
      renderHeader: (params) => (
        <Tooltip placement="top" title="Country Name">
          <b style={{ fontSize: "14px", fontWeight: 700 }}>Country Name</b>
        </Tooltip>
      ),
    },
    {
      field: "countryCode",
      width: 60,
      sortable: false,
      headerClassName: "border border-black",
      cellClassName:
        "text-black dark:text-white text-center border border-t-0 border-r-0",

      renderHeader: (params) => (
        <Tooltip placement="top" title="Country 2-Letter Code">
          <b style={{ fontSize: "14px", fontWeight: 700 }}>Code</b>
        </Tooltip>
      ),
    },
    {
      field: "currencyCode",
      headerName: "Currency Code",
      width: 78,
      headerClassName: "border border-black ",
      sortable: false,
      cellClassName: "text-black dark:text-white border border-t-0 border-r-0 text-[14px]",
      renderHeader: (params) => (
        <Tooltip placement="top" title="Currency Code">
          <b className="" style={{ fontSize: "14px", fontWeight: 700 }}>
            Currency
          </b>
        </Tooltip>
      ),
    },
    {
      field: "phnCode",
      headerName: "Phone Code",
      headerClassName: "border border-black",
      width: 60,
      sortable: false,
      cellClassName: "text-black dark:text-white border border-t-0 border-r-0 text-[14px]",
      renderHeader: (params) => (
        <Tooltip placement="top" title="Phone Code">
          <b style={{ fontSize: "14px", fontWeight: 700 }}>Phone</b>
        </Tooltip>
      ),
    },
    {
      field: "state",
      headerName: "Sate",
      headerClassName: "border border-black",
      sortable: false,
      width: 90,
      cellClassName: "text-black dark:text-white border border-t-0 border-r-0 text-[14px]",
      renderHeader: (params) => (
        <Tooltip placement="top" title="State">
          <b style={{ fontSize: "14px", fontWeight: 700 }}>State</b>
        </Tooltip>
      ),
    },
    {
      field: "city",
      headerName: "City",
      headerClassName: "border border-black",
      sortable: false,
      width: 95,
      cellClassName: "text-black dark:text-white border border-t-0 border-r-0 text-[14px]",
      headerclassname: "bold-header",
      renderHeader: (params) => (
        <Tooltip placement="top" title="City">
          <b style={{ fontSize: "14px", fontWeight: 700 }}>City</b>
        </Tooltip>
      ),
    },
    {
      field: "action",
      type: "button",
      headerClassName: " border-black",
      sortable: false,
      width: 90,
      cellClassName: "text-black dark:text-white border border-t-0 border-r-0 text-[14px]",
      renderHeader: (params) => (
        <b style={{ fontSize: "14px", fontWeight: 700 }}>Action</b>
      ),
      renderCell: (params) => {
        // Define a function to handle the cell click
        const handleCellClick = (event) => {
          // Prevent the click event from propagating to the row selection
          event.stopPropagation();
          // Add your custom cell click logic here
          // For example, you can trigger an action when the cell is clicked
          console.log("Cell clicked in row with ID: ", params.id);
        };
        return (
          <div onClick={handleCellClick}>
            {/* Your cell content */}
            <button
              className="btn bg-[#ef5350] px-2 py-1 rounded-md"
              id="basic-button"
              aria-controls={opens ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={opens ? "true" : undefined}
              onClick={handleClick}
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
              <MenuItem onClick={handleClose2}>Edit</MenuItem>
              <MenuItem onClick={handleClose3}>Delete</MenuItem>
            </Menu>
          </div>
        );
      },
    },
  ];

  // const uploadCSV = useUploadCSV();

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     uploadCSV.mutate(file);
  //   }
  // };


  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  const largeScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const [accordionTwo, setAccordionTwo] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [selectedCountryPhone, setSelectedCountryPhone] = useState("");
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState("");

  const [input, setInput] = useState({
    countryName: "eas",
    countryCode: "",
    currencyCode: "",
    phoneCode: "",
    state: "",
    city: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(input);
  };

  const countriesData = {
    Bangladesh: { countryCode: "BD", currencyCode: "BDT", phoneNumber: "+88" },
    Pakistan: { countryCode: "PK", currencyCode: "PKR", phoneNumber: "+92" },
    India: { countryCode: "IN", currencyCode: "INR", phoneNumber: "+91" },
    Singapour: { countryCode: "SG", currencyCode: "SGD", phoneNumber: "65" },
  };

  const handleAutocompleteChange = (event, newValue) => {
    setSelectedCountry(newValue);

    const { countryCode, currencyCode, phoneNumber } =
      countriesData[newValue.label];
    setSelectedCountryCode(countryCode);
    setSelectedCountryPhone(phoneNumber);
    setSelectedCurrencyCode(currencyCode);
  };

  const top100Films = [
    { label: "Bangladesh" },
    { label: "India" },
    { label: "Singapour" },
    { label: "Pakistan" },
  ];

  const resetHandler = () => {
    setSelectedCountryCode("");
    setSelectedCountryPhone("");
    setSelectedCurrencyCode("");
    setSelectedCountry("");
  };
  return (
    <div>
      <div className="overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-2 ">
          <div className="lg:w-[65%] rounded-md border border-gray-200">
            <Accordion expanded={accordionOne}>
              <AccordionSummary
                onClick={() => setAccordionOne(!accordionOne)}
                expandIcon={<ExpandMoreIcon className="dark:text-white" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <button className="dark:text-white text-black font-myfont font-bold text-md ">
                  Show Countries Content
                </button>
              </AccordionSummary>
              <AccordionDetails className="dark:bg-gray-700">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
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
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="overflow-x-auto sm:w-fit lg:w-[35%] rounded-md border border-gray-200 ">
            {" "}
            <Accordion expanded={accordionThree} className="!border-none !shadow-none overflow-auto px-2">
              <AccordionSummary
                onClick={() => setAccordionThree(!accordionThree)}
                expandIcon={<ExpandMoreIcon className="dark:text-white" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="dark:text-white">
                  <span className="bg-primarycl text-white w-14 h-14 px-2 py-2 rounded-md font-medium text-base">
                    Add New Country
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="dark:bg-darkbg dark:text-white !border-none !px-0 overflow-x-auto ">
                <form onSubmit={onSubmitHandler}>
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
                            value={selectedCountry}
                          />
                        </label>
                      </div>
                      <div className="flex flex-col w-full md:w-1/2">
                        <b className="text-base font-medium">
                          Country Code
                        </b>
                        <input
                          value={selectedCountryCode}
                          className="dark:text-white w-full text-sm text-black bg-transparent outline-none border border-gray-200 py-1 rounded-md px-2"
                          type="text"
                          name="countryCode"
                          id=""
                          placeholder="Country Code"
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
                          value={selectedCurrencyCode}
                          required
                          className="text-black text-sm dark:text-white bg-transparent outline-none border border-gray-200 py-1 rounded-md px-2"
                          type="text"
                          name="currencyCode"
                          id=""
                          placeholder="Currency Code"
                        />
                      </div>
                      <div className="flex flex-col w-full md:w-1/2">
                        <b className="text-base font-medium">
                          Phone Code
                        </b>
                        <input
                          value={selectedCountryPhone}
                          className="dark:text-white text-sm w-full text-black bg-transparent outline-none border border-gray-200 py-1 rounded-md px-2"
                          type="text"
                          name="phoneCode"
                          id=""
                          placeholder=" Phone Code"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2 md:flex-row flex-col w-full">
                      <div className="flex flex-col gap-0 w-full md:w-1/2">
                        <b className="text-base font-medium">State</b>
                        <input
                          // onChange={onChangeHandler}
                          defaultValue={input.state}
                          required
                          className="text-black w-full dark:text-white bg-transparent outline-none border border-gray-200 py-1 rounded-md px-2"
                          type="text"
                          name="state"
                          id=""
                          placeholder=" State"
                        />
                      </div>
                      <div className="flex flex-col w-full md:w-1/2">
                        <b className="text-base font-medium">City</b>
                        <input
                          // onChange={onChangeHandler}
                          defaultValue={input.city}
                          required
                          className="dark:text-white text-sm w-full text-black bg-transparent outline-none border border-gray-200 py-1 rounded-md px-2"
                          type="text"
                          name="city"
                          id=""
                          placeholder="City"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-3 py-4">
                    <button
                      // onClick={resetHandler}
                      className="rounded-md bg-primarycl h-10  w-20 px-4 py-2  hover:text-black hover:bg-white hover:border hover:border-primarycl text-white"
                      type="button"
                    >
                      Reset
                    </button>{" "}
                    <button
                      className="rounded-md bg-primarycl h-10 w-20  px-4 py-2  hover:text-black hover:bg-white hover:border hover:border-primarycl text-white "
                      type="button"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        <div className="country-right   lg:w-[35%] xl:w-fit mt-5  ">
          {" "}
          <Accordion expanded={accordionTwo}>
            <AccordionSummary
              onClick={() => setAccordionTwo(!accordionTwo)}
              expandIcon={<ExpandMoreIcon className="dark:text-white" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="dark:text-white">
                <span className="text-black font-myfont dark:text-white font-bold text-md">
                  Bulk Import/Upload
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="dark:bg-gray-700">
              <div className="relative overflow-x-auto  sm:rounded-lg">
                <div className="px-3 py-2 flex flex-col gap-2">
                  <h3 className="dark:text-white font-myfont text-md font-semibold">
                    *Select CSV file to upload
                  </h3>

                  <div className="flex gap-2">
                    <input
                      // onChange={handleFileChange}
                      // ref={selectFile}
                      type="file"
                      name=""
                      id="file"
                      accept=".csv"
                    />
                  </div>

                  <div className="flex items-center gap-4 mt-2 mb-2">
                    {/* 
                  {uploadCSV.isLoading && <p>Uploading...</p>}
                  {uploadCSV.isSuccess && <p>Upload successful!</p>}
                  {uploadCSV.isError && <p>Error uploading: {uploadCSV.error.message}</p>}
                   */}
                  </div>

                  <div className="flex font-myfont flex-col gap-1 dark:text-white ">
                    <h2 className=" font-bold">NOTE : </h2>
                    <div style={{ fontSize: "10px" }}>
                      <p>1 - Acceptable format is CSV</p>
                      <p>2 - No Special Char in the file</p>
                      <p>3 - File should contain following seuence</p>
                    </div>

                    <div className=" flex  mt-1 ms-4">
                      <div className=" w-fit ">
                        <ul style={{ fontSize: "10px" }}>
                          <li> Column A = Country</li>
                          <li> Column B = 2-Letter Code</li>
                          <li> Column C = Currency</li>
                          <li> Column D = Phone Code</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* <EditModalCountry open={open} setOpen={setOpen} /> */}
        {/* <DeleteModal open={open2} setOpen={setOpen2} /> */}
      </div>

    </div>
  )
}

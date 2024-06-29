import { Box, Stack, Typography, Avatar, TableCell } from "@mui/material";
import AppTable from "../components/AppTable";
import SideBar from "../components/SideBar"
import AppTabs from "../components/AppTabs"
import * as Status from "../Status";
import AppStaticDatePicker from "../components/AppStaticDatePicker";
import AppResponsiveDatePicker from "../components/AppResponsiveDatePicker";
import AppVerticalTab from '../components/AppVerticalTab';
import AppCalendar from '../components/AppCalendar'

// Number of rows to display on the table at a time.
const rowsPerPage = 6;

// Hypothetical data
let data = [
  {
    id: 1,
    name: "Olivia Rhye",
    status: "Active",
    role: "Production Designer",
    team: "Marketing",
    hireDate: "11 May, 2024",
    avatar: "img1.png",
  },
  {
    id: 2,
    name: "Phonenix Baker",
    status: "Busy",
    role: "Product Manager",
    team: "Development",
    hireDate: "1 February, 2023",
    avatar: "img2.png",
  },
  {
    id: 3,
    name: "Lana Steiner",
    status: "Away",
    role: "Frontend Developer",
    team: "Marketing",
    hireDate: "19 June, 2022",
    avatar: "img3.png",
  },
  {
    id: 4,
    name: "Demi Wilkinson",
    status: "Active",
    role: "Backend Developer",
    team: "Management",
    hireDate: "18 June, 2023",
    avatar: "img4.png",
  },
  {
    id: 5,
    name: "Candice Wu",
    status: "Active",
    role: "Fullstack Developer",
    team: "Business development",
    hireDate: "1 Februrary, 2023",
    avatar: "img1.png",
  },
  {
    id: 6,
    name: "Natali Craig",
    status: "Unknown",
    role: "UX Designer",
    team: "Business development",
    hireDate: "11 May, 2023",
    avatar: "img2.png",
  },
  {
    id: 7,
    name: "Drew Cano",
    status: "Active",
    role: "UX Copywriter",
    team: "Marketing",
    hireDate: "18 June, 2023",
    avatar: "img3.png",
  },
  {
    id: 8,
    name: "Orlando Diggs",
    status: "Active",
    role: "UI Designer",
    team: "Development",
    hireDate: "19 June, 2022",
    avatar: "img4.png",
  },
  {
    id: 9,
    name: "Andi Lane",
    status: "Away",
    role: "Product Manager",
    team: "Development",
    hireDate: " 18 June, 2023",
    avatar: "img1.png",
  },
  {
    id: 10,
    name: "Kate Morrison",
    status: "Busy",
    role: "QA Engineer",
    team: "Development",
    hireDate: "11 May, 2023",
    avatar: "img2.png",
  },
];
// Expected headCell format for the table. Each object represents a
// column. Note, AppTable implementation depends on this format to make the
// table generic. Modification to this format may result in unpredictable outcome.
const headCells = [
  { id: "name", width: 221, label: "Name" },
  { id: "status", width: 100, label: "Status" },
  { id: "role", width: 176, label: "Role" },
  { id: "team", width: 210, label: "Team" },
  { id: "hireDate", width: 182, label: "Hire Date" },
];

// Wrapper function to map status into Status constants.
function getStatus(status) {
  switch (status.toLowerCase()) {
    case Status.ACTIVE:
      return Status.ACTIVE;
    case Status.AWAY:
      return Status.AWAY;
    case Status.BUSY:
      return Status.BUSY;
    default:
      return Status.UNKNOWN;
  }
}

function formatTableData() {
  //Inner function to create formatted TableCells
  const createTableCell = (item, key) => {
    return <TableCell key={key}> {item}</TableCell>;
  };

  for (let index = 0; index < data.length; index++) {
    let newData = [];
    let row = data[index];
    newData.push(
      createTableCell(
        <Stack direction="row" spacing={1}>
          <Avatar
            sx={{ width: 25, height: 25 }}
            alt={row.name}
            src={require(`../assets/images/${row.avatar}`)}
          />
          <Box sx={{ paddingTop: 0.5 }}>{row.name}</Box>
        </Stack>,
        0
      )
    );

    newData.push(
      createTableCell(
        <img src={require(`../assets/images/${getStatus(row.status)}.png`)} />,
        1
      )
    );
    newData.push(createTableCell(row.role, 2));
    newData.push(createTableCell(row.team, 3));
    newData.push(createTableCell(row.hireDate, 4));
    row["cells"] = newData;
  }
}

const tabItems = [
  {
    label: "Directory",
    child: (
      <AppTable
        caption={"Company members"}
        headCells={headCells}
        data={data}
        rowsPerPage={rowsPerPage}
        handleSelection={(selectedData)=> console.log(selectedData)}

      />
    ),
  },
  {
    label: "My Team",
    child: (
      <Typography variant="h6" component="div">
        My Team
      </Typography>
    ),
  },
  {
    label: "Department",
    child: (
      <Typography variant="h6" component="div">
        Department
      </Typography>
    ),
  },
  {
    label: "Approvals",
    child: (
      <Typography variant="h6" component="div">
        Approval
      </Typography>
    ),
  },
  
];

/**
 * This component was designed to demonstrate other components such as
 * AppTable, AppTablePagination, AppTab, and AppDatePickers.
 * @returns A React component.
 */
export default function Demonstration() {
  formatTableData();

  return (
    <Box>
      <h1>This is a demo container</h1>
      <Stack direction={"row"} spacing={5}>
        {/*Main Stack*/}
        <SideBar />
        <Stack spacing={5}>{<AppTabs items={tabItems} />}
        <AppCalendar />
        </Stack>
        <Stack spacing={5}>
        <Typography variant="h6" component="div">
        Date Pickers
      </Typography>
          <AppStaticDatePicker />
          <AppResponsiveDatePicker /> 
          <AppVerticalTab />
        </Stack>
      </Stack>
      
    </Box>
  );
}

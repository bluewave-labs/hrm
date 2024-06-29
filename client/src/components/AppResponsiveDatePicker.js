import { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/material";
const styles = {
  ".css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
    flexDirection: "row-reverse",
    height: 24,
    width: 160,
  },
  ".css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
    color: "inherit",
    fontSize: "1rem",
  },
    ".css-1wy8uaa-MuiButtonBase-root-MuiPickersDay-root.Mui-selected": {
    backgroundColor: "#7F56D9",
  },
};
/**
 * This function creates a responsive React Datepicker component.
 * @returns React Datepicker component
 */
export default function AppResponsiveDatePicker() {
  const [value, setValue] = useState(dayjs());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <DatePicker
          sx={styles}
          placeholder
          format={"MMM D, YYYY"}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </Box>
    </LocalizationProvider>
  );
}

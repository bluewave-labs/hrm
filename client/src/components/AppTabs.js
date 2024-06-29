import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}
/**
 * This component renders React Tabs.
 * @param {*} props Array of objects containing label and child for each tab
 * @returns A React Tab component.
 */
export default function AppTabs(props) {
  const { items } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          sx={{
            ".Mui-selected": { backgroundColor: "#F9F5FF", color: "#89909B" },
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#7F56D9",
            },
          }}
        >
          {items.map((item, index) => {
            return (
              <Tab
                label={item.label}
                {...a11yProps(index)}
                sx={{ textTransform: "none" }}
              />
            );
          })}
        </Tabs>
      </Box>
      {items.map((item, index) => {
        return (
          <CustomTabPanel value={value} index={index}>
            {item.child}
          </CustomTabPanel>
        );
      })}
    </Box>
  );
}

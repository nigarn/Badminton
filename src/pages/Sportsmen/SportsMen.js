import React from "react";
import { Link } from "react-router-dom";
import "assets/styles/sportsmen/sportsmen.scss";
import ItemCard from "components/ItemCard";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { TabPanel } from "@mui/lab";
import "@fontsource/mulish";

const SportsMen = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const rate="Rank"
  return (
    <>
 
      <h2>İdmançılar</h2>
      <Box div className="category">
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              marginBottom: "30px",
              fontSize: "14px",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                className="button"
                sx={{ fontFamily: "mulish" }}
                label="İdmançılar"
                value="1"
              />
              <Tab
                className="button"
                sx={{ fontFamily: "mulish" }}
                label="Həvəskarlar"
                value="2"
              />
              <Tab
                className="button"
                sx={{ fontFamily: "mulish" }}
                label="Paralimpiya"
                value="3"
              />
              <Tab
                className="button"
                sx={{ fontFamily: "mulish" }}
                label="Veteranlar"
                value="4"
              />
            </TabList>
          </Box>
          <TabPanel
            sx={{ padding: 0, borderBottom: "none" }}
            className="card-line"
            value="1"
          >
            <Link to="/about">
              <ItemCard rate={rate}/>
            </Link>
            <Link to="/about">
               <ItemCard rate={rate}/>
            </Link>
            <Link to="/about">
               <ItemCard rate={rate}/>
            </Link>
            <Link to="/about">
               <ItemCard rate={rate}/>
            </Link>
          </TabPanel>

          <TabPanel
            sx={{ padding: 0, borderBottom: "none" }}
            className="card-line"
            value="2"
          >
            <Link to="/about">
               <ItemCard rate={rate}/>
            </Link>
            <Link to="/about">
               <ItemCard rate={rate}/>
            </Link>
            <Link to="/about">
               <ItemCard rate={rate}/>
            </Link>
            <Link to="/about">
               <ItemCard rate={rate}/>
            </Link>
          </TabPanel>
          <TabPanel
            sx={{ padding: 0, borderBottom: "none" }}
            className="card-line"
            value="3"
          >
            <Link to="/about">
               <ItemCard rate={rate}/>
            </Link>
            <Link to="/about">
               <ItemCard rate={rate}/>
            </Link>
            <Link to="/about">
               <ItemCard rate={rate}/>
            </Link>
            <Link to="/about">
               <ItemCard rate={rate}/>
            </Link>
            <Link to="/about">
               <ItemCard rate={rate}/>
            </Link>
          </TabPanel>
          <TabPanel
            sx={{ padding: 0, borderBottom: "none" }}
            className="card-line"
            value="4"
          >
            <Link to="/about">
               <ItemCard rate={rate}/>
            </Link>
            <Link to="/about">
               <ItemCard rate={rate}/>
            </Link>
            <Link to="/about">
               <ItemCard rate={rate}/>
            </Link>
            <Link to="/about">
               <ItemCard rate={rate}/>
            </Link>
            <Link to="/about">
               <ItemCard rate={rate}/>
            </Link>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default SportsMen;

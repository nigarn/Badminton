import React from "react";
import "assets/styles/aboutPerson.scss";

import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { TabPanel } from "@mui/lab";
import person from "assets/header/person.jpg";
import editIcon from "assets/button-icons/editIcon.svg";
import arrowBack from "assets/button-icons/arrowBack.svg";

const AboutHall = () => {
  const [value, setValue] = React.useState("aboutHall");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate(-1)} className="display-arrow">
        <img src={arrowBack} alt="back" style={{ marginRight: "5px" }} />
        <h4>Zallar</h4>
      </div>

      <Box className="category about">
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              marginBottom: "30px",
              fontSize: "14px",
            }}
          >
            <TabList
              sx={{ textTransform: "capitalize" }}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab
                className="button"
                label="Zal haqqında"
                value="aboutHall"
              />
              <Tab className="button" label="Məşqçilər" value="trainers" />
              <Tab
                className="button"
                label="Tələbələr"
                value="students"
              />
              <Tab
                className="button"
                label="Məşq Təqvimi"
                value="calendar"
              />
             
            </TabList>
          </Box>
          <TabPanel sx={{ padding: 0, borderBottom: "none" }} value="aboutHall">
            <div className="about-container">
              <div className="personal-up">
                <div className="personal-img">
                  <img src={person} alt="person" />
                </div>
                <div className="personal-desc">
                  <p>AD SOYAD</p>
                  <p className="">VEZIFE</p>
                  <div className="personal-rate">
                    <div
                      className="rating"
                      style={{ width: "80%", marginBottom: "10px" }}
                    >
                      Rank: <b>4</b>
                    </div>
                    <div className="status">Available</div>
                  </div>
                </div>

                <button className="edit-btn status">
                  <img src={editIcon} alt="edit" />
                  Düzəliş et
                </button>
                <div className="insteadOfBorder"></div>
              </div>
              <table className="about-table">
                <tr>
                  <th>Ad/Soyad/Ata adı:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Doğum tarixi:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Çəki:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Milliyət:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Qeydiyyat ünvanı:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Yaşadığı ünvan:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Doğum yeri:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Ev telefonu:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Mobil telefon:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>E-mail:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Valideynin adı, soyadı:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Validenin mobil telefonu:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Oyunçu kateqoriyası:</th>
                  <td>Lorem</td>
                </tr>
              </table>
            </div>
          </TabPanel>

          <TabPanel
            sx={{ padding: 0, borderBottom: "none" }}
            className="card-line"
            value="trainers"
          >
            <div className="about-container">
              <table className="about-table" style={{ margin: 0 }}>
                <tr>
                  <th>Yaxınlıq dərəcəsi:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Ad/Soyad/Ata adı:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Yaşadığınız ünvan:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>İş yeri:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Vəzifəsi:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Əlaqə telefon:</th>
                  <td>Lorem</td>
                </tr>
              </table>
            </div>
          </TabPanel>
          <TabPanel
            sx={{ padding: 0, borderBottom: "none" }}
            value="students"
          >
            <div className="about-container">
              <table className="about-table" style={{ margin: 0 }}>
                <tr>
                  <th>Təhsil aldığı məkan:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Başlama tarixi:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Bitmə tarixi:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Klub:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Dərəcə:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Məşqçi:</th>
                  <td className="display-column">
                    <div className="display-img">
                      <img src={person} alt="trainer" />
                    </div>
                    <p>Lorem</p>
                    <p>ipsum</p>
                  </td>
                </tr>
              </table>
            </div>
          </TabPanel>
          <TabPanel
            sx={{ padding: 0, borderBottom: "none" }}
            value="calendar"
          >
            <div className="about-container">
              <table className="about-table" style={{ margin: 0 }}>
                <tr>
                  <th>Başlama tarixi:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Bitmə tarixi:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Klub:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Dərəcə:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Nailiyyətlər:</th>
                  <td>Lorem</td>
                </tr>
              </table>
            </div>
          </TabPanel>
         
        </TabContext>
      </Box>
    </>
  );
};

export default AboutHall;

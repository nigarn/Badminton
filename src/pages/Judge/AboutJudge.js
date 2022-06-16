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

const AboutJudge = () => {
  const [value, setValue] = React.useState("personal");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate(-1)} className="display-arrow">
        <img src={arrowBack} alt="back" style={{ marginRight: "5px" }} />
        <h4>Hakimlər</h4>
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
                label="Şəxsi Məlumatlar"
                value={"personal"}
              />
              <Tab className="button" label="Ailə Məlumatları" value="family" />
              <Tab
                className="button"
                label="İdman Tarixçəsi"
                value="sportHistory"
              />
              <Tab
                className="button"
                label="Məşqçi təcrübəsi"
                value="trainerExp"
              />
              <Tab
                className="button"
                label="Hakimlik təcrübəsi"
                value="judgeExp"
              />
              <Tab className="button" label="Mükafatlar" value="awards" />
            </TabList>
          </Box>
          <TabPanel sx={{ padding: 0, borderBottom: "none" }} value="personal">
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
            value="family"
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
            value="sportHistory"
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
            value="trainerExp"
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
          <TabPanel
            sx={{ padding: 0, borderBottom: "none" }}
            className="card-line"
            value="health"
          >
            <div className="about-container">
              <table className="about-table" style={{ margin: 0 }}>
                <tr>
                  <th>Qan qrupu:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Boy:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Çəki:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Sağlamlıq kağızı:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Sağlamlıq kağızının əlavə edilmə tarixi:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Sağlamlıq kağızının keçərlilik tarixi:</th>
                  <td>Lorem</td>
                </tr>
              </table>
            </div>
          </TabPanel>
          <TabPanel
            sx={{ padding: 0, borderBottom: "none" }}
            className="card-line"
            value="judgeExp"
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
                  <th>Məşqçi:</th>
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
          <TabPanel
            sx={{ padding: 0, borderBottom: "none" }}
            className="card-line"
            value="awards"
          >
            <div className="about-container">
              <table className="about-table" style={{ margin: 0 }}>
                <tr>
                  <th>Adı:</th>
                  <td>Lorem</td>
                </tr>
                <tr>
                  <th>Aldığı tarix:</th>
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

export default AboutJudge;

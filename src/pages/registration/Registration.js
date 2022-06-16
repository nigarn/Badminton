import React, { useState } from "react";
import { data } from "service/registrationData";
import "assets/styles/registration.scss";
import usePagination from "./Pagination";
import { Box } from "@mui/system";
import { Pagination } from "@mui/lab";
//Box, List, Tag, ListItem, Divider

const Registration = () => {
  let [page, setPage] = useState(1);
  const PER_PAGE = 20;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <>
      <h2 style={{ marginBottom: "20px" }}>Qeydiyyat istəkləri</h2>
      <Box className="reg-table" p="5">
        <table style={{ width: "100%" }}>
          <thead>
            <tr style={{backgroundColor:'#ffff'}}>
              <th style={{borderTopLeftRadius:'7px'}}>Ad, soyad</th>
              <th>Valideynin adı, soyadı</th>
              <th>Mobil telefon</th>
              <th>Qedyiyyatda olduğu zal</th>
              <th style={{borderTopRightRadius:'7px'}}></th>
            </tr>
          </thead>
          <tbody>
            {_DATA.currentData().map((itm) => (
              <tr >
                <td>{itm.fullName}</td>
                <td>{itm.parentsFullName}</td>
                <td>{itm.phone}</td>
                <td>{itm.hallName}</td>
                <td style={{textAlign:'right'}}>
                  <button className="reg-button accept">Qəbul</button>
                  <button className="reg-button cancel">Ləğv et</button>
                </td>
              </tr>
            ))}
          </tbody>{" "}
          <Pagination
            count={count}
            size="medium"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
            className="pagination"
          />
        </table>
      </Box>
    </>
  );
};

export default Registration;

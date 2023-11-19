import React, { useEffect, useState } from "react";
import DashboardHeader from "../../HeaderFooter/DashboardHeader";
import {
  Alert,
  Avatar,
  Box,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowCircleLeftRounded } from "@mui/icons-material";
import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import { Badge, Container } from "react-bootstrap";
import DataTable from "datatables.net-dt";
import "./teamlist.css";
import $ from "jquery";
const TeamList = () => {
  const [paginationData, setPaginationData] = useState(5);
  // const [TeamData, setTeamData] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState([]);
  const [page_num, setPage_num] = useState(0);
  const table = new DataTable("#referred_team_list");
  /**************************************
   *STATIC DATA GET FROM JSON PLECHOLDER
   ***************************************/
  const TeamData = [
    {
      id: 1,
      name: "Jhone",
      email: "jhone@gmail.com",
      phone: "+9134324",
      Level: 1,
      status: true,
    },
    {
      id: 2,
      name: "marin",
      email: "jhone@gmail.com",
      phone: "+9134324",
      Level: 3,
      status: true,
    },
    {
      id: 3,
      name: "Marks",
      email: "jhone@gmail.com",
      phone: "+9134324",
      Level: 2,
      status: true,
    },
    {
      id: 4,
      name: "donald",
      email: "jhone@gmail.com",
      phone: "+9134324",
      Level: 3,
      status: false,
    },
    {
      id: 5,
      name: "Jhone",
      email: "jhone@gmail.com",
      phone: "+9134324",
      Level: 4,
      status: false,
    },
    {
      id: 6,
      name: "luchy",
      email: "jhone@gmail.com",
      phone: "+9134324",
      Level: 5,
      status: true,
    },
    {
      id: 1,
      name: "Jhone",
      email: "jhone@gmail.com",
      phone: "+9134324",
      Level: 2,
      status: false,
    },
  ];
  //  const table = new DataTable("#mytable");
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.org/users", {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setTeamData(data);
  //     });
  // }, []);

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const data = TeamData;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  function Something() {
    let total_record = TeamData.length; // Assuming TeamData is an array
    let limit_per_page = 10;
    let total_pages = Math.ceil(total_record / limit_per_page);
    const pageNumbers = [];
    for (let i = 1; i <= total_pages; i++) {
      pageNumbers.push(
        <Pagination.Item key={i} onClick={() => handlePageChange(i)}>
          {i}
        </Pagination.Item>
      );
    }
    return pageNumbers;
  }

  return (
    <>
      <DashboardHeader />
      <div className="team_list_page">
        <Container>
          <div className="team_list_wrapper">
            <Stack>
              <Box>
                <Typography>
                  <IconButton onClick={() => navigate(-"1")}>
                    <ArrowCircleLeftRounded
                      style={{ fontSize: "2rem", color: "white" }}
                    />
                  </IconButton>
                </Typography>
                <Typography
                  variant="h3"
                  textTransform={"capitalize"}
                  color={"white"}
                  py={2}
                >
                  Referral Team list
                </Typography>
              </Box>
            </Stack>
            <table className="referred_team_list" id="referred_team_list">
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>email</th>
                  <th>phone</th>
                  <th>level</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {TeamData.length > 0 ? (
                  TeamData.map((items) => (
                    <tr key={items.id}>
                      <td>
                        <Avatar sx={{ background: "#111" }}>
                          {items.name.slice(0, 1)}
                        </Avatar>
                      </td>
                      <td>{items.name}</td>
                      <td>{items.email}</td>
                      <td>{items.phone}</td>
                      <td>
                        {items.Level === 1 ? (
                          <Badge bg="success">bronze</Badge>
                        ) : items.Level === 2 ? (
                          <Badge
                            bg=""
                            style={{ background: "silver", color: "black" }}
                          >
                            Silver
                          </Badge>
                        ) : items.Level === 3 ? (
                          <Badge
                            bg=""
                            style={{ background: "gold", color: "black" }}
                          >
                            Gold
                          </Badge>
                        ) : items.Level === 4 ? (
                          <Badge
                            bg=""
                            style={{ background: "silver", color: "dimond" }}
                          >
                            Diamond
                          </Badge>
                        ) : items.Level === 5 ? (
                          <Badge
                            bg=""
                            style={{ background: "#E07F03", color: "white" }}
                          >
                            Master
                          </Badge>
                        ) : (
                          <Badge
                            bg=""
                            style={{ background: "#b9f2ff", color: "white" }}
                          >
                            no level
                          </Badge>
                        )}
                      </td>
                      <td>
                        {items.status === true ? (
                          <Badge bg="success">Paid</Badge>
                        ) : (
                          <Badge bg="danger">UnPaid</Badge>
                        )}
                      </td>
                    </tr>
                  ))
                ) : currentData.length > 0 ? (
                  currentData.map((items) => (
                    <tr key={items.id}>
                      <td>
                        <Avatar sx={{ background: "#111" }}>
                          {items.name.slice(0, 1)}
                        </Avatar>
                      </td>
                      <td>{items.name}</td>
                      <td>{items.email}</td>
                      <td>{items.phone}</td>
                      <td>
                        {items.Level === 1 ? (
                          <Badge bg="success">bronze</Badge>
                        ) : items.Level === 2 ? (
                          <Badge
                            bg=""
                            style={{ background: "silver", color: "black" }}
                          >
                            Silver
                          </Badge>
                        ) : items.Level === 3 ? (
                          <Badge
                            bg=""
                            style={{ background: "gold", color: "black" }}
                          >
                            Gold
                          </Badge>
                        ) : items.Level === 4 ? (
                          <Badge
                            bg=""
                            style={{ background: "silver", color: "dimond" }}
                          >
                            Diamond
                          </Badge>
                        ) : items.Level === 5 ? (
                          <Badge
                            bg=""
                            style={{ background: "#E07F03", color: "white" }}
                          >
                            Master
                          </Badge>
                        ) : (
                          <Badge
                            bg=""
                            style={{ background: "#b9f2ff", color: "white" }}
                          >
                            no level
                          </Badge>
                        )}
                      </td>
                      <td>
                        {items.status === true ? (
                          <Badge bg="success">Paid</Badge>
                        ) : (
                          <Badge bg="danger">UnPaid</Badge>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <Alert sx={{ textTransform: "capitalize" }}>
                    data not found!
                  </Alert>
                )}
              </tbody>
            </table>
            <div className="pagination mt-4">
              <Pagination>
                {<Something />}

                {/* <Pagination.Item onClick={() => setPaginationData(15)}>
                  {15}
                </Pagination.Item>
                <Pagination.Item onClick={() => setPaginationData(20)}>
                  {20}
                </Pagination.Item>
                <Pagination.Item onClick={() => setPaginationData(25)}>
                  {25}
                </Pagination.Item>
                <Pagination.Item onClick={() => setPaginationData(30)}>
                  {30}
                </Pagination.Item>
                <Pagination.Next
                  onClick={() => setPaginationData(paginationData + 5)}
                /> */}
              </Pagination>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TeamList;

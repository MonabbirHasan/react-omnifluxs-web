import React from "react";
import "./wishlists.css";
import { Badge, Container } from "react-bootstrap";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Delete } from "@mui/icons-material";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
const Wishlists = () => {
  return (
    <>
      <Header />
      <div className="wishlists_page">
        <Container>
          <div className="wishlists_wrapper">
            <Typography
              paddingY={3}
              px={1}
              textTransform={"capitalize"}
              fontWeight={"600"}
              fontSize={20}
              color={"#919191"}
            >
              my wishlists
            </Typography>
            <TableContainer
              className="wishlists_table"
              component={Paper}
              sx={{
                height: "400px",
                overflowY: "scroll",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#2186f3" }}>
                    <TableCell sx={{ color: "white" }}>image</TableCell>
                    <TableCell sx={{ color: "white" }}>Name</TableCell>
                    <TableCell sx={{ color: "white" }}>Price</TableCell>
                    <TableCell sx={{ color: "white" }}>Status</TableCell>
                    <TableCell sx={{ color: "white" }}>actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Array.from([1, 2, 3, 4, 5, 6], (x) => x + x).map((itme) => (
                    <TableRow sx={{ backgroundColor: "#eee" }}>
                      <TableCell>
                        <LazyLoadImage
                          width={100}
                          src="https://wpmet.com/plugin/shopengine/wp-content/uploads/2022/09/wooc-default-wishist.jpg"
                        />
                      </TableCell>
                      <TableCell>youtube</TableCell>
                      <TableCell>$32.l2</TableCell>
                      <TableCell>
                        <Badge bg="success">In Stock</Badge>
                      </TableCell>
                      <TableCell>
                        <IconButton>
                          <Delete htmlColor="orangered" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Wishlists;

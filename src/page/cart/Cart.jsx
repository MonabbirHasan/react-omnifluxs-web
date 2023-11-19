import React from "react";
import "./cart.css";
import { Badge, Container } from "react-bootstrap";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Delete } from "@mui/icons-material";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
const Cart = () => {
  return (
    <>
      <Header />
      <div className="carts_page">
        <Container>
          <div className="cart_wrapper">
            <Typography
              paddingY={3}
              px={1}
              textTransform={"capitalize"}
              fontWeight={"600"}
              fontSize={20}
              color={"#919191"}
            >
              my cart
            </Typography>
            <TableContainer
              className="cart_table"
              component={Paper}
              sx={{
                height: "400px",
                overflowY: "scroll",
              }}
            >
              <Table>
                <TableBody>
                  {Array.from([1, 2, 3, 4, 5, 6], (x) => x + x).map((items) => (
                    <TableRow sx={{ backgroundColor: "#eee" }}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        <LazyLoadImage
                          width={100}
                          src="https://cdn.dribbble.com/users/1285930/screenshots/6158632/media/599129ea2d45f9e8cda1b2862a067c6a.jpg"
                        />
                      </TableCell>
                      <TableCell>youtube</TableCell>
                      <TableCell>$300</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>
                        <Badge bg="success">Active</Badge>
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
            <Box pt={3}>
              <Typography textTransform={"capitalize"} fontSize={"18px"}>
                total : $34
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  textTransform: "capitalize",
                  backgroundColor: "black",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                Place Order
              </Button>
            </Box>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Cart;

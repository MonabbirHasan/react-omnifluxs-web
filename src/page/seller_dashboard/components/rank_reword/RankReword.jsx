import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moneybag from "../../../../assets/img/moneybag.png";
import TableContainer from "@mui/material/TableContainer";
import doller from "../../../../assets/img/doller.png";
import iphone from "../../../../assets/img/iphon.png";
import bike from "../../../../assets/img/bike.png";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import { useNavigate } from "react-router-dom";
import TableRow from "@mui/material/TableRow";
import { Container } from "react-bootstrap";
import Table from "@mui/material/Table";
import "./rankreword.css";
import DashboardHeader from "../../HeaderFooter/DashboardHeader";
import { ArrowCircleLeftRounded } from "@mui/icons-material";
const RankReword = () => {
  const navigate = useNavigate();
  return (
    <>
    <DashboardHeader/>
    <div className="rankreword_page">
      <Container>
        <Stack
          sx={{
            py: 2,
          }}
        >
          <Typography>
          <IconButton onClick={()=>navigate(-"1")}>
            <ArrowCircleLeftRounded style={{fontSize:"2rem",color:'white'}}/>
          </IconButton>
          </Typography>
          <Typography
            variant="h3"
            textTransform={"capitalize"}
            fontFamily={"fantasy"}
            color={"white"}
            letterSpacing={1}
          >
            rank and reword earning
          </Typography>
        </Stack>
        {/* offer table start here */}
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right" style={{fontSize:'2rem',fontWeight:'bold',color:'white',fontFamily:'fantasy',letterSpacing:'1px'}}>Level</TableCell>
                <TableCell align="right" style={{fontSize:'2rem',fontWeight:'bold',color:'white',fontFamily:'fantasy',letterSpacing:'1px'}}>Team</TableCell>
                <TableCell align="right" style={{fontSize:'2rem',fontWeight:'bold',color:'white',fontFamily:'fantasy',letterSpacing:'1px'}}>Rank</TableCell>
                <TableCell align="right" style={{fontSize:'2rem',fontWeight:'bold',color:'white',fontFamily:'fantasy',letterSpacing:'1px'}}>Reword</TableCell>
                <TableCell align="right" style={{fontSize:'2rem',fontWeight:'bold',color:'white',fontFamily:'fantasy',letterSpacing:'1px'}}>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:nth-child(1) td, &:last-child th": { border: 1 } }}
              >
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>1</TableCell>
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>10</TableCell>
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>Bronze</TableCell>
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>₹300</TableCell>
                <TableCell align="right" height={100}>
                    <LazyLoadImage width={100} src={doller} />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:nth-child(2) td, &:last-child th": { border: 1 } }}
              >
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>2</TableCell>
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>50</TableCell>
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>Silver</TableCell>
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>₹1,000</TableCell>
                <TableCell align="right" height={100}>
                    <LazyLoadImage width={100} src="https://static.vecteezy.com/system/resources/thumbnails/019/049/666/small_2x/gold-coin-money-symbol-icon-png.png" />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:nth-child(3) td, &:last-child th": { border: 1 } }}
              >
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>3</TableCell>
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>300</TableCell>
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>gold</TableCell>
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>₹5,000</TableCell>
                <TableCell align="right" height={100}>
                    <LazyLoadImage width={100} src={moneybag} />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:nth-child(4) td, &:last-child th": { border: 1 } }}
              >
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>4</TableCell>
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>1000</TableCell>
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>diamond</TableCell>
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>bike</TableCell>
                <TableCell align="right" height={100}>
                    <LazyLoadImage width={100} height={100} src={bike} />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
              >
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>5</TableCell>
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>5000</TableCell>
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>Master</TableCell>
                <TableCell align="right" height={100} style={{fontSize:"50px",color:"white",fontFamily:'fantasy'}}>iphone 15</TableCell>
                <TableCell align="right" height={100}>
                    <LazyLoadImage width={100}height={100} src={iphone} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        {/* offer table start here */}
      </Container>
    </div>
    </>
  );
};

export default RankReword;

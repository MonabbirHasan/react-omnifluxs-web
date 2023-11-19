import React, { useState } from "react";
import { Box,Typography, Button as MuiButton } from "@mui/material";
import { ArrowLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import YouTube from "react-youtube";
import "./watchads.css";
const WatchAds = () => {
  const [data, setData] = useState(false);
  let navigate = useNavigate();
  const VideoReadyFun = () => {
    data === false ? setData(true) : setData(false);
  };
  return (
    <div className="watchads_page">
      <div className="watch_ads_box">
        <MuiButton
          variant=""
          startIcon={<ArrowLeft />}
          style={{ marginBottom: "5px", background: "black", color: "white" }}
          onClick={() => navigate(-"1")}
        >
          Cancel
        </MuiButton>
        <YouTube
          videoId={"lOU7dLFxOpM"} // defaults -> ''
          // id={string} // defaults -> ''
          // className={string} // defaults -> ''
          // iframeClassName={string} // defaults -> ''
          // style={object} // defaults -> {}
          //   title={"welcome"} // defaults -> ''
          //   loading={"loading....."} // defaults -> undefined
          opts={{ width: "100%", height: "320px" }}
          onReady={VideoReadyFun} // defaults -> noop
          // onPlay={func} // defaults -> noop
          // onPause={func} // defaults -> noop
          // onEnd={func} // defaults -> noop
          // onError={func} // defaults -> noop
          // onStateChange={func} // defaults -> noop
          // onPlaybackRateChange={func} // defaults -> noop
          // onPlaybackQualityChange={func} // defaults -> noop
        />
        <Box my={3}>
          <MuiButton variant="contained">
          {data === true ? "" : <Spinner style={{marginRight:'2px'}} />}
            task price: $32
          </MuiButton>
          <Typography pt={2} fontSize={14}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            blanditiis cupiditate vel illum itaque perspiciatis, debitis facilis
            iure? Optio delectus, aut repellendus quis deleniti ut odit nesciunt
            molestiae voluptas saepe!
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default WatchAds;

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const { id } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  
  
  return <Box minHeight='95vh'>
    <Box>
      <div
      style={{background:'linear-gradient(90deg, rgba(0,31,36,0.7535612535612536) 0%, rgba(8,111,232,0.7735042735042735) 12%, rgba(95,166,171,0.37608546836703427) 87%)',
    zIndex:10,
    height:'300px'
    }}
      ></div>
      <ChannelCard channelDetail={channelDetail} marginTop="-110px"></ChannelCard>
    </Box>
    <Box display='flex' p='2'>
      <Box sx={{mr:{sm:'100px'}}}/>
    <Videos video={videos}></Videos>
    </Box>
  </Box>
}

export default ChannelDetail;

"use client";

import { Box, Typography, Container, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import Image from "next/image";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import { useEffect, useState } from "react";

type Doctor = {
  id: number;                                                                                              
  email: string;
  name: string;
  image: string;
  title: string;
};

const TopRatedDoctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    fetch("/first.json")
      .then((res) => res.json())
      .then((doctors) => setDoctors(doctors))
      .catch((err) => {
        console.error("Failed to fetch JSON:", err);
      });
  }, []);

  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Box textAlign={"center"}>
        <Typography variant="h4" component="h1" fontWeight={600}>
          Our Top Rated Doctors
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400} mt={1}>
          Access to expert physicians and surgeons, advanced technologies
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400}>
          and top-quality surgery facilities right here.
        </Typography>

          <Container sx={{marginTop: "20px"}}>
            <Grid container spacing={2}>
              {
                doctors.map((doctor: any) => (
                    <Grid size={4} key={doctor.id}>
            <Card>
                <Box>
                    <Image src={doctor.image}
                     width={500} 
                     height={100}
                      alt="image"></Image>
                </Box>
        <CardContent sx={{textAlign: "start"}}>
          <Typography gutterBottom variant="h5" fontWeight={600} >
            {doctor.name}
          </Typography>
          <Typography variant="body2" fontWeight={500} sx={{ color: 'text.secondary', marginLeft: "4px", fontSize: "15px"}}>
            {doctor.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary',  marginTop: "7px" }} >
            <LocationPinIcon />{doctor.location}
          </Typography>
        </CardContent>
    
      <CardActions sx={{justifyContent: "space-between", px: 2, }}>
        <Button  color="primary" sx={{borderRadius: "5px"}}>
          Book Now
        </Button>
        <Button variant="outlined" sx={{borderRadius: "5px"}}>
          Very View
        </Button>
      </CardActions>
                     </Card>
                    </Grid>
                )) }
            </Grid>
                <Box>
                    <Button variant="outlined" sx={{
                    marginTop: "20px",
                     width: "120px",
                      borderRadius: "10px",
                       textAlign: "center"
                       }}>View All</Button>
                </Box>
          </Container>
      </Box>
    </Box>
  );
};

export default TopRatedDoctors;


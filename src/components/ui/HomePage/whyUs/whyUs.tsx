
import { Box, Container, Grid, Typography } from "@mui/material";
import img from "../../../../assist/doctor2.jpg"
import Image from "next/image";

type Services = {
    image: string,
    title: string,
    description: string
}                                                                                                                                                                                                                                                                                                   


const servicesData = [
    {
        imageSer: "https://cdn-icons-png.flaticon.com/128/70/70535.png",
        title: " Award Winning Service",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing"
    },
    {
        imageSec: "https://cdn-icons-png.flaticon.com/128/620/620807.png",
        title1: " Best Quality Pregnancy Care",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        imageSe: "https://cdn-icons-png.flaticon.com/128/5306/5306344.png",
        title: " Complete Medical Equipments",
        description2: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
]


const WhyUs = () => {

    return (
        <Container>
            <Box sx={{textAlign: "center"}}>
                 <Typography variant="h6" component="h1" color="primary" fontWeight={700} sx={{}}>
                      Why Us
                 </Typography>
                 <Typography variant="h4" component="h1" fontWeight={700}>
                      Why Choose Us 
                 </Typography>
            </Box>

            <Grid container spacing={2} sx={{marginTop: "40px", marginBottom: "50px"}}>
                 <Grid size={6} sx={{gap: "5px"}}>
                     <Box sx={{
                          display: "flex", 
                          gap: "5px" , 
                          backgroundColor: "rgba(245, 245, 245, 1)",
                          padding: "20px",
                          borderRadius: "10px 10px 100px 5px",
                          
                     }}>
                        
                         <Image src={servicesData[0].imageSer} width={50} height={50} alt="img icons"></Image>
                         <Box sx={{}}>
                        <Typography>{servicesData[0].title}</Typography>
                         <Typography>{servicesData[0].description}</Typography>
                         </Box>
                     </Box>
                     <Box sx={{display: "flex", gap: "5px", marginTop: "10px", 
                          backgroundColor: "rgba(245, 245, 245, 1)",
                          padding: "20px",
                          borderRadius: "10px 100px 10px 5px  "
                     }}>
                         <Image src={servicesData[1].imageSec} width={50} height={50} alt="img icon"></Image>
                         <Box sx={{}}>
                        <Typography>{servicesData[0].title}</Typography>
                         <Typography>{servicesData[0].description}</Typography>
                         </Box>
                     </Box>
                     <Box sx={{display: "flex", gap: "5px",  marginTop: "10px", 
                          backgroundColor: "rgba(245, 245, 245, 1)",
                          padding: "20px",
                         borderRadius: "10px 10px 100px 5px",
                     }}>
                         <Image src={servicesData[2].imageSe} width={50} height={50} alt="img icon"></Image>
                         <Box >
                        <Typography>{servicesData[0].title}</Typography>
                         <Typography>{servicesData[0].description}</Typography>
                         </Box>
                     </Box>
                     <Box sx={{display: "flex", gap: "5px", marginTop: "10px", 
                          backgroundColor: "rgba(245, 245, 245, 1)",
                          padding: "20px",
                          borderRadius: "10px 100px 10px 5px  "
                     }}>
                         <Image src={servicesData[0].imageSer} width={50} height={50} alt="img icon"></Image>
                         <Box sx={{}}>
                        <Typography>{servicesData[0].title}</Typography>
                         <Typography>{servicesData[0].description}</Typography>
                         </Box>
                     </Box>
                 </Grid>

                 <Grid size={6}>
                    <Box  sx={{ width: 300,  borderRadius: "40px", overflow: "Hidden" }}>
                         <Image src={img}  alt="choose img" ></Image>
                    </Box>
                 </Grid>
            </Grid>
        </Container>
    );
};
 
export default WhyUs;
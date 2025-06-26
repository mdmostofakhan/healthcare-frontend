import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import grid from "@/assist/download.jpg"
import doctor from "@/assist/doctor.avif"
import doctor2 from "@/assist/doctor2.jpg"
import doctor4 from "@/assist/doctor4.avif"





const HereSection = () => {
    return (
      <Container sx={{
        display: "flex",
        direction: "row",
        marginTop: "50px"
      }}>
        <Box sx={{
            flex: 1,
            position: "relative",
            padding: "10px",
            
            
        }}>
            <Box sx={{
                position: "absolute",
                opacity: "0.03",
               left: "-10px",
               top: "60px"
            }}>
              <Image width={700}  src={grid} alt="grid img"/>
            </Box >
            <Typography mb={1} variant="h3" component="h1" fontWeight={600}>
                Healthier Hearts
                </Typography>
            <Typography mb={1} variant="h3" component="h1" fontWeight={600}>
                ComeFrom
                </Typography>
            <Typography color="primary.main" variant="h3" fontWeight={600} component="h1"  >
                PreventiveCare
            </Typography>
            <Typography my={4}
             variant="h5"
               component="h1"
               
                sx={{
                 
                 color: "gray",
                 fontSize: "24px"
            }} >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit
                . Quo tenetur ab quibusdam, animi quas omnis recusandae
                 error corrupti hic! Amet similique error corrupti hic! Amet similique 
            </Typography>
           <Box sx={{display: "flex", gap: 2}}>
             <Button >Make Appointment</Button> 
            <Button variant="outlined">Contact Us</Button> 
           </Box>
        </Box>


        <Box sx={{
            flex:"1",
            display:"flex",
            position: "relative"
        }}>
            <Box sx={{ 
                gap:2,
                 display: "flex",
                 position: "absolute",

              }}>
                 <Box sx={{  
                     mt: 2, 
                     borderRadius: '50%', 
                    overflow: 'hidden',  }}>
                    <Image src={doctor} width={220} height={240}  alt="doctor"/>
                </Box>
                <Box sx={{borderRadius: "55%", overflow:"hidden"}}>
                    <Image src={doctor2} width={200} height={240} alt="doctor"/>
                </Box>
            </Box>
            <Box sx={{borderRadius: "55%",
                 overflow:"hidden", 
                 position: "absolute",
                 height: "220px",
                 top: "170px",
                 left: "90px" }}>
                    <Image src={doctor4} width={220}  alt="doctor"/>
                </Box>
        </Box>

      </Container>
    );
};

export default HereSection;
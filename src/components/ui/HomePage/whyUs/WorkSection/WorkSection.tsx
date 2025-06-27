import { Box, Container, Grid, Typography } from "@mui/material";
import img from  "../../../../../assist/woman.jpg"
import Image from "next/image";


const WorkSection = () => {
    return (
      <Container>
         <Box>
             <Typography color="blue" fontSize={15}>
                 How it works
             </Typography>
             <Typography variant="h5" fontWeight={600} >
                 4 Easy Steps to Get Your Solution
             </Typography>
             <Typography fontSize={16} width={420}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus recusandae similique
             </Typography>
         </Box>

         <Grid mt={5}>
            <Grid size={6} >
                <Image src={img} width={600} height={600} alt="woman"></Image>
            </Grid>
            <Grid size={6}>
                
            </Grid>
         </Grid>
      </Container>
    );
};

export default WorkSection;
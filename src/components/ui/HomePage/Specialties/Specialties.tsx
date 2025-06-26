import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";



const Specialties = async () => {
     const res= await fetch("http://localhost:5000/api/v1/specialties", {
        next: {
            revalidate: 30
        }
     })
     const {data:specialties} = await res.json()
    //  console.log(specialties)
    return (
       <Container>
         <Box sx={{
            margin: "80px",
            textAlign: "center"
         }}>
            <Box sx={{
                textAlign:"start"
            }}>
                <Typography variant="h4" fontWeight={600}>
                    Explore Treatments across specialties
                </Typography>
                <Typography component="h1" fontSize={18} fontWeight={300}>
                    Explore Treatments across specialties
                </Typography>
            </Box>
            
            <Stack direction="row" gap={4} mt={4}>

                {
                    specialties.map((special: any) => (
                        <Box key={special.id} sx={{
                             width:"150px",
                            //  flex: 1,
                             border: "1px solid rgb(250,250,250, 1)  ",
                             borderRadius: "10px",
                              backgroundColor: "rgb(244,244,244, 1)",
                              padding: "40px 24px",
                              textAlign: "center",
                              "& img": {
                                 width: "50px",
                                 height: "50px",
                                 margin: "0 auto"
                              },
                              "&: hover":{
                                border: "1px solid blue",
                                borderRadius: "10px",
                                padding: "40px 24px",
                                transition: "ease-in"
                              }
                               }} >
                            <Image src={special.icon} width={80} height={80} alt="spacial icons"></Image>
                        <Box>
                            <Typography component="p" marginTop={1} fontWeight={500} fontSize={15}>
                                {special.title}
                            </Typography>
                        </Box>
                    </Box>
                    ))}
            </Stack>
        
                <Button variant="outlined" sx={{
                    marginTop: "20px",
                     width: "120px",
                      borderRadius: "10px",
                       textAlign: "center"
                       }}>View All</Button>
           
         </Box>
       </Container>
    );
};

export default Specialties;
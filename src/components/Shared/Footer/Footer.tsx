import { Box, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import facebookIcons from "@/assist/facebook.png"
import Image from 'next/image';

const Footer = () => {
    return (
        <Box bgcolor="rgb(17, 26, 34)" p={4}>
            <Container>
             <Stack direction="row" gap={4} justifyContent="center" alignItems="center">
                    <Typography color='#fff' component={Link} href="/consultation">Consultation</Typography>
                    <Typography color='#fff' component={Link} href="">Health Plans</Typography>
                    <Typography color='#fff' component={Link} href="">Medicine</Typography>
                    <Typography color='#fff' component={Link} href="">Diagnostics</Typography>
                    <Typography color='#fff' component={Link} href="">NGOs</Typography>
              </Stack>
             <Stack direction="row" py={2} gap={4} justifyContent="center" alignItems="center">
                   <Image src={facebookIcons} alt='facebook icon' width={40} height={40}></Image>
                   <Image src={facebookIcons} alt='facebook icon' width={40} height={40}></Image>
                   <Image src={facebookIcons} alt='facebook icon' width={40} height={40}></Image>
                   <Image src={facebookIcons} alt='facebook icon' width={40} height={40}></Image>
              </Stack>
              <div className='border-b-[1px] border-dashed ' color='#fff'></div>
               <Stack direction="row" py={2} gap={4} justifyContent="space-between" alignItems="center">
                   <Typography color='#fff'>&Copy;2024PH Health Care All Rights Reserved</Typography>
                   <Typography color='#fff' variant="h5" component={Link} href="/"fontWeight={600}>
                    P<Box component="span" color="primary.main">H</Box> Health Care
                </Typography>
                 <Typography color='#fff'>Privacy Policy Terms&Conditions</Typography>

              </Stack>              
        </Container>
        </Box>
    );
};

export default Footer; 
import React from "react";
import Gambit from '../../assets/gambit-removebg-resized.png';
import Quinn from '../../assets/quinn-removebg-resized.png'
import BGImage from '../../assets/whitehorse_mtn_color_resized2.jpg';
import { createStyles, BackgroundImage, Box, Grid } from "@mantine/core";


const useStyles = createStyles((theme) => ({
  quinn: {
    display: 'flex',
    position: 'relative',
    marginLeft: '20vw',
    width: '50%',
  },

  gambit: {
    display: 'flex',
    position: 'relative',
    // marginLeft: '8vw',
    // marginTop: '7vw',
    width: '50%',
  },

  imgContainer: {
    display: 'flex',
    position: 'relative',
    justifyItems: 'center'
  },

  // body: {
  //   backgroundImage: '../assets/whitehorse_mtn_color_resized2.jpg',
  //   overflow: 'hidden',
  //   backgroundSize: 'cover',
  //   width: '100%',
  //   height: '100vh',
  // }
}));

const Home = (props) => {
  const { classes } = useStyles();

  return (
    <>
    {/* <body className={classes.body}> */}
    <Box maw={300} mx="auto">
      <BackgroundImage src={BGImage}>
      <Grid grow
        className={classes.imgContainer}
      >
        <Grid.Col
          span={6}
          display="flex"
          position="relative"

        >
          <img src={Quinn}
            alt="Quinn"
          />
        </Grid.Col>
        <Grid.Col
          span={6}
          mt={120}
          display="flex"
          position="relative"
          
        >
          <img
            src={Gambit}
            alt="Gambit"
          />
        </Grid.Col>
      </Grid>
      </BackgroundImage>
      </Box>
      {/* </body> */}
    </>
  )
};

export default Home;
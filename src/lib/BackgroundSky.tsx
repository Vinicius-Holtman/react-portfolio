import { Box } from '@mui/material';
import Sky from 'react-sky';
import node from '../assets/skills/node.svg';
import react from '../assets/skills/react.svg';

export function BackgroundSky() {
    return (
      <Box sx={{
        position: "absolute",
        height: "695px",
        width: "100%",
        zIndex: -1
      }}>
        <Sky 
          images={{
            /* FORMAT AS FOLLOWS */
            0: node,  /* You can pass as many images as you want */
            1: react,
            // 2: node /* you can pass images in any form: link, imported via webpack... */
            /* 3: your other image... */
            /* 4: your other image... */
            /* 5: your other image... */
            /* ... */
          }}
          how={30} /* Pass the number of images Sky will render chosing randomly */
          time={40} /* time of animation */
          size={'100px'} /* size of the rendered images */
          background={'palettedvioletred'} /* color of the background */
        />
      </Box>
    );
}
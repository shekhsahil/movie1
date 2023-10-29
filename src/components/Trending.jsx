import { Grid } from "@chakra-ui/react";
import "../App";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";
function Trending() {
  return (
    <div>
      <center>
        <h1 style={{ color: "white" }}>Trending</h1>
      </center>

      {/* <Grid
        templateColumns="repeat(4, 1fr)"
        gap={8}
        style={{ padding: "30px" }}
      >
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg"
          alt=""
          style={{ width: "25vw" }}
        />
        <img
          src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17580215_b_v13_ac.jpg"
          alt=""
          style={{ width: "25vw", height: "auto" }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/en/3/3b/URI_-_New_poster.jpg"
          alt=""
          style={{ width: "25vw" }}
        />
        <img
          src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
          alt=""
          style={{ width: "25vw" }}
        />
      </Grid> */}
      <Wrap>
        <WrapItem>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
            alt=""
            style={{ width: "25vw" }}
          />
        </WrapItem>
        <WrapItem></WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="tomato">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
              alt=""
              style={{ width: "25vw" }}
            />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 4
          </Center>
        </WrapItem>
      </Wrap>
    </div>
  );
}

export default Trending;

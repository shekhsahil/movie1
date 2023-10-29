import { Button } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
function Genre() {
  return (
    <div>
      <h1 style={{ color: "white" }}>Genre</h1>
      <br />
      <Grid templateColumns="repeat(5, 1fr)" gap={3}>
        <Button colorScheme="blue" style={{ padding: "1px" }}>
          Action
        </Button>
        <Button colorScheme="blue">Horror</Button>
        <Button colorScheme="blue" style={{ padding: "1px" }}>
          Comedy
        </Button>
        <Button colorScheme="blue">Drama</Button>
        <Button colorScheme="blue">Thriller</Button>
      </Grid>
      <br />
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <Button colorScheme="blue">Action</Button>
        <Button colorScheme="blue">Horror</Button>
        <Button colorScheme="blue">Comedy</Button>
        <Button colorScheme="blue">Drama</Button>
        <Button colorScheme="blue">Thriller</Button>
      </Grid>
      <br />
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <Button colorScheme="blue">Action</Button>
        <Button colorScheme="blue">Horror</Button>
        <Button colorScheme="blue">Comedy</Button>
        <Button colorScheme="blue">Drama</Button>
        <Button colorScheme="blue">Thriller</Button>
      </Grid>
    </div>
  );
}

export default Genre;

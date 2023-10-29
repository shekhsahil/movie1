import Navbar from "./components/Navbar";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Genre from "./components/Genre";
import { ChakraProvider } from "@chakra-ui/react";
import Trending from "./components/Trending";
// const style = {
//   backgroundColor: " rgb(57, 72, 103);",
// };
function App() {
  return (
    <>
      <div>
        <ChakraProvider>
          <Navbar />
          <Trending />
          <Genre />
        </ChakraProvider>
      </div>
    </>
  );
}

export default App;

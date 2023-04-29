import { useState } from "react";
import Box from "./components/Box";
import NavBar from "./components/NavBar";

const App = () => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className='bg-[#040406]'>
      <NavBar />
      <div className='flex items-center justify-center h-screen'>
        <Box isClicked={isClicked} clickHandler={clickHandler} />
      </div>
    </div>
  );
};

export default App;

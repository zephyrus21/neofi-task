import { useState } from "react";
import Box from "./components/Box";
import NavBar from "./components/NavBar";
import Dialog from "./components/Dialog";

const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [token, setToken] = useState({
    name: "ethereum",
    symbol: "eth",
  });

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className='bg-[#040406]'>
      {isClicked && <Dialog setToken={setToken} />}
      <NavBar />
      <div className='flex items-center justify-center h-screen'>
        <Box isClicked={isClicked} clickHandler={clickHandler} token={token} />
      </div>
    </div>
  );
};

export default App;

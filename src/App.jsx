import { useState } from "react";
import Box from "./components/Box";
import NavBar from "./components/NavBar";
import Dialog from "./components/Dialog";

const App = () => {
  const tokenData = [
    {
      name: "Ethereum",
      symbol: "eth",
    },
    {
      name: "Bitcoin",
      symbol: "btc",
    },
    {
      name: "Matic",
      symbol: "matic",
    },
    {
      name: "Binance",
      symbol: "bnb",
    },
    {
      name: "XRP",
      symbol: "xrp",
    },
    {
      name: "Solana",
      symbol: "sol",
    },
  ];
  const [isClicked, setIsClicked] = useState(false);
  const [token, setToken] = useState(tokenData[0]);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  const onTokenClickHandler = (e, newToken) => {
    setToken({
      name: newToken.name,
      symbol: newToken.symbol,
    });
    clickHandler();
  };

  return (
    <div className='bg-[#040406]'>
      {isClicked && (
        <div className='flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 z-10 bg-opacity-80 bg-bg w-full h-full'>
          <Dialog
            tokenData={tokenData}
            clickHandler={clickHandler}
            onTokenClickHandler={(e, newToken) =>
              onTokenClickHandler(e, newToken)
            }
            selectedToken={token.symbol}
          />
        </div>
      )}
      <NavBar />
      <div className='flex items-center justify-center h-screen'>
        <Box isClicked={isClicked} clickHandler={clickHandler} token={token} />
      </div>
    </div>
  );
};

export default App;

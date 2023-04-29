import { useEffect, useState } from "react";
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
  const [websocket, setWebsocket] = useState(null);
  const [currentPrice, setCurrentPrice] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [token, setToken] = useState(tokenData[0]);

  const handleWebSocket = (url) => {
    // close existing WebSocket connection if it exists
    if (websocket) websocket.close();

    const newWebsocket = new WebSocket(url);

    newWebsocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      // console.log(message);
      setCurrentPrice(message.p * 80);
    };

    setWebsocket(newWebsocket);
  };

  useEffect(() => {
    handleWebSocket(
      `wss://stream.binance.com:9443/ws/${token.symbol}usdt@trade`
    );
  }, [token.symbol]);

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
        <Box
          isClicked={isClicked}
          clickHandler={clickHandler}
          token={token}
          currentPrice={currentPrice}
        />
      </div>
    </div>
  );
};

export default App;

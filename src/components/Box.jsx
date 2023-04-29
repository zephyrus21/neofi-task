/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import arrow from "../assets/arrow.svg";

const Box = ({ clickHandler, token }) => {
  const [currentPrice, setCurrentPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [noOfTokens, setNoOfTokens] = useState("");

  const changeHandler = (e) => {
    setAmount(e.target.value);
    setNoOfTokens(e.target.value / currentPrice);
  };

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${token.symbol}usdt@trade`
    );
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setCurrentPrice(message.p * 80);
    };
  }, [token]);

  return (
    <div className='bg-bg p-10 text-neutral-300 tertiary w-[460px] flex flex-col gap-6 border border-gray-600 rounded-xl relative'>
      <div className='absolute -top-8 bg-bg p-2 rounded-full left-[198px] border-b border-gray-600'>
        <div className='bg-bg2 p-2 rounded-full'>
          <img src={`${token.symbol}.png`} alt='' />
        </div>
      </div>
      <div className='flex items-center justify-between w-full'>
        <p>Current Value</p>
        <p className='text-primary text-2xl font-semibold'>
          ₹{parseFloat(currentPrice).toFixed(2)}
        </p>
      </div>
      <button
        className='bg-bg2 rounded-lg px-6 py-4 text-white flex justify-between items-center'
        onClick={clickHandler}>
        <div className='flex'>
          <img src={`${token.symbol}.png`} alt='eth' className='w-6 h-6 mr-2' />
          <p>{token.name}</p>
        </div>
        <img src={arrow} alt='' />
      </button>
      <div className='flex flex-col gap-3 relative'>
        <p className='absolute right-6 bottom-4'>INR</p>
        <p>Amount you want to invest</p>
        <input
          className='border-2 border-[#6E56F840] bg-bg rounded-lg px-6 py-3 font-semibold text-xl text-secondary focus:text-white'
          type='number'
          placeholder='0.00'
          value={amount}
          onChange={changeHandler}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <p>Estimate Number of {token.symbol.toUpperCase()} You will Get</p>
        <input
          className='bg-bg2 rounded-lg px-6 py-3 font-semibold text-xl text-secondary'
          type='number'
          placeholder='0.00'
          value={noOfTokens}
          disabled
        />
      </div>
      <button className='text-white text-lg font-semibold rounded-3xl py-3 px-4 bg-background mt-6'>
        Buy
      </button>
    </div>
  );
};

export default Box;

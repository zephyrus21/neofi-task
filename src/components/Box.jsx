/* eslint-disable react/prop-types */
import { useState } from "react";

import arrow from "../assets/arrow.svg";

const Box = ({ clickHandler, token, currentPrice }) => {
  const [amount, setAmount] = useState("");
  const [noOfTokens, setNoOfTokens] = useState("");

  const changeHandler = (e) => {
    setAmount(e.target.value);
    setNoOfTokens(e.target.value / currentPrice);
  };

  return (
    <div className='bg-border p-[0.3px] rounded-xl'>
      <div className='bg-bg p-10 text-neutral-300 tertiary w-[460px] flex flex-col gap-6 rounded-xl relative'>
        <div className='absolute -top-8 bg-bg p-2 rounded-full left-1/2 -translate-x-1/2 icon border-8 border-[#040406]'>
          <div className='bg-bg2 p-2 rounded-full'>
            <img src={`${token.symbol}.png`} alt='' />
          </div>
        </div>
        <div className='flex items-center justify-between w-full mt-8'>
          <p>Current Value</p>
          <p className='text-primary text-2xl font-semibold'>
            ₹{parseFloat(currentPrice).toFixed(2)}
          </p>
        </div>
        <button
          className='bg-bg2 rounded-lg px-6 py-4 text-white flex justify-between items-center'
          onClick={clickHandler}>
          <div className='flex'>
            <img
              src={`${token.symbol}.png`}
              alt='eth'
              className='w-6 h-6 mr-2'
            />
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
          <p>Estimate Number of {token.symbol} You will Get</p>
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
    </div>
  );
};

export default Box;

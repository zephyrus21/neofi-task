/* eslint-disable react/prop-types */
import { useState } from "react";
import cross from "../assets/cross.svg";
import search from "../assets/search.svg";
import tick from "../assets/tick.svg";

const Dialog = ({
  clickHandler,
  tokenData,
  onTokenClickHandler,
  selectedToken,
}) => {
  const [query, setQuery] = useState("");

  const getFilteredItems = (query, tokenData) => {
    if (!query) {
      return tokenData;
    }
    return tokenData.filter((token) =>
      token.name.toLowerCase().includes(query)
    );
  };

  const filteredItems = getFilteredItems(query, tokenData);

  return (
    <div className='bg-bg3 p-12 text-neutral-300 tertiary w-[400px] flex flex-col gap-4 border border-gray-600 rounded-xl relative'>
      <button
        onClick={clickHandler}
        className='absolute top-3 right-3 bg-bg4 p-2 rounded-lg cursor-pointer'>
        <img src={cross} alt='cross' className='h-3 w-3' />
      </button>
      <div className='relative'>
        <img src={search} alt='search' className='absolute left-3 bottom-3' />
        <input
          onChange={(e) => setQuery(e.target.value)}
          type='text'
          placeholder='Search chains'
          className='rounded-full bg-transparent border border-[#6E56F840] pl-10 p-2 w-full'
        />
      </div>
      {filteredItems.map((token) => (
        <button
          onClick={(e) => onTokenClickHandler(e, token)}
          key={token.symbol}
          className={`flex items-center gap-2 px-4 py-3 ${
            selectedToken === token.symbol ? "bg-bg4" : ""
          } bg-opacity-30 rounded-lg`}>
          <img src={`${token.symbol}.png`} alt='' className='h-6 w-6' />
          <p>{token.name}</p>
          {selectedToken === token.symbol && <img src={tick} alt='tick' />}
        </button>
      ))}
    </div>
  );
};

export default Dialog;

import ethLogo from "../assets/eth.png";
import arrow from "../assets/arrow.svg";
import Dialog from "./Dialog";

const Box = ({ isClicked, clickHandler }) => {
  return (
    <div className='bg-bg p-10 text-neutral-300 tertiary w-[460px] flex flex-col gap-6 border border-gray-600 rounded-xl relative'>
      <div className='absolute -top-8 bg-bg p-2 rounded-full left-[198px] border-b border-gray-600'>
        <div className='bg-bg2 p-2 rounded-full'>
          <img src={ethLogo} alt='' />
        </div>
      </div>
      <div className='flex items-center justify-between w-full'>
        <p>Current Value</p>
        <p className='text-primary text-2xl font-semibold'>₹24488</p>
      </div>
      <button
        className='bg-bg2 rounded-lg px-6 py-4 text-white flex justify-between items-center'
        onClick={clickHandler}>
        <div className='flex'>
          <img src={ethLogo} alt='eth' className='w-6 h-6 mr-2' />
          <p>Ethereum</p>
        </div>
        <img src={arrow} alt='' />
      </button>
      <div className='flex flex-col gap-3 relative'>
        <p className='absolute right-6 bottom-4'>INR</p>
        <p>Amount you want to invest</p>
        <input
          className='border-2 border-[#6E56F840] bg-bg rounded-lg px-6 py-3 font-semibold text-xl text-secondary focus:text-white'
          type='text'
          placeholder='0.00'
        />
      </div>
      <div className='flex flex-col gap-3'>
        <p>Estimate Number of ETH You will Get</p>
        <input
          className='bg-bg2 rounded-lg px-6 py-3 font-semibold text-xl text-secondary'
          type='text'
          placeholder='0.00'
          disabled
        />
      </div>
      <button className='text-white text-lg font-semibold rounded-3xl py-3 px-4 bg-background mt-6'>
        Buy
      </button>
      {isClicked && <Dialog />}
    </div>
  );
};

export default Box;

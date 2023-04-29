import neoFiLogo from "../assets/NeoFi.svg";

const NavBar = () => {
  return (
    <div className='bg-bg h-16 flex items-center justify-around'>
      <img className='h-7' src={neoFiLogo} alt='logo' />
      <div className='flex text-secondary gap-12 h-full items-center cursor-pointer'>
        <div className='text-primary font-semibold relative'>
          <p>Trade</p>
          <p className='absolute content-none border-b-2 w-16 -left-2 -bottom-5 border-primary'></p>
        </div>
        <p>Earn</p>
        <p>Support</p>
        <p>About</p>
      </div>
      <button className='text-white font-semibold rounded-3xl p-2 px-4 bg-background'>
        Connect Wallet
      </button>
    </div>
  );
};

export default NavBar;

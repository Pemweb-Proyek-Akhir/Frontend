export default function Navbar() {
  return (
    <>
      <div className="p-5 shadow-lg bg-white flex justify-between items-center fixed top-0 z-10 w-screen">
        <div className="[&>div:hover]:text-primary [&>div:hover]:cursor-pointer flex space-x-7 text-base font-medium items-center">
          <img src="/logo/logo-blue.svg" />
          <div className="hover:text-primary">Company</div>
          <div>Marketplace</div>
          <div>Features</div>
          <div>Team</div>
          <div>Contact</div>
        </div>
        <div className="flex space-x-6 items-center">
          <button className="px-4 py-2 rounded-md shadow-md">Login</button>
          <button className="bg-primary text-white font-medium px-3 py-2 rounded-md  block">
            Register
          </button>
        </div>
      </div>
      <div className="h-[88px]"></div>
    </>
  );
}

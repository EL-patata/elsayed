const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-white/30 via-white/20 to-white/30 text-black py-2 px-6 flex justify-between items-center z-50 shadow-lg backdrop-blur-lg border-b border-white/20">
      <div className="px-40 mx-auto w-full flex justify-between items-center">
        <h1 className="cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <img
            src="src/assets/logo.png"
            alt="Logo"
            className="h-16 drop-shadow-lg transition-all duration-300 hover:rotate-6"
          />
        </h1>

        <ul className="flex space-x-8 text-lg">
          {["Home", "Services", "About Us", "Contact"].map((item, index) => (
            <li key={item} className="relative group">
              <a
                href="#"
                className="relative transition-colors duration-300 text-gray-900 hover:text-gray-600"
              >
                {item}
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

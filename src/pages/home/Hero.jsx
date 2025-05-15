const HeroSection = () => {
  return (
    <div
      className="relative w-[98%] mx-auto h-[98vh] rounded-b-[30px]
    "
    >
      {/* الخلفية */}
      <img
        src="https://images.unsplash.com/photo-1587975844610-40f1ad10d07e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover  overflow-hidden rounded-b-[30px]
        "
      />

      {/* التراكب الداكن لتحسين وضوح النص */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-[30px]"></div>

      {/* النص في المنتصف */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Luxor university sustainability platform
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl">
          منصة جامعة الأقصر للاستدامة
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

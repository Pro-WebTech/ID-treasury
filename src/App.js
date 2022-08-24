import "./App.css";

function App() {
  return (
    <div className="">
      <div className="bg-gradient-to-l from-[#62BADA] to-[#C9E7F2] w-full h-full sm:h-screen sm:overflow-hidden">
        <div className="max-w-[1280px] w-11/12 m-auto">
          <div className="sm:flex justify-between items-center gap-10 py-10">
            <p className="text-black text-center sm:text-start font-bold text-2xl">
              ID Treasury. IO
            </p>
            <div className="flex justify-center mt-4 sm:mt-0 items-center gap-10 text-black/75 font-medium">
              <p className="cursor-pointer">project</p>
              <p className="cursor-pointer">Template</p>
              <p className="cursor-pointer">Blog</p>
              <p className="cursor-pointer">Pricing</p>
            </div>
            <div className="flex justify-center sm:justify-end gap-10 mt-4 sm:mt-0">
              <button className="font-medium">Sign In</button>
              <button className="px-4 py-2 sm:px-8 sm:py-4 bg-[#4F46BA] text-white">
                Start Free
              </button>
            </div>
          </div>

          <div className="sm:flex justify-between gap-10 items-start">
            <div className="sm:w-1/2">
              <p className="text-black text-3xl sm:text-5xl font-bold text-center sm:text-start mt-48">
                Measure ID Treasury
              </p>
              <p className="text-black/75 mt-10 text-lg sm:text-xl text-center sm:text-start">
                User controlled access to personal data One stop location for ID
                services
              </p>

              <div className="flex justify-center sm:justify-start gap-10 mt-10 sm:mt-20">
                <button className="bg-[#3734A9] text-white rounded-full px-10 py-3">
                  Get Started
                </button>
                <button className="flex justify-start items-center gap-4 text-lg text-[#3734A9] font-medium">
                  <img src="/img/play.png" alt="" />
                  See How It Works
                </button>
              </div>

              <div className="mt-5 sm:mt-10 flex justify-center sm:justify-start gap-10">
                <div className="flex items-center gap-2 text-[#757095]">
                  <img src="/img/check.png" alt="" />
                  <p>Free Register</p>
                </div>
                <div className="flex items-center gap-2 text-[#757095]">
                  <img src="/img/check.png" alt="" />
                  <p>Creat Service</p>
                </div>
              </div>
            </div>
            <div className="sm:w-1/2">
              <img
                src="/img/hands.png"
                alt=""
                className="w-64 sm:w-full m-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

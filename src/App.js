import "./App.css";

function App() {
  return (
    <div className="">
      <div className="bg-gradient-to-l from-[#62BADA] to-[#C9E7F2] w-full h-full sm:h-screen sm:overflow-hidden">
        <div className="max-w-[1280px] w-11/12 m-auto pt-20">
          <a
            href="https://www.Block2AI.com"
            target="_blank"
            without
            rel="noreferrer"
          >
            <img src="/img/logo.png" alt="" className="h-20 m-auto sm:m-0" />
          </a>
         <div className="sm:flex justify-between gap-10 items-start">
            <div className="sm:w-1/2">
              <p className="text-black text-3xl sm:text-8xl font-bold text-center sm:text-start mt-20 sm:mt-[140px]">
                Metaverse ID Treasury
              </p>
              <p className="text-black/75 mt-10 text-lg sm:text-xl text-center sm:text-start w-8/12">
                User controlled access to personal data One stop location for ID
                services
              </p>
              <div className="flex justify-end">
                <img src="/img/coming.png" alt="" className="-mt-40" />
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

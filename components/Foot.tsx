import React from "react";

const Foot = () => {
  return (
    <footer className="text-slate-100 px-4 md:px-52 bg-black mt-2 py-6 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-1">
      <div className="mt-2 col-span-full md:col-span-2 flex justify-around md:grid md:grid-cols-3">
        <a
          href="https://www.linkedin.com/in/ramireznluis/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <div className="text-center hover:cursor-pointer">Linkedin</div>
        </a>
        <div className="text-center hover:cursor-pointer block w-full">
          <a
            href="https://github.com/Ramirez-L"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>

      <div className="mt-2 col-span-full text-center md:col-span-2">
        Hecho con ❤️ por Luis Ramírez
      </div>

      <div className="mt-2 col-span-full text-center md:col-span-2">
        🚀 Mendoza, Argentina
      </div>
    </footer>
  );
};

export default Foot;

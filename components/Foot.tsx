import React from "react";

const Foot = () => {
  return (
    <footer className="text-slate-100 px-52 bg-black mt-2 py-6 grid grid-cols-6 gap-1">
      <div className="mt-2 col-span-2 justify-between grid grid-cols-3">
        <a href="https://www.linkedin.com/in/ramireznluis/" target="_blank">
          <div className="text-center hover:cursor-pointer">Linkedin</div>
        </a>
        <div className="text-center hover:cursor-pointer">
          <a href="https://github.com/Ramirez-L" target="_blank">
            Github
          </a>
        </div>
      </div>
      <div className="mt-2 col-span-2 text-center">
        Hecho con ❤️ por Luis Ramírez
      </div>
      <div className="mt-2 col-span-2 text-center">🚀 Mendoza, Argentina</div>
    </footer>
  );
};

export default Foot;

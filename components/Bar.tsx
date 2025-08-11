import React from "react";

const logo = "https://ramirezluishomelab.com/main-logo-black.svg";

const Bar = () => {
  return (
    <nav className="bg-black py-6 px-52 sticky top-0 text-slate-100 justify-center content-center">
      <div>
        <img src={logo} width={100} height={100} alt={""} />
      </div>
    </nav>
  );
};

export default Bar;

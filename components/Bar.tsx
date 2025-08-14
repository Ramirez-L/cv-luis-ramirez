import Image from "next/image";
import React from "react";

const logo = "https://ramirezluishomelab.com/main-logo-black.svg";

const Bar = () => {
  return (
    <nav className="bg-black py-6 px-4 sm:px-52 sticky top-0 text-slate-100 flex items-center">
      <div>
        <Image src={logo} width={100} height={100} alt={"Logo"} />
      </div>
    </nav>
  );
};

export default Bar;

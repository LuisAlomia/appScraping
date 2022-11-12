import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <header
      className="hero min-h-[370px]"
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md flex flex-col items-center">
          <h1 className="mb-5 text-5xl font-bold">Welcome !</h1>
          <p className="mb-5 text-lg">
            welcome to web scraping, the place where you can find your products.
          </p>
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;

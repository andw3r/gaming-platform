"use client";
import HeaderContent from "./HeaderContent";
import HeaderImages from "./HeaderImages";

const Header = () => {
  return (
    <header className="pb-[130px]">
      <div className="container">
        <div className="flex">
          <HeaderContent />
          <HeaderImages />
        </div>
      </div>
    </header>
  );
};

export default Header;

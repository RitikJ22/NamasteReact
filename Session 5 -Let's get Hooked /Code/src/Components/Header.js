export const Title = () => (
  <a href="/">
    <img
      className="w-16 ml-2"
      src="https://i.pinimg.com/originals/82/be/d4/82bed479344270067e3d2171379949b3.png"
      alt="logo"
    />
  </a>
);

const Header = () => {
  return (
    <>
      <div className="flex justify-between m-6 border-4 border-black lg:items-center ">
        <Title />
        <div className="">
          <ul className="flex gap-4 lg:justify-between lg:items-center lg:gap-12 lg:mr-20">
            <li> Home</li>
            <li> About</li>
            <li> Contact US</li>
            <li> Cart</li>
          </ul>
        </div>
      </div>{" "}
    </>
  );
};

export default Header;

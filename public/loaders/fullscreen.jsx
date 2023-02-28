import Logo from "../icons/logo.svg";

const FullscreenLoader = () => {
  return (
    <div
      className="h-screen w-full fixed top-0 left-0 bg-white flex justify-center items-center"
      style={{ zIndex: "99" }}
    >
      <div>
        <Logo />
      </div>
    </div>
  );
};

export default FullscreenLoader;

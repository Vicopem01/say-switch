import Logo from "@/public/icons/logo.svg";

const Auth = ({ children }) => {
  return (
    <div className="flex min-h-screen min-w-full items-stretch overflow-hidden">
      <div className="w-1/2 h-auto m-s2">
        <Logo />
        <div className="flex justify-center items-center h-full -mt-s5">
          {children}
        </div>
      </div>
      <div className="bg-green-bg w-1/2 h-auto rounded-xl m-s2"></div>
    </div>
  );
};

const AuthLayout = (page) => <Auth>{page}</Auth>;

export default AuthLayout;

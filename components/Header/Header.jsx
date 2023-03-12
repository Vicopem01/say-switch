import Logo from "@/public/icons/logo.svg";
import ArrowDown from "@/public/icons/arrow-down-filled.svg";
import Avatar from "@/public/images/avatar.png";
import Image from "next/image";
import { PROFILE_LINKS } from "@/constants";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useRouter } from "next/router";
import Logout from "@/public/icons/logout.svg";
import { getUserProfile } from "@/services";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const getAcc = async () => {
    try {
      const res = await getUserProfile();
      console.log(res.data.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAcc();
    setIsOpen(false);
  }, [router.pathname]);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
    window.location.reload();
  };

  return (
    <header className="px-s4 py-s2 flex items-center bg-white">
      <div className="w-[240px]">
        <Logo />
      </div>
      <div className="flex justify-between relative items-center w-[calc(100%-240px)]">
        <span className="font-medium">Profile</span>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Image src={Avatar} alt="Profile Photo" width={34} height={34} />
          <span className="px-s1.5">SAYSWITCH</span>
          <ArrowDown />
        </div>
        {isOpen && (
          <div className="px-s4 py-s1 z-10 absolute w-[230px] top-12 -right-5 bg-white rounded-xs">
            <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
              {PROFILE_LINKS.map((link, i) => (
                <Fragment key={i}>
                  <Link href={link.href} className="flex items-center" key={i}>
                    <link.icon />
                    <span className="pl-s2 py-s1">{link.text}</span>
                  </Link>
                </Fragment>
              ))}
              <button className="flex items-center" onClick={handleLogout}>
                <Logout />
                <span className="pl-s2 py-s1">Log Out</span>
              </button>
            </OutsideClickHandler>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

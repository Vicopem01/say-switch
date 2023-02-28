import Logo from "@/public/icons/logo.svg";
import ArrowDown from "@/public/icons/arrow-down-filled.svg";
import Avatar from "@/public/images/avatar.png";
import Image from "next/image";
import { PROFILE_LINKS } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useRouter } from "next/router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

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
                <Link href={link.href} className="flex items-center" key={i}>
                  <link.icon />
                  <span className="pl-s2 py-s1">{link.text}</span>
                </Link>
              ))}
            </OutsideClickHandler>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

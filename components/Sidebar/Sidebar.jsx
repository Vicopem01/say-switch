import { SIDEBAR_LINKS } from "@/constants";
import ArrowDown from "@/public/icons/arrow-down.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Sidebar = () => {
  return (
    <div>
      {SIDEBAR_LINKS.map((link, i) => (
        <Links key={i} {...link} />
      ))}
    </div>
  );
};

const Links = ({ container, links }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="cursor-pointer">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between p-s2 items-center"
      >
        <p className="font-bold text-sm">{container}</p>
        <span className={`transition-all ${open && "rotate-180"}`}>
          <ArrowDown />
        </span>
      </div>
      {open && (
        <div className="py-s1 px-s2">
          {links.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className={`${
                router.pathname === link.href
                  ? "text-green border-[#008037] border"
                  : "border-transparent"
              } flex text-sm items-center py-s1 px-s2`}
            >
              <link.icon />
              <span className="pl-s2">{link.text}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default Sidebar;

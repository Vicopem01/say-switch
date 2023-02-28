import Dashboard from "@/public/icons/dashboard.svg";
import Report from "@/public/icons/report.svg";
import Profile from "@/public/icons/profile.svg";
import Password from "@/public/icons/password.svg";
import Home from "@/public/icons/home.svg";
import Logout from "@/public/icons/logout.svg";

export const SIDEBAR_LINKS = [
  {
    container: "Home",
    links: [
      {
        text: "Dashboard",
        href: "/dashboard",
        icon: Dashboard,
      },
    ],
  },
  {
    container: "Features",
    links: [
      {
        text: "Report",
        href: "/report",
        icon: Report,
      },
    ],
  },
];

export const PROFILE_LINKS = [
  {
    text: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    text: "My Profile",
    href: "/profile",
    icon: Profile,
  },
  {
    text: "Change Password",
    href: "/change-password",
    icon: Password,
  },
  {
    text: "Report",
    href: "/report",
    icon: Report,
  },
  {
    text: "Log out",
    href: "/log-out",
    icon: Logout,
  },
];

export const TABLE_DATA = [
  {
    created: "01/09/2022 09:25am",
    termId: "2076RZ20",
    merId: "0761000000RX25",
    pan: "506109******4513",
    amount: "NGN 45,000",
  },
];

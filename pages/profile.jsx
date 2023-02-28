import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import DashboardLayout from "@/layouts/dashboardLayout/dashboard";
import Cancel from "@/public/icons/cancel.svg";
import Change from "@/public/icons/change.svg";
import Avatar from "@/public/images/avatar.png";
import Image from "next/image";
import Hide from "@/public/icons/hide.svg";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Rolling from "@/public/loaders/rolling.svg";
import { changePassword } from "@/services";
import { useRouter } from "next/router";

const PROFILE_INPUTS = [
  {
    label: "First Name",
  },
  {
    label: "Last Name",
  },
  {
    label: "Email Address",
  },
  {
    label: "Phone Number",
  },
  {
    label: "User Role",
  },
  {
    label: "User Schemes",
  },
];
const PASSWORD_INPUTS = [
  {
    label: "Current Password",
    id: "oldPassword",
    name: "oldPassword",
  },
  {
    label: "New Password",
    id: "newPassword",
    name: "newPassword",
  },
  {
    label: "Re-type New Password",
    id: "retypePassword",
    name: "retypePassword",
  },
];

const Profile = () => {
  return (
    <>
      <PersonalInfo />
      <Password />
    </>
  );
};

const PersonalInfo = () => {
  return (
    <div>
      <h2 className="title">Personal Information</h2>
      <div className="flex justify-between">
        <p className="w-1/2">
          Enter your personal information and ensure they are correct
        </p>
        <div className="w-1/2 bg-white p-s2">
          <div className="flex mb-s3">
            <Image src={Avatar} alt="Profile Photo" />
            <button className="flex items-center mx-s2">
              <Change />
              <span className="pl-s1">Change</span>
            </button>
            <button className="flex items-center">
              <Cancel />
              <span className="pl-s1">Remove</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-s2">
            {PROFILE_INPUTS.map((input, i) => (
              <Input key={i} {...input} />
            ))}
          </div>
          <hr className="my-s4" />
          <div className="w-[210px] flex ml-auto">
            <Button classes="w-2/5">Cancel</Button>
            <Button classes="min-w-max ml-s1.5">Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Password = () => {
  const router = useRouter();
  const [payload, setPayload] = useState({
    oldPassword: "",
    newPassword: "",
    retypePassword: "",
  });

  const [effects, setEffects] = useState({
    isLoading: false,
    hasSubmitted: false,
  });

  const changePasswordRef = useRef(null);

  useEffect(() => {
    if (router.query.tab === "change-password")
      changePasswordRef.current.scrollIntoView({ behavior: "smooth" });
  }, [changePasswordRef.current, router.query.tab]);

  const handleChange = (e) =>
    setPayload({ ...payload, [e.target.name]: e.target.value });

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      setEffects({ ...effects, hasSubmitted: true });
      if (payload.newPassword !== payload.retypePassword) return;
      setEffects({ ...effects, isLoading: true });

      const res = await changePassword({
        oldPassword: payload.oldPassword,
        newPassword: payload.newPassword,
      });
      console.log(res);
      setEffects({ ...effects, isLoading: false });
    } catch (error) {
      setEffects({ ...effects, isLoading: false });
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <h2 className="title"> Change Password</h2>

      <div className="flex justify-between">
        <p className="w-1/2" ref={changePasswordRef}>
          Enter your current password and new password to change your password.
        </p>
        <div className="w-1/2 bg-white p-s2">
          <div>
            {PASSWORD_INPUTS.map((input, i) => (
              <MappedInput
                key={i}
                input={input}
                handleChange={handleChange}
                payload={payload}
                effects={effects}
              />
            ))}
          </div>
          <hr className="my-s4" />
          <div className="w-[210px] flex ml-auto">
            {effects.isLoading ? (
              <Rolling />
            ) : (
              <>
                {/* <Button classes="w-2/5">Cancel</Button> */}
                <Button
                  classes="min-w-max ml-s1.5"
                  onClick={handlePasswordChange}
                >
                  Save Changes
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MappedInput = ({ input, payload, handleChange, effects }) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPass ? "text" : "password"}
        color="success"
        className="w-full my-s2"
        error={
          input.name === "oldPassword"
            ? undefined
            : effects.hasSubmitted &&
              payload.retypePassword !== payload.newPassword &&
              true
        }
        onChange={handleChange}
        {...input}
      />
      <button
        onClick={() => setShowPass(!showPass)}
        className="absolute top-1/2 p-s1 -right-1 -translate-y-1/2 -translate-x-1/2 z-10"
      >
        <Hide />
      </button>
    </div>
  );
};

Profile.getLayout = DashboardLayout;
export default Profile;

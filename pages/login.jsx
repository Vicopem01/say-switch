import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import AuthLayout from "@/layouts/authLayout/authLayout";
import { login } from "@/services";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import Rolling from "@/public/loaders/rolling.svg";
import { emailValidator } from "@/utils/regex";

const Login = () => {
  const router = useRouter();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const [effects, setEffects] = useState({
    isLoading: false,
    hasSubmitted: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setEffects({ ...effects, hasSubmitted: true });
      if (!emailValidator(payload.email)) return;
      setEffects({ ...effects, isLoading: true });
      const res = await login({
        email: payload.email.toLocaleLowerCase(),
        password: payload.password,
      });
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        router.push("/dashboard");
      }
      // setEffects({ ...effects, isLoading: false });
    } catch (error) {
      toast.error("Invalid credentials");
      setEffects({ ...effects, isLoading: false });
    }
  };

  return (
    <div className="text-center w-4/5">
      <h2 className="title mb-s1">Log in to your Account</h2>
      <p className="text-xs text-[#848481] mb-s6">
        Enter your details to access your account
      </p>
      <div className="mb-s2.5">
        <Input
          label="Email Address"
          className="w-full"
          color="success"
          id="email"
          error={effects.hasSubmitted && !emailValidator(payload.email)}
          value={payload.email}
          onChange={(event) =>
            setPayload({ ...payload, email: event.target.value })
          }
        />
      </div>
      <div className="mb-s2.5">
        <Input
          label="Password"
          type="password"
          id="password"
          className="w-full"
          color="success"
          value={payload.password}
          // error={effects.hasSubmitted && payload.password.length < 6}
          onChange={(event) =>
            setPayload({ ...payload, password: event.target.value })
          }
        />
      </div>
      <p className="text-xs text-right">
        Forgot Password?{" "}
        <Link href="/forgot-password" className="text-green">
          Reset here
        </Link>
      </p>
      <div className="mt-s5">
        {effects.isLoading ? (
          <Rolling />
        ) : (
          <Button onClick={handleSubmit}>Log In</Button>
        )}
      </div>
    </div>
  );
};

Login.getLayout = AuthLayout;
export default Login;

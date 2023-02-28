import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import AuthLayout from "@/layouts/authLayout/authLayout";
import { emailValidator } from "@/utils/regex";
import Rolling from "@/public/loaders/rolling.svg";
import { useState } from "react";
import { forgotPassword } from "@/services";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [effects, setEffects] = useState({
    isLoading: false,
    hasSubmitted: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setEffects({ ...effects, hasSubmitted: true });
      if (!emailValidator(email)) return;
      setEffects({ ...effects, isLoading: true });
      const res = await forgotPassword(email.toLocaleLowerCase());
      toast.success("Check email to continue");
      toast.success("Password reset sent successfully");
      console.log(res);
      setEffects({ ...effects, isLoading: false });
    } catch (error) {
      toast.error("Something went wrong");
      setEffects({ ...effects, isLoading: false });
    }
  };
  return (
    <div className="text-center w-4/5">
      <h2 className="title mb-s1">Forgot Password</h2>
      <p className="text-xs text-[#848481] mb-s7">
        Enter your email address and we&#39;ll send a link to reset your
        password
      </p>
      <Input
        label="Email Address"
        className="w-full"
        color="success"
        id="email"
        error={effects.hasSubmitted && !emailValidator(email)}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <div className="mt-s5">
        {effects.isLoading ? (
          <Rolling />
        ) : (
          <Button onClick={handleSubmit}>Send Reset Link</Button>
        )}
      </div>
    </div>
  );
};

ForgotPassword.getLayout = AuthLayout;
export default ForgotPassword;

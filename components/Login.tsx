"use client";
import Card from "@/components/Card";
import Form from "@/components/Form";
import { logInUser } from "@/utils/authUtils";
import Link from "next/link";

interface FormProps {
  toggle: () => void;
}

const Login: React.FC<FormProps> = ({ toggle }) => {
  return (
    <Card>
      <div className="flex flex-col items-center justify-evenly w-full h-full ">
        <p className="text-gray-200 text-xl">
          Don&apos;t have an account? <span onClick={toggle}>Sign up</span>
        </p>
        <Form handler={logInUser}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            maxLength={30}
            size={15}
            className="w-[50%] rounded-md p-2"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength={6}
            maxLength={15}
            size={15}
            className="w-[50%] rounded-md p-2"
          />
        </Form>

        <Link href="/resetPassword" className="text-gray-200 text-sm">
          Reset Password?
        </Link>
      </div>
    </Card>
  );
};

export default Login;

"use client";
import Card from "@/components/Card";
import Form from "@/components/Form";
import { logInUser } from "@/utils/authUtils";

interface FormProps {
  toggle: () => void;
}

const Login: React.FC<FormProps> = ({ toggle }) => {
  return (
    <>
      <h2>Log In</h2>
      <Card>
        <p>
          Don&apos;t have an account? <span onClick={toggle}>Sign up</span>
        </p>
        <Form handler={logInUser}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            maxLength={20}
            size={15}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength={6}
            maxLength={15}
            size={15}
          />
        </Form>
        <p>Reset Password?</p>
      </Card>
    </>
  );
};

export default Login;

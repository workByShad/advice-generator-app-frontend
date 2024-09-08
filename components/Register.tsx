"use client";
import Card from "@/components/Card";
import Form from "@/components/Form";
import { createNewUser } from "@/utils/authUtils";

interface FormProps {
  toggle: () => void;
}

const Register: React.FC<FormProps> = ({ toggle }) => {
  return (
    <Card>
      <p className="text-gray-200 text-2xl">
        Already have an account? <span onClick={toggle}>Log in</span>
      </p>
      <Form handler={createNewUser}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          maxLength={15}
          size={15}
          className="w-[50%] rounded-md p-2"
        />

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
    </Card>
  );
};

export default Register;

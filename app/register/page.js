"use client";
import Card from "@/components/ui/Card";
import Form from "@/components/ui/Form";
import { createNewUser, getCurrentUser } from "@/utils/authUtils";
import { doNothing } from "@/utils/utils";

export default function Register() {
  return (
    <main>
      <h1>Register</h1>
      <Card>
        <Form handler={createNewUser}>
          <label>
            Username:{" "}
            <input
              type="text"
              name="username"
              required
              maxLength={15}
              size="15"
            />
          </label>
          <label>
            Email:{" "}
            <input
              type="email"
              name="email"
              required
              maxLength={15}
              size="15"
            />
          </label>
          <label>
            Password:{" "}
            <input
              type="password"
              name="password"
              required
              minLength={6}
              maxLength={15}
              size="15"
            />
          </label>
        </Form>

        <button onClick={getCurrentUser}>Get current user</button>
      </Card>
    </main>
  );
}

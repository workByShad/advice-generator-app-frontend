"use client";
import Card from "@/components/Card";
import Form from "@/components/Form";
import { addAdvice } from "@/utils/firestoreUtils";
import useFetchUser from "@/hooks/useFetchUser";
import { useState } from "react";
import Register from "@/components/Register";
import Login from "@/components/Login";

export default function Contribute(): React.ReactElement {
  const [isRegistering, setIsRegistering] = useState(false);

  const curUser = useFetchUser();

  if (curUser) {
    return (
      <main>
        <Card>
          <h1 className="text-gray-200 text-3xl">Add an advice</h1>
          <Form handler={addAdvice}>
            <label htmlFor="adviceText" className="text-gray-200 text-xl">
              Enter your advice:
            </label>
            <textarea
              className="rounded-lg w-[25vw] h-[10vh] p-2 resize-none"
              id="adviceText"
              name="adviceText"
            ></textarea>
          </Form>
        </Card>
      </main>
    );
  } else {
    return (
      <main>
        {isRegistering ? (
          <Register toggle={() => setIsRegistering(false)} />
        ) : (
          <Login toggle={() => setIsRegistering(true)} />
        )}
      </main>
    );
  }
}

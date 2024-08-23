"use client";
import Card from "@/components/Card";
import Form from "@/components/Form";
import { addAdvice } from "@/utils/firestoreUtils";
import useFetchUser from "@/hooks/useFetchUser";

export default function Contribute(): React.ReactElement {
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
        <Card>
          <h1>Please Log In.</h1>
        </Card>
      </main>
    );
  }
}

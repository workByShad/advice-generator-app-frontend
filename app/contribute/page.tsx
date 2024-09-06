"use client";
import Card from "@/components/Card";
import Form from "@/components/Form";
import { addAdvice } from "@/utils/firestoreUtils";
import useFetchUser from "@/hooks/useFetchUser";
import { useState } from "react";
import Register from "@/components/Register";
import Login from "@/components/Login";
import SubmissionModal from "@/components/SubmissionModal";

export default function Contribute(): React.ReactElement {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const curUser = useFetchUser();

  // Custom handler for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (document.activeElement) {
      (document.activeElement as HTMLElement).blur();
    }

    const result = await addAdvice(e);
    if (result) {
      setModalMessage("Advice submitted successfully!");
    } else {
      setModalMessage("Error submitting advice.");
    }

    setIsModalVisible(true);

    // Hide modal after 2 seconds
    setTimeout(() => {
      setIsModalVisible(false);

      (document.getElementById("adviceText") as HTMLTextAreaElement).value = "";
    }, 2000);
  };

  if (curUser) {
    return (
      <main>
        <Card>
          <h1 className="text-gray-200 text-3xl">Add an advice</h1>
          <Form handler={handleSubmit}>
            <label htmlFor="adviceText" className="text-gray-200 text-xl">
              Enter your advice:
            </label>
            <textarea
              className="rounded-lg w-[25vw] h-[10vh] p-2 resize-none"
              id="adviceText"
              name="adviceText"
            ></textarea>
          </Form>

          {/* Display the modal */}
          <SubmissionModal message={modalMessage} isVisible={isModalVisible} />
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

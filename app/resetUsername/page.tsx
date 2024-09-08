"use client";
import Card from "@/components/Card";
import Form from "@/components/Form";
import SubmissionModal from "@/components/SubmissionModal";
import { updateUsername } from "@/utils/authUtils";
import { useState } from "react";

export default function ResetUsername(): React.ReactElement {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Custom handler for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (document.activeElement) {
      (document.activeElement as HTMLElement).blur();
    }

    const result = await updateUsername(e);
    if (result) {
      setModalMessage("Username updated!");
    } else {
      setModalMessage("Error updating username.");
    }

    setIsModalVisible(true);

    setTimeout(() => {
      setIsModalVisible(false);

      (document.getElementById("username") as HTMLTextAreaElement).value = "";
    }, 2000);
  };

  return (
    <main>
      <Card>
        <Form handler={handleSubmit}>
          <label htmlFor="username" className="text-gray-200 text-xl">
            Enter your new username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="rounded-lg w-[75%] h-[20%] p-2"
            maxLength={30}
          />
        </Form>
        <SubmissionModal message={modalMessage} isVisible={isModalVisible} />
      </Card>
    </main>
  );
}

"use client";
import Card from "@/components/Card";
import Form from "@/components/Form";
import SubmissionModal from "@/components/SubmissionModal";
import { resetPasswordEmail } from "@/utils/authUtils";
import { useState } from "react";

export default function ResetPassword(): React.ReactElement {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Custom handler for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (document.activeElement) {
      (document.activeElement as HTMLElement).blur();
    }

    const result = await resetPasswordEmail(e);
    if (result) {
      setModalMessage("Password reset email sent!");
    } else {
      setModalMessage("Error sending reset email.");
    }

    setIsModalVisible(true);

    setTimeout(() => {
      setIsModalVisible(false);

      (document.getElementById("email") as HTMLTextAreaElement).value = "";
    }, 2000);
  };

  return (
    <main>
      <Card>
        <Form handler={handleSubmit}>
          <label htmlFor="email" className="text-gray-200 text-xl">
            Enter your email:
          </label>
          <input
            type="text"
            id="email"
            className="rounded-lg w-[75%] h-[20%] p-2"
            maxLength={30}
          />
        </Form>
        <SubmissionModal message={modalMessage} isVisible={isModalVisible} />
      </Card>
    </main>
  );
}

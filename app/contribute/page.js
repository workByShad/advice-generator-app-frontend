"use client";
import Card from "@/components/ui/Card";
import Form from "@/components/ui/Form";
import styles from "./page.module.css";
import { addAdvice } from "@/utils/firestoreUtils";
import { getCurrentUser } from "@/utils/authUtils";

export default function Contribute() {
  return (
    <main>
      <h1>add an advice</h1>
      <Card>
        <Form handler={addAdvice}>
          <label htmlFor="adviceText">Enter your advice:</label>
          <textarea
            className={styles.text}
            id="adviceText"
            name="adviceText"
            rows="3"
            cols="20"
          ></textarea>
        </Form>
        <button onClick={getCurrentUser}>Get current user</button>
      </Card>
    </main>
  );
}

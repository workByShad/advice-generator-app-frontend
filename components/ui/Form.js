"use client";
import { submitHandler } from "@/utils/utils";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="adviceText">Enter your advice:</label>
      <textarea
        className={styles.text}
        id="adviceText"
        name="adviceText"
        rows="3"
        cols="20"
      ></textarea>
      <button className={styles.text} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

"use client";
import styles from "./Form.module.css";

const Form = ({ children, handler }) => {
  return (
    <form className={styles.form} onSubmit={handler}>
      {children}
      <button className={styles.text} type="submit">
        Submit{/* create account or login */}
      </button>
    </form>
  );
};

export default Form;

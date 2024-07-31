import styles from "./Card.module.css";

const Card = ({ children }) => {
  return <div className={`border ${styles.card}`}>{children}</div>;
};

export default Card;

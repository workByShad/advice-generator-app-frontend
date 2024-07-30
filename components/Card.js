import AdviceData from "./AdviceData";
import Divider from "./Divider";
import Dice from "./Dice";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={`border ${styles.card}`}>
      <AdviceData />
      <Divider />
      <Dice />
    </div>
  );
};

export default Card;

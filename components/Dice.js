import Image from "next/image";
import diceLogo from "@/public/images/icon-dice.svg";
import styles from "./Dice.module.css";

const Dice = () => {
  return (
    <div className={styles.dice}>
      <Image src={diceLogo} />
    </div>
  );
};

export default Dice;

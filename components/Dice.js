"use client";
import Image from "next/image";
import diceLogo from "@/public/images/icon-dice.svg";
import styles from "./Dice.module.css";
import { useRouter } from "next/navigation";

const Dice = () => {
  const router = useRouter();

  const refreshPage = () => {
    router.refresh();
  };

  return (
    <div className={styles.dice} onClick={refreshPage}>
      <Image src={diceLogo} alt="A dice" />
    </div>
  );
};

export default Dice;

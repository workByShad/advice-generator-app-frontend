import { getAllAdvice } from "@/utils/firestoreUtils";
import styles from "./AdviceData.module.css";
import { getRandomInt } from "@/utils/utils";

const AdviceID = async () => {
  const allAdvice = await getAllAdvice();

  if (allAdvice?.length > 0) {
    const randomAdvice = allAdvice[getRandomInt(allAdvice.length)];

    return (
      <>
        <h1 className={styles.adviceId}>Advice #{randomAdvice[0]}</h1>
        <p className={styles.adviceText}>"{randomAdvice[1].adviceText}"</p>
      </>
    );
  } else {
    return (
      <>
        <h1 className={styles.adviceId}>Advice #???</h1>
        <p className={styles.adviceText}>"No advice found."</p>
      </>
    );
  }
};

export default AdviceID;

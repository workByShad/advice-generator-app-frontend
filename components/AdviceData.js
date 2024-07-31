import styles from "./AdviceData.module.css";
import { acquireData, getRandomInt } from "@/utils/utils";

const AdviceID = async () => {
  const allAdvice = await acquireData();

  if (allAdvice && allAdvice.documents && allAdvice.documents.length > 0) {
    const randomAdvice =
      allAdvice.documents[getRandomInt(allAdvice.documents.length)];

    return (
      <>
        <h1 className={styles.adviceId}>Advice #{randomAdvice.id}</h1>
        <p className={styles.adviceText}>"{randomAdvice.data.adviceText}"</p>
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

import { DocumentData } from "firebase/firestore";

type Advice = [string, DocumentData];

interface FormProps {
  randomAdvice: Advice | null | [];
}

const AdviceData: React.FC<FormProps> = ({ randomAdvice }) => {
  if (randomAdvice == null || randomAdvice?.length == 0) {
    return (
      <>
        <h1 className="text-[hsl(150,100%,66%)] text-xs tracking-[5px]">
          Advice #???
        </h1>
        <p className="text-[hsl(193,38%,86%)]">&quot;No advice found.&quot;</p>
      </>
    );
  } else {
    return (
      <>
        <h1 className="text-[hsl(150,100%,66%)] text-xs tracking-[5px]">
          Advice #{randomAdvice[0]}
        </h1>
        <p className="text-[hsl(193,38%,86%)]">
          &quot;{randomAdvice[1].adviceText}&quot;
        </p>
      </>
    );
  }
};

export default AdviceData;

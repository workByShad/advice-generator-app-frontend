import { DocumentData } from "firebase/firestore";

type Advice = [string, DocumentData];

interface FormProps {
  randomAdvice: Advice | null | [];
}

const AdviceData: React.FC<FormProps> = ({ randomAdvice }) => {
  if (randomAdvice == null || randomAdvice?.length == 0) {
    return (
      <>
        <h1 className="text-[hsl(150,100%,66%)] tracking-[4px] font-medium">
          Advice #???
        </h1>
        <p className="text-gray-200 font-semibold text-3xl text-center">
          &quot;No advice found.&quot;
        </p>
      </>
    );
  } else {
    return (
      <>
        <h1 className="text-[hsl(150,100%,66%)] tracking-[4px] font-medium">
          Advice #{randomAdvice[0]}
        </h1>
        <p className="text-gray-200 font-semibold text-3xl text-center">
          &quot;{randomAdvice[1].adviceText}&quot;
        </p>
      </>
    );
  }
};

export default AdviceData;

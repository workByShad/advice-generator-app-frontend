"use client";
import Image from "next/image";
import diceLogo from "@/public/images/icon-dice.svg";
import { getRandomInt } from "@/utils/utils";
import { DocumentData } from "firebase/firestore";

type Advice = [string, DocumentData];

interface FormProps {
  setRandomAdvice: React.Dispatch<React.SetStateAction<Advice | null>>;
  allAdvice: Advice[];
}

const Dice: React.FC<FormProps> = ({ setRandomAdvice, allAdvice }) => {
  const clickHandler = (allAdvice: Advice[]) => {
    if (allAdvice.length > 0) {
      setRandomAdvice(allAdvice[getRandomInt(allAdvice.length)]);
    }
  };

  return (
    <div
      className="bg-[hsl(150,100%,66%)] flex items-center justify-center h-[60px] w-[60px] rounded-full absolute mt-[42vh] hover:shadow-[0px_0px_30px_hsl(150,100%,66%)] transition-shadow duration-300"
      onClick={() => clickHandler(allAdvice)}
    >
      <Image src={diceLogo} alt="A dice" priority />
    </div>
  );
};

export default Dice;

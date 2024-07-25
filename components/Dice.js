import Image from "next/image";
import diceLogo from "@/public/images/icon-dice.svg";

const Dice = () => {
  return (
    <div className="dice">
      <Image src={diceLogo} />
    </div>
  );
};

export default Dice;

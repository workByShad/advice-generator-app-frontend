import AdviceID from "./AdviceID";
import AdviceText from "./AdviceText";
import Divider from "./Divider";
import Dice from "./Dice";

const Card = () => {
  return (
    <div className="border card">
      <AdviceID />
      <AdviceText />
      <Divider />
      <Dice />
    </div>
  );
};

export default Card;

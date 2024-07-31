import Card from "@/components/ui/Card";
import AdviceData from "../components/AdviceData";
import Divider from "../components/Divider";
import Dice from "../components/Dice";

export default function Home() {
  return (
    <main>
      <Card>
        <AdviceData />
        <Divider />
        <Dice />
      </Card>
    </main>
  );
}

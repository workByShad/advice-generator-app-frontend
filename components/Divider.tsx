import Image from "next/image";
import desktopDivider from "@/public/images/pattern-divider-desktop.svg";

const Divider: React.FC = () => {
  return <Image src={desktopDivider} alt="A page divider" priority />;
};

export default Divider;

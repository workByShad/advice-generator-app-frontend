import Image from "next/image";
import desktopDivider from "@/public/images/pattern-divider-desktop.svg";

const Divider = () => {
  return <Image src={desktopDivider} alt="A page divider" />;
};

export default Divider;

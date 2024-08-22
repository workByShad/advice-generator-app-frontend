import { DocumentData } from "firebase/firestore";
import Link from "next/link";

// type Advice = [string, DocumentData];

interface FormProps {
  option: string;
  //   allAdvice: Advice[];
}

const DashboardBox: React.FC<FormProps> = ({ option }) => {
  if (option == "advices") {
    return (
      <div className="w-[10vw] h-[10vh] border-4 border-red-500">
        <Link
          href="/dashboard/advices"
          className="w-full h-full flex justify-center items-center text-gray-200 text-4xl"
        >
          35
        </Link>
      </div>
    );
  } else if (option == "profile") {
    return (
      <div className="w-[10vw] h-[10vh] border-4 border-red-500">
        <Link
          href="/dashboard/profile"
          className="w-full h-full flex justify-center items-center text-gray-200 text-4xl"
        >
          Profile
        </Link>
      </div>
    );
  } else {
    return <></>;
  }
};

export default DashboardBox;

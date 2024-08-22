import Link from "next/link";
import DashboardBox from "./DashboardBox";

const DashboardCard: React.FC = () => {
  return (
    <main className="bg-[hsl(217,19%,24%)] flex flex-col justify-evenly items-center w-[70vw] h-[70vh] rounded-2xl border-4 border-red-500">
      <h1 className="text-3xl text-gray-200 border-4 border-red-500">
        Dashboard
      </h1>

      <h2 className="text-lg text-gray-200 border-4 border-red-500">
        Welcome to the Dashboard!
      </h2>

      <div className="flex flex-row justify-evenly items-center w-[60vw] h-[50vh] border-4 border-red-500">
        <div className="flex flex-col justify-evenly items-center w-[15vw] h-[25vh] border-4 border-red-500">
          <h3 className="text-gray-200">Your Advices:</h3>
          <DashboardBox option="advices" />
        </div>

        <div className="flex flex-col justify-evenly items-center w-[15vw] h-[25vh] border-4 border-red-500">
          <h3 className="text-gray-200">Profile:</h3>
          <DashboardBox option="profile" />
        </div>
      </div>
    </main>
  );
};

export default DashboardCard;

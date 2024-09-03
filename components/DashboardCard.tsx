import Link from "next/link";
import { signOutUser } from "@/utils/authUtils";

const DashboardCard: React.FC = () => {
  return (
    <main className="bg-[hsl(217,19%,24%)] flex flex-col justify-evenly items-center w-[60vw] h-[70vh] rounded-2xl">
      <h1 className="text-3xl text-gray-200">Dashboard</h1>

      <h2 className="text-lg text-gray-200">Welcome to the Dashboard!</h2>

      <div className="flex flex-row justify-evenly items-center w-[50vw] h-[50vh] bg-gray-900 rounded-2xl">
        <div className="flex flex-col justify-evenly items-center w-[15vw] h-[25vh] bg-[hsl(217,19%,24%)] rounded-2xl">
          <h3 className="text-gray-200">Your Advices:</h3>
          <div className="w-[7vw] h-[7vh] rounded-2xl text-gray-200 bg-gray-800 hover:bg-gray-600 hover:text-gray-100 transition-colors">
            <Link
              href="/dashboard/advices"
              className="w-full h-full flex justify-center items-center text-gray-200 text-xl"
            >
              View
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-evenly items-center w-[15vw] h-[25vh] bg-[hsl(217,19%,24%)] rounded-2xl">
          <h3 className="text-gray-200">Profile:</h3>
          <div className="w-[7vw] h-[7vh] rounded-2xl text-gray-200 bg-gray-800 hover:bg-gray-600 hover:text-gray-100 transition-colors">
            <Link
              href="/dashboard/profile"
              className="w-full h-full flex justify-center items-center text-gray-200 text-xl"
            >
              View
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={signOutUser}
        className="text-lg py-2 px-2 rounded text-gray-200 bg-gray-800 hover:bg-gray-600 hover:text-gray-100 transition-colors"
      >
        sign out
      </button>
    </main>
  );
};

export default DashboardCard;

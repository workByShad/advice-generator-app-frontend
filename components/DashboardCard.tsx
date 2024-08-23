import Link from "next/link";
import { signOutUser } from "@/utils/authUtils";

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
          <div className="w-[10vw] h-[10vh] border-4 border-red-500">
            <Link
              href="/dashboard/advices"
              className="w-full h-full flex justify-center items-center text-gray-200 text-xl"
            >
              View
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-evenly items-center w-[15vw] h-[25vh] border-4 border-red-500">
          <h3 className="text-gray-200">Profile:</h3>
          <div className="w-[10vw] h-[10vh] border-4 border-red-500">
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

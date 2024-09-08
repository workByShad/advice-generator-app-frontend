"use client";
import Card from "@/components/Card";
import useFetchUser from "@/hooks/useFetchUser";
import Link from "next/link";

export default function Profile(): React.ReactElement {
  const curUser = useFetchUser();

  if (curUser) {
    return (
      <main>
        <Card>
          <h1 className="text-gray-200 text-3xl">Your Profile:</h1>

          <div className="flex flex-col justify-evenly items-start w-full h-[50%]">
            <div className="flex flex-row items-center justify-between h-[28%] px-4 rounded-lg w-full  bg-gray-800 hover:shadow-[0px_0px_10px_#6788B8] transition-shadow duration-200">
              <p className="text-gray-200 text-lg">
                Username: {curUser.displayName}
              </p>

              <Link
                href="/resetUsername"
                className="text-sm py-1 px-2 rounded text-gray-200 bg-gray-900 hover:bg-gray-600 hover:text-yellow-400 transition-all"
              >
                Edit
              </Link>
            </div>

            <div className="flex flex-row items-center justify-between h-[28%] px-4 rounded-lg w-full  bg-gray-800 hover:shadow-[0px_0px_10px_#6788B8] transition-shadow duration-200">
              <p className="text-gray-200 text-lg">Email: {curUser.email}</p>

              <Link
                href="/deleteAccount"
                className="text-sm p-1 rounded text-gray-200 bg-gray-900 hover:bg-gray-600 hover:text-red-400 transition-all"
              >
                Delete
              </Link>
            </div>

            <Link href="/resetPassword" className="text-gray-200 text-sm mt-2">
              Reset Password?
            </Link>
          </div>
        </Card>
      </main>
    );
  } else {
    return (
      <main>
        <Card>
          <h1>Please Log In.</h1>
        </Card>
      </main>
    );
  }
}

"use client";
import Card from "@/components/Card";
import useFetchUser from "@/hooks/useFetchUser";

export default function Profile(): React.ReactElement {
  const curUser = useFetchUser();

  if (curUser) {
    return (
      <main>
        <Card>
          <div className="flex flex-col justify-evenly items-start w-full h-full border-4 border-red-500">
            <h1 className="text-gray-200 text-3xl">Your Profile:</h1>
            <div className="flex flex-col justify-evenly items-start w-full h-[50%] border-4 border-red-500">
              <p className="text-gray-200 text-lg">
                Username: {curUser.displayName}
              </p>
              <p className="text-gray-200 text-lg">Email: {curUser.email}</p>
              <p className="text-gray-200 text-lg">User ID: {curUser.uid}</p>
            </div>
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

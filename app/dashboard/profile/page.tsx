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
            <p className="text-gray-200 text-lg">
              Username: {curUser.displayName}
            </p>
            <p className="text-gray-200 text-lg">Email: {curUser.email}</p>
            <Link href="/reset" className="text-gray-200 text-lg">
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

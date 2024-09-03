"use client";
import Card from "@/components/Card";
import useFetchUser from "@/hooks/useFetchUser";
import { getAllAdviceByUser } from "@/utils/firestoreUtils";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Advices(): React.ReactElement {
  const curUser = useFetchUser();

  const [allAdviceByUser, setAllAdviceByUser] = useState<
    null | [string, DocumentData][]
  >([]);

  useEffect(() => {
    const fetchAdvices = async () => {
      // Fetch the advices only if the user is available

      if (curUser) {
        try {
          const adviceData = await getAllAdviceByUser(curUser.uid);
          setAllAdviceByUser(adviceData);

          console.log(adviceData);
        } catch (error) {
          console.error("Failed to fetch advice data:", error);
        }
      }
    };

    fetchAdvices();
  }, [curUser]);

  const checkLoading = () => {
    if (allAdviceByUser?.length == 0) {
      return <p>Loading...</p>;
    } else if (allAdviceByUser == null) {
      return <p>No advice found.</p>;
    } else {
      return allAdviceByUser.map((advice) => (
        <p className="text-gray-200 text-lg" key={advice[0]}>
          {advice[1].adviceText}
        </p>
      ));
    }
  };

  if (curUser) {
    return (
      <main>
        <Card>
          <h1 className="text-gray-200 text-3xl">Your advices:</h1>
          <div className="flex flex-col items-start justify-evenly w-full h-[50%]">
            {checkLoading()}
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

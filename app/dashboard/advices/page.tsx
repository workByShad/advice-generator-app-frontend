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
  >(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (curUser) {
      // Fetch the advices only if the user is available
      const fetchAdvices = async () => {
        try {
          const adviceData = await getAllAdviceByUser(curUser.uid);
          setAllAdviceByUser(adviceData);
        } catch (error) {
          console.error("Failed to fetch advice data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchAdvices();
    } else {
      setLoading(false);
    }
  }, [curUser]);

  // const allAdviceByUser = getAllAdviceByUser(curUser?.uid);

  if (curUser) {
    return (
      <main>
        <Card>
          <h1 className="text-gray-200 text-3xl">Your advices:</h1>
          <div className="flex flex-col items-start justify-evenly w-full h-[50%]">
            {allAdviceByUser ? (
              allAdviceByUser.map((advice) => (
                <p className="text-gray-200 text-lg" key={advice[0]}>
                  {advice[1].adviceText}
                </p>
              ))
            ) : (
              <p>No advice found.</p>
            )}
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

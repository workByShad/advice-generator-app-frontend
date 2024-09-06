"use client";
import Card from "@/components/Card";
import UserAdviceItem from "@/components/UserAdviceItem";
import useFetchUser from "@/hooks/useFetchUser";
import { deleteAdvice, getAllAdviceByUser } from "@/utils/firestoreUtils";
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

  // New function to handle deletion and update state
  const handleDelete = async (adviceId: string) => {
    try {
      await deleteAdvice(adviceId); // Delete advice from Firestore
      // Update the state by removing the deleted advice from the list
      setAllAdviceByUser((prevAdvices) => {
        const updatedAdvices =
          prevAdvices?.filter(([id]) => id !== adviceId) || [];
        // If the updated array is empty, set to null, otherwise use the updated array
        return updatedAdvices.length > 0 ? updatedAdvices : null;
      });
    } catch (error) {
      console.error("Failed to delete advice:", error);
    }
  };

  const checkLoading = () => {
    if (allAdviceByUser?.length == 0) {
      return <p>Loading...</p>;
    } else if (allAdviceByUser == null) {
      return <p>No advice found.</p>;
    } else {
      return allAdviceByUser.map((advice) => (
        <UserAdviceItem
          key={advice[0]}
          advice={advice}
          onDelete={handleDelete}
        />
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

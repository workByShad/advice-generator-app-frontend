"use client";
import Card from "@/components/Card";
import AdviceData from "@/components/AdviceData";
import Divider from "@/components/Divider";
import Dice from "@/components/Dice";
import { useEffect, useState } from "react";
import { getAllAdvice } from "@/utils/firestoreUtils";
import { getRandomInt } from "@/utils/utils";
import { DocumentData } from "firebase/firestore";

type Advice = [string, DocumentData];

export default function Home(): React.ReactElement {
  const [allAdvice, setAllAdvice] = useState<Advice[]>([]);

  const [randomAdvice, setRandomAdvice] = useState<Advice | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAdvice = async () => {
      setIsLoading(true);

      // Get all advice from db (either an empty array or an array of arrays)
      // and pass it to the correct state
      const fetchedAdvice: Advice[] = await getAllAdvice();
      setAllAdvice(fetchedAdvice);

      // If advice is fetched, pick a random piece
      if (fetchedAdvice.length > 0) {
        const randomIndex = getRandomInt(fetchedAdvice.length);
        setRandomAdvice(fetchedAdvice[randomIndex]);
      }

      setIsLoading(false);
    };

    fetchAdvice();
  }, []);

  return (
    <main className="border-4 border-red-600 box-border">
      <Card>
        {isLoading ? (
          <>
            <p>Fetching Advice</p>
            <p>Loading...</p>
          </>
        ) : (
          <AdviceData randomAdvice={randomAdvice} />
        )}
        <Divider />
        <Dice setRandomAdvice={setRandomAdvice} allAdvice={allAdvice} />
      </Card>
    </main>
  );
}

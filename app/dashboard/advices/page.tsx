"use client";
import Card from "@/components/Card";
import useFetchUser from "@/hooks/useFetchUser";

export default function Advices(): React.ReactElement {
  const curUser = useFetchUser();

  if (curUser) {
    return (
      <main>
        <Card>
          <p>your advices</p>
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

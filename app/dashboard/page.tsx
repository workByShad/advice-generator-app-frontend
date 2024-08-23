"use client";
import Register from "@/components/Register";
import Login from "@/components/Login";
import { useState } from "react";
import DashboardCard from "@/components/DashboardCard";
import useFetchUser from "@/hooks/useFetchUser";

export default function Dashboard(): React.ReactElement {
  const [isRegistering, setIsRegistering] = useState(false);

  const curUser = useFetchUser();

  if (curUser) {
    return <DashboardCard />;
  } else {
    return (
      <main>
        {isRegistering ? (
          <Register toggle={() => setIsRegistering(false)} />
        ) : (
          <Login toggle={() => setIsRegistering(true)} />
        )}
      </main>
    );
  }
}

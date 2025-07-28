"use server";

import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();
  //console.log("User object:", user);


  return (
    <>
      <h3>Interview Generation</h3>
      <Agent
        userName={user?.name|| "guest"}
        userId={user?.id}
        type="generate"
      />
    </>
  );
};

export default Page;

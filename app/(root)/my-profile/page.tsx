import { signOut } from "@/auth";
import Booklist from "@/components/Booklist";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className="mb-10"
      >
        <Button>Logout</Button>
      </form>

      <Booklist title="Borrowed Books" books={sampleBooks} />
    </>
  );
};

export default Page;

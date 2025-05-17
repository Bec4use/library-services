import React from "react";

const Page = () => {
  return (
    <main className="root-container flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bebas-neue text-5xl font-bold text-light-100">
        Whoa, Slow Down There , Speedy!
      </h1>
      <p className="mt-3 max-w-xl text-center text-light-400 font-bebas-neue">
        Looks like you've been making requests a little too quickly. Please wait
        a moment and try again.
      </p>
    </main>
  );
};

export default Page;

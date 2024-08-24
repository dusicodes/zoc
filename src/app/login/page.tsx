import React from "react";
import AuthButtons from "../components/AuthButtons";

function LoginPage() {
  return (
    <div className="h-screen w-full flex flex-row items-center justify-center ">
      <section className=" w-1/2 flex  items-center justify-center">
        <h1 className="text-5xl font-black ">ZOC 👋🏽</h1>
      </section>
      <section className="flex flex-col w-1/2 gap-4 items-center justify-center">
        <h1 className="text-xl font-black ">Log in to get started</h1>
        <AuthButtons />
      </section>
    </div>
  );
}

export default LoginPage;

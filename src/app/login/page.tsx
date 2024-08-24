import React from "react";
import AuthButtons from "../components/AuthButtons";

function LoginPage() {
  return (
    <div className="h-screen w-full flex flex-row items-center justify-center ">
      <section className=" h-screen w-1/2 flex  items-center justify-center">
        <h1 className="text-5xl font-black ">ZOC 👋🏽</h1>
      </section>
      <section className=" flex justify-center  w-1/2">
        <AuthButtons />
      </section>
    </div>
  );
}

export default LoginPage;

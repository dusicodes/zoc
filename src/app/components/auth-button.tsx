"use client";
import { Button } from "@nextui-org/button";

import React from "react";
import { oAuthSignOut } from "../actions/oAuthSignIn";
import { redirect } from "next/navigation";

export default function AuthButton({ session }: { session: boolean }) {
  return (
    <>
      <Button
        onClick={async () => {
          if (session) {
            return await oAuthSignOut();
          }
          redirect("/login");
        }}
      >
        {session ? "Sign Out" : "Sign In"}
      </Button>
    </>
  );
}

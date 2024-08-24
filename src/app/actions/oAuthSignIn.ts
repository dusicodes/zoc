"use server";
import React from "react";
import { createClient } from "@/app/utils/supabase/server";
import type { Provider } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
export default async function oAuthSignIn({
  provider,
}: {
  provider: Provider;
}) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
    },
  });

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
}

export async function oAuthSignOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/");
}

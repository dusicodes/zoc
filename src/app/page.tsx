import { redirect } from "next/navigation";
import { createClient } from "./utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const { data: posts, error } = await supabase.from("posts").select();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user === null) {
    redirect("/login");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(posts, null, 2)}
    </main>
  );
}

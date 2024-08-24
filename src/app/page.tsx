import { redirect } from "next/navigation";
import { createClient } from "./utils/supabase/server";
import AuthButtons from "./components/AuthButtons";
import { Button } from "@nextui-org/react";
import { oAuthSignOut } from "./actions/oAuthSignIn";
import AuthButton from "./components/auth-button";
import PostCard from "./components/PostCard";
import type { Post } from "./types/posts";

export default async function Home() {
  const supabase = createClient();
  const { data: posts, error } = await supabase
    .from("posts")
    .select("created_at, title, users(name, avatar_url, user_name)");
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const session = user !== null ? true : false;
  if (session === false) {
    redirect("/login");
  }
  return (
    <main className="flex flex-col items-center justify-center m-10 gap-4 ">
      <AuthButton session={session} />

      {posts?.map((post) => (
        <PostCard
          key={post.title}
          avatar_url={post.users.avatar_url}
          name={post.users.name}
          username={post.users.user_name}
          title={post.title}
        />
      ))}
    </main>
  );
}

import Link from "next/link";

export const Navigation = () => {
  return (
    <nav>
      <Link className="" href={"/"}>
        Home
      </Link>
      <Link href={"/habits"}>Habits</Link>
      <Link href={"/login"}>Login</Link>
      <Link href={"/registration"}>Registration</Link>
    </nav>
  );
};

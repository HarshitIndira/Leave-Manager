import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <h1>User Homepage</h1>
      <Link href="/">
        <button>Logout</button>
      </Link>
    </>
  );
}

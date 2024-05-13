'use client';
import { useRouter } from "next/navigation";
export default function Homepage() {
  const router = useRouter();

  const handlelogout = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/users/logout", {
        email,
        password,
      });
      if (response.status === 200) {
        router.push("/"); // Redirect to dashboard or any protected route
      }
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setLoading(false); // Set loading back to false after authentication process completes
    }
  };

  return (
    <>
      <h1>User Homepage</h1>
      <button onClick={handlelogout}>Logout</button>
    </>
  );
}

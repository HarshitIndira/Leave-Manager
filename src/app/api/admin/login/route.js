import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import pool from "../../../../dbconfig/dbconfig";
import { setCookie, destroyCookie } from "nookies";

export async function POST(req, res) {

  const requestBody = await req.json();
  const { email, password } = requestBody;
  console.log(email);
  try {
    console.log("Inside try block");
    // Query the database to find user by email
    const [user] = await pool.query("SELECT * FROM admin WHERE email = ?", [
      email,
    ]);

    console.log(user);
    if (user.length === 0) {
      console.log("User not found");
      return new Response(
        JSON.stringify({
          message: "User not found with this email",
        }),
        {
          status: "404",
        }
      );
    }

    // Check if password is valid
    const isPasswordValid = await compare(password, user[0].password);
    if (!isPasswordValid) {
      console.log("Wrong password");
      return new Response(
        JSON.stringify({
          message: "Wrong Password",
        }),
        {
          status: "401",
        }
      );
    }
    console.log("Password code executed");
    // User authenticated, generate JWT token
    const token = sign({ username: user[0].name }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("TOken created");

    setCookie(res, "loginCookie", token, {
      httpOnly: true,
      maxAge: 3600, // 1 hour expiry
      sameSite: "lax",
      path: "/",
    });

    return new Response(
      JSON.stringify({
        message: "Login SuccessFull",
      }),
      {
        status: "200",
      }
    );
  } catch (error) {
    console.error("Error logging in:", error);
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
      }),
      {
        status: "500",
      }
    );
  }
}

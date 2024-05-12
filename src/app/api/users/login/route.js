// import { compare } from "bcryptjs";
// import { sign } from "jsonwebtoken";
// import pool from "../../../../dbconfig/dbconfig";
// import { serialize } from "cookie";

// export async function POST(req, resp) {
//   const requestBody = await req.json();
//   const { email, password } = requestBody;
//   console.log(email);
//   try {
//     console.log("Inside try block");
//     const [user] = await pool.query("SELECT * FROM users WHERE email = ?", [
//       email,
//     ]);
//     if (user.length === 0) {
//       console.log("User not found");
//       return new Response(
//         JSON.stringify({
//           message: "User not found",
//         }),
//         {
//           status: 404,
//         }
//       );
//     }

//     const isPasswordValid = await compare(password, user[0].password);
//     if (!isPasswordValid) {
//       console.log("Wrong password");
//       return new Response(
//         JSON.stringify({
//           message: "Incorrect Password",
//         }),
//         {
//           status: 401,
//         }
//       );
//     }

//     // User authenticated, generate JWT token
//     const token = sign({ userId: user[0].id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     // Set up session cookie
//     const cookieOptions = {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "strict",
//       maxAge: 3600, // 1 hour expiration
//       path: "/", // Cookie accessible from all routes
//     };
//     resp.setHeader("Set-Cookie", serialize("token", token, cookieOptions));

//     return new Response(
//       JSON.stringify({
//         message: "Login Successful",
//       }),
//       {
//         status: 200,
//       }
//     );
//   } catch (error) {
//     console.error("Error logging in:", error);
//     return new Response(
//       JSON.stringify({
//         message: "Internal Server Error",
//       }),
//       {
//         status: 500,
//       }
//     );
//   }
// }
// Import necessary modules
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import pool from "../../../../dbconfig/dbconfig";
import { serialize } from "cookie";


// Export the POST handler function
export async function POST(req, res) {
  // Extract request body
  const requestBody = await req.json();
  const { email, password } = requestBody;
  console.log(email);
  try {
    console.log("Inside try block");
    // Query the database to find user by email
    const [user] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    console.log(user);
    // Check if user exists
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

    
    // setCookie({ res }, "sessionToken", token, {
    //   httpOnly: true,
    //   maxAge: 3600, // 1 hour in seconds
    //   path: "/", // Cookie accessible from all paths
    //   sameSite: "strict", // Prevent CSRF attacks
    // });

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

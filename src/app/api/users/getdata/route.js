import pool from "../../../../dbconfig/dbconfig";

export async function GET(req, res) {
    try {
        const users = await pool.query('SELECT * FROM users');
        console.log(users);
        console.log("Response sended")
        return new Response(
            JSON.stringify({
                message: "Data fetched successfully",
                users: users
            }),
            {
                status: "200",
            }
        );

    } catch (error) {
        console.error('Error fetching users:', error);
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

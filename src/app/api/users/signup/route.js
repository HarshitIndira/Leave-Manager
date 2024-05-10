import pool from "../../../../dbconfig/dbconfig"

export default async function Signup(req, resp) {
    try {
        const { name, mobile, email, password } = req.body;
        const result = await pool.query('INSERT INTO users (name, mobile,email,password) VALUES (?,?,?,?)', [name, mobile, email, password]);

        resp.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.log("Error in creating user");
        resp.status(500).json({ message: "Internal Server Error while creating new user" })
    }

}
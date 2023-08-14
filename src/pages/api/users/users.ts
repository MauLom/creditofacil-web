import clientPromise from "../../../lib/mongodb";

export default async function getUsers(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("CreditoFacil");
        // const { title, content } = req.body;

        const users = await db.collection("Users").find({}).toArray()

        res.json(users);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};
import clientPromise from "../../../lib/mongodb";
import AES from 'crypto-js/aes';
import { enc } from 'crypto-js';
import getUserWithCredentials from "../../../lib/getUserWithCredential";

export default async function one(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("CreditoFacil");

        switch (req.method) {
            case "GET":
                try {
                    const { credentials } = req.query;
                    getUserWithCredentials(credentials)
                    res.json({ok:"ok"})
                    // const user = { name: credentialsDec?.userName, password: credentialsDec?.pass }
                    // const result = await db.collection("Users").find(user).toArray()
                    // if (result.length <= 0) {
                    //     res.json({ status: "error", message: "User not found" })
                    // } else {
                    //     res.json({ status: "ok", data: result[0] });
                    // }
                } catch (e) {
                    console.error(e);
                    throw new Error(e).message;
                }
                break;
            case "POST":
                try {
                    const { userName, password, role } = req.body
                    const passEncrypted = AES.encrypt(password, "CreditoFacil")
                    const result = await db.collection("Users").insertOne({ name: userName, createdAt: Date.now(), role: role, password: passEncrypted.toString(enc.Utf8) })
                    res.json({ message: result })
                } catch (e) {
                    console.error(e);
                    throw new Error(e).message;
                }
                break;
        }

    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};
import clientPromise from "./mongodb";
import AES from 'crypto-js/aes';
import { enc } from 'crypto-js';

export default async function getUserWithCredentials(data) {
    const client = await clientPromise;
    const db = client.db("CreditoFacil");
    const decodedStr = decodeURIComponent(data);
    const credentialsDec = JSON.parse(AES.decrypt(decodedStr, 'CreditoFacil').toString(enc.Utf8));
    const user = { name: credentialsDec?.username, password: credentialsDec?.password }
    const result = await db.collection("Users").find(user).toArray()
    if (result.length <= 0) {
        return { message: "User not found" }
    } else {
        result[0].password =  "..."
        return result[0];
    }
}
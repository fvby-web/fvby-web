import { connectToDatabase } from "./db";

async function main() {
  const db = await connectToDatabase();
  const usuarios = await db.collection("usuarios").find().toArray();
  console.log("Usuarios:", usuarios);
}

main();


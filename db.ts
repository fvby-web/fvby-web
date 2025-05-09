import { MongoClient } from "mongodb";

const uri = "mongodb+srv://kratosroman456:Hola123@cluster0.thxlr.mongodb.net/"; // Cambia por tu URI
const client = new MongoClient(uri);

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Conectado a MongoDB");
    const db = client.db("db1"); // Cambia por el nombre de tu base
    return db;
  } catch (error) {
    console.error("Error al conectar a MongoDB", error);
    throw error;
  }
}


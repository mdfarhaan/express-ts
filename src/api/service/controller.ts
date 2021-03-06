import db from "../../shared/database/db";

export const readData = async () => {
  const collection = (await db()).collection("codes");
  const data = await collection.find().toArray();
  return data;
};

export const addData = async () => {
  const collection = (await db()).collection("codes");
  try {
    await collection.insertOne({
      user: "Raymond",
    });
    return { status: 200, message: "success" };
  } catch (err) {
    return { status: 500, message: err.message };
  }
};

import axios from "axios";
const url = "http://localhost:3000/motoGPAccessories";

export async function getData() {
  const res = await axios.get(url)
  return res.data;

}
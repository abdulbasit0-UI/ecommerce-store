import { Billboard } from "../types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillBoards = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${url}/${id}`);
  console.log(res);

  return res.json();
};

export default getBillBoards;

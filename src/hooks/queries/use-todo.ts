import axios from "~utils/axios";
import { useQuery, UseQueryResult } from "react-query";

interface ResponseTodo {
  id: string;
  title: string;
  completed: boolean;
}

const useQueryTodo = (): UseQueryResult<ResponseTodo[], Error> => {
  const endpoint = "/todos";
  const baseURL = "https://jsonplaceholder.typicode.com";
  return useQuery("todos", async () => {
    const { data } = await axios.get<ResponseTodo[]>(endpoint, { baseURL });
    return data;
  });
};

export { useQueryTodo };
export default useQueryTodo;
export type { ResponseTodo };

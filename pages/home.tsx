import type { NextPage } from 'next'
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchTodo = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return data;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
}

interface ResponseTodo {
  data: Todo[],
  isLoading?: boolean
}

const Homepage: NextPage = () => {
  const { data, isLoading } = useQuery('todo', fetchTodo);
  if (isLoading) return <div>Loading...</div>
  return (
    <>
      {data && data.map(({ id, title }: any, index: number) => {
        return (
          <div key={index}>
            <div>{id}</div>
            <p>{title}</p>
          </div>
        )
      })}
    </>
  )
}

export default Homepage;

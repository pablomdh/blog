import useSWR from 'swr';
import axios from 'axios';
import useDebounce from './useDebounce';
//import { SWRConfig } from 'swr';

export default function SWRPosts({ search }) {
  const debouncedSearch = useDebounce(search, 1000);
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(() => debouncedSearch ? `https://jsonplaceholder.typicode.com/posts?userId=${debouncedSearch}` : 'https://jsonplaceholder.typicode.com/posts', fetcher)
  if (error) return <div>Request Failed</div>;
  if (!data) return <div>Loading...</div>;

  return (
    data.length > 0 ?
      data.map(({ userId, id, title, body }) => (
        <div key={id} className='card'>
          <h1>{title}</h1>
          <p>{body}</p>
          <br />
          <p className='author text-gray-500 text-end text-xs'>Author: {userId}</p>
        </div>
      ))
      : <div><p className='text-center m-4 font-bold text-gray-500'>There is no author with this id!</p></div>
  );
}
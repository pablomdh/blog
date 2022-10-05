import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import useDebounce from '../lib/useDebounce';
import { SWRConfig } from 'swr';

export default function Component() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 1000);

  const handleOnChange = (event) => {
    const { value } = event.currentTarget
    setSearch(value)
  }

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);
  if (error) return <div>Request Failed</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>Posts</title>
        <meta name="posts" content="Posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div>
          <input id="search" type="text" placeholder="Search"
            onChange={handleOnChange}
          ></input>
        </div>
        <div>
          <h1 className='text-3xl font-bold text-center my-3'>SWR Posts</h1>
          {
            data.map(({ userId, id, title, body }) => (
              <div key={id} className='card'>
                <h1>{title}</h1>
                <p>{body}</p>
                <br />
                <p className='author text-gray-500 text-end text-xs'>Author: {userId}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
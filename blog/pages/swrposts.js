import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import SWRPosts from '../lib/getSwrPosts';

export default function Page() {
  const [search, setSearch] = useState('');

  const handleOnChange = (event) => {
    const { value } = event.currentTarget
    setSearch(value)
  }

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
          <SWRPosts search = {search}/>
        </div>
      </section>
    </div>
  );
}
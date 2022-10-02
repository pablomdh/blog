import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import useDebounce from '../lib/useDebounce';

export const fetcher = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return data
}

export default function Posts() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filteredBlogPosts, setFilteredBlogPosts] = useState([]);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(() => {
    if (debouncedSearch.length)
      setFilteredBlogPosts(blogPosts.filter(post => post.userId == debouncedSearch))
    else setFilteredBlogPosts(blogPosts)
  }, [debouncedSearch, blogPosts])

  const getPosts = async () => {
    const posts = await fetcher()
    setBlogPosts(posts)
  }

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
          <h1 className='text-3xl font-bold text-center my-3'>Posts</h1>
          <ul>
            {filteredBlogPosts.length ?
              filteredBlogPosts.map(({ userId, id, title, body }) => (
                <div key={id} className='card'>
                  <h1>{title}</h1>
                  <p>{body}</p>
                  <br />
                  <p className='author text-gray-500 text-end text-xs'>Author: {userId}</p>
                </div>
              ))
              : <div><p className='text-center m-4 font-bold text-gray-500'>There is no author with this id!</p></div>
            }
          </ul>
        </div>
      </section>
    </div>
  )
}

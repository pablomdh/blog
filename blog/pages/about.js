import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="about" content="Information used for the project." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          About
        </h1>
        <p>To create this blog the following sites were consulted:</p>
        <div>
          <ul>
            <li className='links'><a href='https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website' target='_blank' rel='noreferrer'>Next.Js Learning Path</a></li>
            <li className='links'><a href='https://tailwindcss.com/docs/installation' target='_blank' rel='noreferrer'>Get started with Tailwind CSS</a></li>
            <li className='links'><a href='https://www.youtube.com/watch?v=vu9gPcPs3mY&ab_channel=HarryWolff' target='_blank' rel='noreferrer'>How To Build A Blog With Next.js And Tailwind. (Part 1 and 2) by Harry Wolff</a></li>
            <li className='links'><a href='https://swr.vercel.app/docs/getting-started' target='_blank' rel='noreferrer'>SWR Getting Started</a></li>
            <li className='links'><a href='https://nextjs.org/docs/basic-features/data-fetching/client-side#client-side-data-fetching-with-swr' target='_blank' rel='noreferrer'>Client-side data fetching with SWR</a></li>
            <li className='links'><a href='https://github.com/vercel/swr/issues/110' target='_blank' rel='noreferrer'>Debounce? Throttle requests?</a></li>
            <li className='links'><a href='https://stackoverflow.com/questions/68339243/how-can-i-use-top-level-await-in-typescript-next-js' target='_blank' rel='noreferrer'>Use top level await in typescript next.js</a></li>
            <li className='links'><a href='https://rapidapi.com/guides/use-swr-hooks' target='_blank' rel='noreferrer'>How to fetch data from APIs using SWR Hooks in React?</a></li>
          </ul>
          <p>Test 2</p>
          <p>IR Squash</p>
          <p>non-consecutive</p>
<<<<<<< HEAD
          <p>commit</p>
=======
>>>>>>> f902ec9 (Test non-consecutive)
        </div>

      </main>
    </div>
  )
}

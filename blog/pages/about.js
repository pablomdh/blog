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
            <li className='links'><a href='https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website' target='_blank' rel='noopener'>Next.Js Learning Path</a></li>
            <li className='links'><a href='https://tailwindcss.com/docs/installation' target='_blank' rel='noopener'>Get started with Tailwind CSS</a></li>
            <li className='links'><a href='https://www.youtube.com/watch?v=vu9gPcPs3mY&ab_channel=HarryWolff' target='_blank' rel='noopener'>How To Build A Blog With Next.js And Tailwind. (Part 1 and 2) by Harry Wolff</a></li>
            <li className='links'><a href='https://swr.vercel.app/docs/getting-started' target='_blank' rel='noopener'>SWR Getting Started</a></li>
            <li className='links'><a href='https://nextjs.org/docs/basic-features/data-fetching/client-side#client-side-data-fetching-with-swr' target='_blank' rel='noopener'>Client-side data fetching with SWR</a></li>
            <li className='links'><a href='https://github.com/vercel/swr/issues/110' target='_blank' rel='noopener'>Debounce? Throttle requests?</a></li>
          </ul>
        </div>

      </main>
    </div>
  )
}

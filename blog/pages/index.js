import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <meta name="Welcome" content="Header." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='text-3xl font-bold text-center my-20'>Welcome to my blog!</h1>
      </main>
    </div>
  )
}

import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='mx-auto my-4 w-9/12'>
        <header>
          <h1 className='text-5xl font-bold text-center'>My Blog</h1>
          <nav className='my-5'>
            <a href='https://github.com/pablomdh/blog' target='_blank' rel='noreferrer'><img src="github.svg" /></a>
            <ul className='flex flex-row justify-center space-x-4'>
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/posts'>Posts</Link></li>
              <li><Link href='/swrposts'>SWR Posts</Link></li>
              <li><Link href='/about'>About</Link></li>
            </ul>
          </nav>
        </header>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp

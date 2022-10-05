// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await res.json()

  if (!posts) {
    return {
      notFound: true,
    }
  }
  // Pass data to the page via props
  return {props:posts}
}
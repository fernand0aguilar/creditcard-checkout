import axios from 'axios'

export const Home = (): JSX.Element => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)

  return (
    <main>
      <h1>hello world 🌍</h1>
      <button
        onClick={async () => {
          const data = await fetcher('/api/pagar')
          alert(`data: ${data.message}`)
        }}
      >
        Test Button
      </button>
    </main>
  )
}

export default Home

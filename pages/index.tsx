import Head from 'next/head'
// import useSwr from 'swr'
import { Theme, GlobalTheme } from './style'
import axios from 'axios'

export const Index = (): JSX.Element => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)

  return (
    <div className="container">
      <Head>
        <title>Benx test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalTheme />
      <Theme />

      <header>
        <h2>Header 🤖</h2>
      </header>

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

      <footer>
        <h2>FooOooter 👣</h2>
      </footer>
    </div>
  )
}

export default Index

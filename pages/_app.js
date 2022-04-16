import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-cyan-400 h-full'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
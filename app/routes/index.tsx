import type { MetaFunction } from 'remix'

export let meta: MetaFunction = () => {
  return {
    title: 'Http Codes',
    description: 'Http status codes for humans, in english.',
  }
}

function Hero() {
  return (
    <>
      <h1 className="text-6xl font-black mt-32 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500">
        Http Code
      </h1>
      <p className="text-xl flex items-center space-x-2 mt-3">
        Http status codes for humans 😄
      </p>
      <div className="grid grid-cols-3 grid-rows-2 gap-2 md:gap-4 text-white font-bold mt-16">
        <a
          href="/#one"
          className="rounded-md p-3 md:p-6 outline-none shadow-md focus:ring hover:shadow-lg transition-all bg-gradient-to-br from-cyan-400 to-blue-500"
        >
          <span className="text-2xl">1</span>xx
        </a>
        <a
          href="/#two"
          className="rounded-md p-3 md:p-6 outline-none shadow-md focus:ring hover:shadow-lg transition-all bg-gradient-to-br from-green-400 to-cyan-500"
        >
          <span className="text-2xl">2</span>xx
        </a>
        <a
          href="/#three"
          className="rounded-md p-3 md:p-6 outline-none shadow-md focus:ring hover:shadow-lg transition-all bg-gradient-to-br from-purple-500 to-indigo-500"
        >
          <span className="text-2xl">3</span>xx
        </a>
        <a
          href="/#four"
          className="rounded-md p-3 md:p-6 outline-none shadow-md focus:ring hover:shadow-lg transition-all bg-gradient-to-br from-yellow-400 to-orange-500"
        >
          <span className="text-2xl">4</span>xx
        </a>
        <a
          href="/#five"
          className="rounded-md p-3 md:p-6 outline-none shadow-md focus:ring hover:shadow-lg transition-all bg-gradient-to-br from-orange-400 to-pink-600 self-end"
        >
          <span className="text-2xl">5</span>xx
        </a>
      </div>
    </>
  )
}

export default function Index() {
  return (
    <>
      <Hero />
      <section id="one" className="py-4"></section>
      <section id="two" className="py-4"></section>
      <section id="three" className="py-4"></section>
      <section id="four" className="py-4"></section>
    </>
  )
}

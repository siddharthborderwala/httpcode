import { Link, MetaFunction } from 'remix'
import { DBType } from '~/types'
import { getGradientFromCode } from '~/util'
import database from '../db.json'

const db = database as DBType

export let meta: MetaFunction = () => {
  return {
    title: 'Http Codes',
    description: 'Http status codes for humans, in english.',
  }
}

function Hero() {
  return (
    <section className="mb-24">
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
          className="rounded-md p-3 md:p-6 outline-none shadow-md focus:ring hover:shadow-lg transition-all bg-gradient-to-br from-orange-400 to-pink-600"
        >
          <span className="text-2xl">5</span>xx
        </a>
      </div>
    </section>
  )
}

function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <path
        d="M122.34315,71.43146l19.799-19.799a44,44,0,1,1,62.22539,62.22539l-28.28427,28.28428a44,44,0,0,1-62.2254,0"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
      <path
        d="M133.65685,184.56854l-19.799,19.799a44,44,0,1,1-62.22539-62.22539l28.28427-28.28428a44,44,0,0,1,62.2254,0"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
    </svg>
  )
}

function Section({
  database,
  id,
  startsWith,
  label,
}: {
  database: DBType
  id: string
  startsWith: string
  label: string
}) {
  return (
    <section id={id} className="pt-24">
      <h4 className="uppercase font-bold tracking-wider text-gray-400">
        {label}
      </h4>
      <h3
        className={`text-transparent bg-gradient-to-r bg-clip-text ${getGradientFromCode(
          startsWith
        )} text-4xl font-bold relative`}
      >
        {startsWith}xx
        <Link to={`/#${id}`} className="absolute -left-10 top-2">
          <LinkIcon />
        </Link>
      </h3>
      <ul className="space-y-6 mt-8 flex flex-col">
        {Object.entries(database)
          .filter(([key]) => key.startsWith(startsWith))
          .map(([k, v]) => (
            <li key={k} className="inline-block">
              <Link to={`/${k}`}>
                <strong className="text-xl">{k}</strong>
                <p className="text-gray-500 text-lg">{v.reason}</p>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default function Index() {
  return (
    <>
      <Hero />
      <Section id="one" startsWith="1" label="Informational" database={db} />
      <Section id="two" startsWith="2" label="Successful" database={db} />
      <Section id="three" startsWith="3" label="Redirection" database={db} />
      <Section id="four" startsWith="4" label="Client Error" database={db} />
      <Section id="five" startsWith="5" label="Server Error" database={db} />
    </>
  )
}

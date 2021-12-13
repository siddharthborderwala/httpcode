import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { DBType } from '~/types'
import { getGradientFromCode } from '~/util'
import database from '../db.json'

const db = database as DBType

export let loader: LoaderFunction = ({ params }) => {
  const code = params.code as string
  const res = db[code]
  if (!res) {
    throw json({}, { status: 404 })
  }
  return json({ code, ...res }, { status: 200 })
}

export let meta: MetaFunction = ({ params }) => {
  const code = params.code as string
  const res = db[code]
  return {
    title: `${code} - ${res.reason} | Http status codes for humans 😄`,
    description: `Learn more about ${code} http status code - ${res.reason}.`,
  }
}

export default function Index() {
  const { code, reason, brief } = useLoaderData()

  return (
    <>
      <div
        className={`rounded-lg bg-gradient-to-br ${getGradientFromCode(
          code
        )} mt-4 pl-8 pt-32 pb-6 shadow-inner flex flex-col`}
      >
        <h1 className="text-7xl font-black text-white drop-shadow">{code}</h1>
        <h2 className="uppercase text-lg tracking-wide font-bold text-gray-100">
          {reason}
        </h2>
      </div>

      <p>{brief}</p>
    </>
  )
}

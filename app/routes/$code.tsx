import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { DBType } from '~/types'
import { getGradientFromCode } from '~/util'
import database from '../db.json'

const db = database as DBType

export let loader: LoaderFunction = ({ params }) => {
  const res = db[params.code as string]
  if (!res) {
    throw json({}, { status: 404 })
  }
  return json({
    code: params.code,
    ...res,
  })
}

export let meta: MetaFunction = ({ params }) => {
  const res = db[params.code as string]
  return {
    title: `${res.brief} | Http Code`,
    description: `Understand the meaning of HTTP status code ${params.code} - ${res.brief}`,
  }
}

export default function Index() {
  const { code, brief, description } = useLoaderData()

  return (
    <div
      className={`rounded-lg bg-gradient-to-br ${getGradientFromCode(
        code
      )} mt-4 pl-8 pt-32 pb-8 shadow-inner`}
    >
      <h1 className="text-7xl font-bold text-white">{code}</h1>
    </div>
  )
}

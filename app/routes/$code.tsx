import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix';
import { DBType } from '~/types';
import { getGradientFromCode } from '~/util';
import database from '../db.json';

const db = database as DBType;

export let loader: LoaderFunction = ({ params }) => {
  const code = params.code as string;
  const res = db[code];
  if (!res) {
    throw json({}, { status: 404 });
  }
  return json({ code, ...res }, { status: 200 });
};

export let meta: MetaFunction = ({ params }) => {
  const code = params.code as string;
  const res = db[code];
  return {
    title: `${code} - ${res.reason} | Http status codes for humans 😄`,
    description: `Learn more about ${code} http status code - ${res.reason}.`,
  };
};

export default function Index() {
  const { code, reason, brief, useCase } = useLoaderData<
    DBType & { code: string }
  >();

  const gradient = getGradientFromCode(code);

  return (
    <article>
      <div
        className={`rounded-lg bg-gradient-to-br ${gradient} mt-4 pl-8 pt-32 pb-6 shadow-inner`}
      >
        <h1 className="text-7xl font-black text-white drop-shadow">{code}</h1>
      </div>
      <h2 className="uppercase text-2xl tracking-wide font-bold mt-8 text-indigo-500">
        {reason}
      </h2>
      <p className="text-lg mt-6">{brief}</p>
      <h3 className="text-xl font-bold mt-6">Use Case</h3>
      <p className="text-lg mt-2">{useCase}</p>
      <div className="rounded-md bg-gray-100 text-gray-700 p-8 mt-12">
        <h4 className="text-xl font-bold">Found a problem with this page?</h4>
        <a
          href="http://github.com/siddharthborderwala/httpcode"
          target="_blank"
          rel="noopener noreferrer"
          className="outline-none focus:ring text-lg text-indigo-500 cursor-pointer mt-6 block"
        >
          Edit this page on GitHub.
        </a>
        <a
          href="http://github.com/siddharthborderwala/httpcode/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="outline-none focus:ring text-lg text-indigo-500 cursor-pointer mt-2 block"
        >
          Report a problem with this page.
        </a>
      </div>
    </article>
  );
}

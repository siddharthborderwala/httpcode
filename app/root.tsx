import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix'
import type { LinksFunction } from 'remix'

import tailwindStyles from './styles/tailwind.css'
import globalStyles from './styles/global.css'
import Layout from './components/layout'

// https://remix.run/api/app#links
export let links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwindStyles },
    { rel: 'stylesheet', href: globalStyles },
  ]
}

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch()

  let message
  switch (caught.status) {
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist ☹️</p>
      )
      break
    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <div className="flex flex-col md:flex-row items-center h-full">
          <div>
            <h1 className="text-6xl font-black mt-24 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-600">
              <Link to={`/${caught.status}`}>{caught.status}</Link>{' '}
              {caught.statusText}
            </h1>
            <h2 className="text-xl flex items-center space-x-2 mt-3">
              {message}
            </h2>
          </div>
          <img
            src="/images/error.png"
            alt="Error Broken Page"
            className="md:ml-auto max-h-[60vh] drop-shadow"
          />
        </div>
      </Layout>
    </Document>
  )
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

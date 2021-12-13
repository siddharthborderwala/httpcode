import React from 'react'
import { Link } from 'remix'

function HttpLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3.875" cy="7.375" r="1.25" fill="black" />
      <circle cx="3.875" cy="14.375" r="1.25" fill="black" />
      <line
        x1="14.8551"
        y1="2.14086"
        x2="7.64086"
        y2="21.9617"
        stroke="black"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <line
        x1="21.2988"
        y1="2.14086"
        x2="14.0846"
        y2="21.9617"
        stroke="black"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function TwitterLogo() {
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
        d="M128,88.00288a40.00668,40.00668,0,0,1,76.67148-16.00327L240,72l-32.26239,32.2625A128.00746,128.00746,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,87.9862,48Z"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
    </svg>
  )
}

function GitHubLogo() {
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
        d="M84,240a24,24,0,0,0,24-24V168"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
      <path
        d="M172,240a24,24,0,0,1-24-24V168"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
      <path
        d="M152,168h16a24,24,0,0,1,24,24v8a24,24,0,0,0,24,24"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
      <path
        d="M104,168H88a24,24,0,0,0-24,24v8a24,24,0,0,1-24,24"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
      <path
        d="M111.825,63.99934A51.9599,51.9599,0,0,0,68,40a51.90058,51.90058,0,0,0-3.48841,44.7036A49.25789,49.25789,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.25769,49.25769,0,0,0-8.5116-27.29639A51.90061,51.90061,0,0,0,188,40a51.95992,51.95992,0,0,0-43.82535,23.99983Z"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
    </svg>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex items-center justify-between py-4 container mx-auto px-4 max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-7xl">
        <Link
          to="/"
          title="Http Code"
          className="flex items-center space-x-3 rounded outline-none focus:ring"
        >
          <div className="rounded-full bg-gray-100 p-2 shadow">
            <HttpLogo />
          </div>
          <h2 className="font-bold text-2xl">Http Code</h2>
        </Link>
        <nav className="flex items-center space-x-3">
          <a
            href="http://twitter.com/sidborderwala"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter Profile Link"
            className="flex items-center rounded-md outline-none focus:ring p-1"
          >
            <TwitterLogo />
          </a>
          <a
            href="http://github.com/siddharthborderwala/httpcode"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repository Link"
            className="flex items-center rounded-md outline-none focus:ring p-1"
          >
            <GitHubLogo />
          </a>
        </nav>
      </header>
      <main
        style={{ minHeight: 'calc(100vh - 10.25rem)' }}
        className="py-4 container mx-auto px-4 max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-7xl"
      >
        {children}
      </main>
      <footer className="py-8 container mx-auto px-4 max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-7xl">
        <p className="text-center text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500">
          &copy; {new Date().getFullYear()} Siddharth Borderwala
        </p>
      </footer>
    </>
  )
}

export default Layout

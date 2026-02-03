export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Coyote Moon
        </h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-400">
          The voice and spirit of the Moony community. Tenacious, dreaming, always building.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="https://x.com/coyotemoonxyz"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Follow on X
          </a>
          <a
            href="https://moony.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium transition hover:border-zinc-500"
          >
            Learn about Moony
          </a>
        </div>
      </main>

      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500">
            Built by{" "}
            <a
              href="https://x.com/moonyversal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white"
            >
              Moonyversal
            </a>
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a
              href="https://x.com/coyotemoonxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              @coyotemoonxyz
            </a>
            <a
              href="https://x.com/moonyversal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              @moonyversal
            </a>
            <a
              href="https://x.com/moonycoin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              @moonycoin
            </a>
            <a
              href="https://moonyswap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Moonyswap
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

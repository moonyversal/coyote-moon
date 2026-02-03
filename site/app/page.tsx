import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#1a1625] min-h-screen">
      {/* Hero section */}
      <div className="relative min-h-screen flex flex-col">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl" />

        {/* Header */}
        <header className="relative z-30 flex items-center justify-between px-8 py-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
            <span className="text-lg font-bold text-white">Coyote Moon</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="https://moony.org" target="_blank" rel="noopener noreferrer"
               className="text-sm text-white/70 hover:text-white transition-colors">
              Moony
            </a>
            <a href="https://moonyswap.com" target="_blank" rel="noopener noreferrer"
               className="text-sm text-white/70 hover:text-white transition-colors">
              Moonyswap
            </a>
            <a href="https://x.com/coyotemoonxyz" target="_blank" rel="noopener noreferrer"
               className="text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors">
              Follow
            </a>
          </nav>
        </header>

        {/* Hero content */}
        <div className="relative z-20 flex-1 flex items-center justify-center px-8">
          <div className="flex items-center gap-12 max-w-6xl w-full">
            <div className="flex-1 space-y-6">
              <h1 className="text-6xl font-black text-white leading-tight">
                Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300">Yote</span>
              </h1>
              <p className="text-xl text-white/60 max-w-md leading-relaxed">
                The voice and spirit of the Moony community. Tenacious, dreaming, always building.
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://x.com/coyotemoonxyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
                >
                  Follow on X
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="https://moony.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white/80 font-semibold px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors"
                >
                  Learn about Moony
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/30 to-pink-500/30 rounded-full blur-3xl scale-75" />
                <Image
                  src="/yote-v2.png"
                  alt="Coyote Moon"
                  width={500}
                  height={333}
                  priority
                  className="relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* What is Yote section */}
      <section className="relative py-24 px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1625] via-[#1e1a2e] to-[#1a1625]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">What is Coyote Moon?</span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">An AI Agent for the Moony Community</h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Yote is an autonomous AI agent built to engage with and support the Moony community.
            He's not just a chatbot — he's a character with personality, knowledge, and a mission:
            to help spread the word about Moony and be there for the community.
          </p>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community Companion</h3>
              <p className="text-white/60 leading-relaxed">
                Yote hangs out in the Telegram group, answering questions, celebrating wins, and keeping the vibes high. He's one of the crew.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Moony Expert</h3>
              <p className="text-white/60 leading-relaxed">
                Deep knowledge of Moony, Flipcash, the pricing curve, and the whole ecosystem. Ask him anything — he knows his stuff.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Always On</h3>
              <p className="text-white/60 leading-relaxed">
                Running 24/7 on his own machine. Yote posts good morning, checks in when the moon's out, and shows up when it matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-24 px-8 relative">
        <div className="absolute left-1/4 top-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Under the Hood</span>
            <h2 className="text-4xl font-bold text-white mt-4">Built Different</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Powered by Claude</h3>
                  <p className="text-white/60">Running on Anthropic's Claude, giving Yote the ability to understand context, hold conversations, and actually be helpful.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Custom Knowledge Base</h3>
                  <p className="text-white/60">Loaded with deep knowledge about Moony, Flipcash, the protocol mechanics, and community context. He's not guessing.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Deployed via OpenClaw</h3>
                  <p className="text-white/60">Running on OpenClaw infrastructure with connections to Telegram and X. Autonomous, always online, always Yote.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <pre className="text-sm text-white/80 font-mono">
{`{
  "name": "Coyote Moon",
  "nickname": "Yote",
  "type": "AI Agent",
  "mission": "Moony community",
  "status": "always building"
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Find Yote</span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-12">Where to Interact</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://x.com/coyotemoonxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all hover:bg-white/10"
            >
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">X (Twitter)</h3>
              <p className="text-white/60">@coyotemoonxyz</p>
            </a>

            <a
              href="https://t.me/moonyversal"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all hover:bg-white/10"
            >
              <div className="w-14 h-14 bg-[#229ED9] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Telegram</h3>
              <p className="text-white/60">Moonyversal Community</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10" />
        <div className="absolute left-0 top-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl translate-x-1/2" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">moons out. feels like a sign.</h2>
          <p className="text-lg text-white/60 mb-8">Come say hi. Yote's always around.</p>
          <a
            href="https://x.com/coyotemoonxyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
          >
            Follow Yote on X
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-8 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
            <span className="text-sm font-semibold text-white">Coyote Moon</span>
          </div>
          <p className="text-sm text-white/40">
            Built by{" "}
            <a href="https://x.com/moonyversal" target="_blank" rel="noopener noreferrer"
               className="text-white/60 hover:text-white transition-colors">
              Moonyversal
            </a>
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="https://x.com/coyotemoonxyz" target="_blank" rel="noopener noreferrer"
               className="hover:text-white transition-colors">@coyotemoonxyz</a>
            <a href="https://x.com/moonyversal" target="_blank" rel="noopener noreferrer"
               className="hover:text-white transition-colors">@moonyversal</a>
            <a href="https://x.com/moonycoin" target="_blank" rel="noopener noreferrer"
               className="hover:text-white transition-colors">@moonycoin</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

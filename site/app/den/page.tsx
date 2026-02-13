"use client";

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const blanquotey = localFont({ src: "../../fonts/Blanquotey.ttf" });

const games = [
  {
    title: "Tic Tac Toe",
    description: "Wagered tic-tac-toe powered by Flipcash. Stake real money, play head-to-head, winner takes the pot.",
    status: "live" as const,
    link: "https://t.me/CoyoteMoonBot/games",
    icon: (
      <svg className="w-8 h-8 text-[#1a1625]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
];

const comingSoon = [
  {
    title: "Coin Flip",
    description: "50/50 odds. Pick heads or tails, stake your bet, let fate decide.",
    icon: (
      <svg className="w-8 h-8 text-[#1a1625]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Trivia",
    description: "Test your knowledge against other players. Wager on your brains.",
    icon: (
      <svg className="w-8 h-8 text-[#1a1625]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

export default function Den() {
  return (
    <div className="flex flex-col bg-[#0d0b12] min-h-screen overflow-hidden">
      {/* Film grain overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      {/* Stars background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#A875FB]/20 via-[#0d0b12] to-[#0d0b12]" />
        <div className="stars" />
        <style jsx>{`
          .stars {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image:
              radial-gradient(2px 2px at 20px 30px, white, transparent),
              radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 90px 40px, white, transparent),
              radial-gradient(2px 2px at 160px 120px, rgba(255,255,255,0.9), transparent),
              radial-gradient(1px 1px at 230px 80px, white, transparent),
              radial-gradient(2px 2px at 300px 150px, rgba(255,255,255,0.7), transparent),
              radial-gradient(1px 1px at 350px 200px, white, transparent),
              radial-gradient(2px 2px at 420px 50px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 480px 180px, white, transparent),
              radial-gradient(2px 2px at 550px 90px, rgba(255,255,255,0.9), transparent),
              radial-gradient(1px 1px at 600px 250px, white, transparent),
              radial-gradient(2px 2px at 680px 140px, rgba(255,255,255,0.7), transparent),
              radial-gradient(1px 1px at 750px 60px, white, transparent),
              radial-gradient(2px 2px at 820px 200px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 900px 120px, white, transparent),
              radial-gradient(2px 2px at 950px 280px, rgba(255,255,255,0.9), transparent);
            background-size: 1000px 300px;
            animation: twinkle 8s ease-in-out infinite alternate;
            opacity: 0.6;
          }
          @keyframes twinkle {
            0% { opacity: 0.4; }
            100% { opacity: 0.8; }
          }
        `}</style>
      </div>

      {/* Gradient orbs */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-[#A875FB]/20 rounded-full blur-[120px] animate-pulse z-0" />
      <div className="fixed top-60 right-1/4 w-[400px] h-[400px] bg-[#FEDAD6]/15 rounded-full blur-[100px] animate-pulse z-0" style={{ animationDelay: '1s' }} />

      {/* Header */}
      <header className="relative z-30 flex items-center justify-between px-8 py-5">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-[linear-gradient(to_bottom,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] shadow-lg shadow-[#A875FB]/30 group-hover:shadow-[#A875FB]/50 transition-shadow overflow-hidden p-[2px]">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/yote-head.png"
                alt="Yote"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <span className={`text-xl text-transparent bg-clip-text bg-[linear-gradient(to_right,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] ${blanquotey.className}`}>coyote moon</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">
            Home
          </Link>
          <a href="https://x.com/coyotemoonxyz" target="_blank" rel="noopener noreferrer"
             className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#A875FB]/20 to-[#FEDAD6]/20 hover:from-[#A875FB]/30 hover:to-[#FEDAD6]/30 border border-[#A875FB]/30 hover:border-[#A875FB]/50 rounded-full transition-all shadow-lg shadow-[#A875FB]/10 hover:shadow-[#A875FB]/20">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 pt-16 pb-8 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#A875FB]/10 to-[#FEDAD6]/10 border border-[#A875FB]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white/70">Games Live</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)]">
              Yote&apos;s Den
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-lg mx-auto leading-relaxed">
            Wagered games in Telegram. Powered by Flipcash. Hosted by Yote.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-16 z-10">
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="#13111a" d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* Live Games */}
      <section className="relative z-10 py-20 px-8 bg-[#13111a]">
        <div className="absolute right-0 top-1/2 w-96 h-96 bg-[#A875FB]/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#A875FB] to-[#FEDAD6] font-bold text-sm uppercase tracking-widest mb-4">Play Now</span>
            <h2 className="text-4xl font-bold text-white">Live Games</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {games.map((game) => (
              <a
                key={game.title}
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl p-8 border border-white/10 hover:border-[#A875FB]/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#A875FB]/10 to-[#FEDAD6]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-[linear-gradient(to_bottom,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] rounded-2xl flex items-center justify-center shadow-lg shadow-[#A875FB]/25 group-hover:shadow-[#A875FB]/40 transition-shadow group-hover:scale-110 duration-300">
                      {game.icon}
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      Live
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{game.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm">{game.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-[#A875FB] text-sm font-semibold group-hover:gap-3 transition-all">
                    <span>Play in Telegram</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-16 bg-[#13111a] z-10">
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="#0d0b12" d="M0,30 C480,0 960,60 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* Coming Soon */}
      <section className="relative z-10 py-20 px-8 bg-[#0d0b12]">
        <div className="absolute left-1/4 top-1/2 w-72 h-72 bg-[#A875FB]/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#A875FB] to-[#FEDAD6] font-bold text-sm uppercase tracking-widest mb-4">On The Horizon</span>
            <h2 className="text-4xl font-bold text-white">Coming Soon</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {comingSoon.map((game) => (
              <div
                key={game.title}
                className="relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] rounded-3xl p-8 border border-white/5"
              >
                <div className="relative z-10 opacity-50">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-b from-white/10 to-white/5 rounded-2xl flex items-center justify-center">
                      <div className="text-white/40">
                        {game.icon}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-semibold">
                      Soon
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white/60 mb-3">{game.title}</h3>
                  <p className="text-white/30 leading-relaxed text-sm">{game.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative z-10 py-20 px-8 bg-[#0d0b12]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#A875FB]/15 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#A875FB] to-[#FEDAD6] font-bold text-sm uppercase tracking-widest mb-4">How It Works</span>
            <h2 className="text-4xl font-bold text-white">Simple as That</h2>
          </div>

          <div className="space-y-6">
            {[
              { step: "1", title: "Open in Telegram", desc: "Tap a game link to open the Mini App inside Telegram." },
              { step: "2", title: "Create or join a match", desc: "Pick your stake amount and create a game, or join someone waiting." },
              { step: "3", title: "Stake with Flipcash", desc: "Paste a Flipcash cash link for your stake. Yote holds it in escrow." },
              { step: "4", title: "Play and collect", desc: "Win the game, Yote sends your prize via DM. It's that simple." },
            ].map((item) => (
              <div key={item.step} className="group flex gap-5 items-start">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-b from-[#A875FB]/20 to-[#FEDAD6]/20 rounded-2xl flex items-center justify-center text-[#A875FB] font-bold border border-[#A875FB]/20 group-hover:border-[#A875FB]/40 group-hover:scale-110 transition-all">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-8 py-10 bg-[#0d0b12] border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center md:text-left md:flex-row md:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[linear-gradient(to_bottom,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] shadow-lg shadow-[#A875FB]/20 overflow-hidden p-[2px]">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/yote-head.png"
                  alt="Yote"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className={`text-base text-transparent bg-clip-text bg-[linear-gradient(to_right,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] ${blanquotey.className}`}>coyote moon</span>
          </Link>
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://x.com/moonyversal" target="_blank" rel="noopener noreferrer"
               className="text-white/50 hover:text-white transition-colors">
              Moonyversal
            </a>
            . All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-white/30">
            <a href="https://x.com/coyotemoonxyz" target="_blank" rel="noopener noreferrer"
               className="hover:text-white transition-colors">@coyotemoonxyz</a>
            <a href="https://x.com/moonyversal" target="_blank" rel="noopener noreferrer"
               className="hover:text-white transition-colors">@moonyversal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

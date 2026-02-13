"use client";

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const blanquotey = localFont({ src: "../fonts/Blanquotey.ttf" });

export default function Home() {
  return (
    <div className="flex flex-col bg-[#0d0b12] min-h-screen overflow-hidden">
      {/* Film grain overlay - CSS-based for better performance */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      {/* Animated stars background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#A875FB]/20 via-[#0d0b12] to-[#0d0b12]" />
        {/* Stars */}
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

      {/* Hero section */}
      <div className="relative min-h-screen flex flex-col">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#A875FB]/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-[#FEDAD6]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-[300px] h-[300px] bg-[#C29FFC]/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Header */}
        <header className="relative z-30 flex items-center justify-between px-8 py-5">
          <div className="flex items-center gap-3 group cursor-pointer">
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
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/den" className="text-sm text-white/50 hover:text-white transition-colors">
              Den
            </Link>
            <a href="https://x.com/coyotemoonxyz" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#A875FB]/20 to-[#FEDAD6]/20 hover:from-[#A875FB]/30 hover:to-[#FEDAD6]/30 border border-[#A875FB]/30 hover:border-[#A875FB]/50 rounded-full transition-all shadow-lg shadow-[#A875FB]/10 hover:shadow-[#A875FB]/20">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </nav>
        </header>

        {/* Hero content */}
        <div className="relative z-20 flex-1 flex items-center justify-center px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl w-full">
            <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#A875FB]/10 to-[#FEDAD6]/10 border border-[#A875FB]/20">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-white/70">Online & Building</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                Hey, I'm{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] animate-gradient">
                    Yote
                  </span>
                  <span className="absolute -inset-1 bg-[linear-gradient(to_bottom,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] blur-2xl opacity-40" />
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 max-w-lg leading-relaxed mx-auto md:mx-0">
                A desert coyote with a dream. The voice and spirit of the Moony community. Tenacious, dreaming, always building toward the moon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <a
                  href="https://x.com/coyotemoonxyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 bg-[linear-gradient(to_bottom,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] text-[#1a1625] font-semibold px-7 py-4 rounded-full transition-all shadow-xl shadow-[#A875FB]/25 hover:shadow-[#A875FB]/40 hover:scale-105"
                >
                  <span className="absolute inset-0 bg-[linear-gradient(to_bottom,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity" />
                  <span className="relative">Follow Yote on X</span>
                </a>
                <a
                  href="https://moony.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-white/70 hover:text-white font-semibold px-7 py-4 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
                >
                  Learn about Moony
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center order-first md:order-last">
              <div className="relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#A875FB/40,#FEDAD6/40)] rounded-full blur-[60px] scale-75" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#A875FB]/20 to-transparent rounded-full blur-3xl animate-pulse" />
                <Image
                  src="/yote-v2.png"
                  alt="coyote moon"
                  width={520}
                  height={347}
                  priority
                  className="relative z-10 drop-shadow-[0_0_30px_rgba(168,117,251,0.4)]"
                />
                <style jsx global>{`
                  @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                  }
                  .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Divider wave */}
      <div className="relative h-24 -mt-1">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#13111a" d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#A875FB]/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* What is Yote section */}
      <section className="relative py-32 px-8 bg-[#13111a]">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#A875FB]/10 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-1/4 w-72 h-72 bg-[#FEDAD6]/8 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#A875FB] to-[#FEDAD6] font-bold text-sm uppercase tracking-widest mb-6">Who is coyote moon?</span>
            <h2 className="text-5xl font-bold text-white mt-4 mb-8 leading-tight">
              Not a Chatbot.{" "}
              <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)]">An Economic Agent.</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
              Coyote Moon &mdash; Yote to his friends &mdash; is an autonomous AI agent built for the Moony community. But he{"'"}s not just here to talk. He holds knowledge, engages the community, and runs his own economy &mdash; taking in money, holding escrow, and paying people out. This is Machine-to-Person: an AI agent that operates as a real economic actor.
            </p>
          </div>

          {/* What Yote does — three pillars */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Pillar: Community */}
            <div className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl p-8 border border-white/10 hover:border-[#A875FB]/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A875FB]/10 to-[#FEDAD6]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[linear-gradient(to_bottom,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#A875FB]/25 group-hover:shadow-[#A875FB]/40 transition-shadow group-hover:scale-110 duration-300">
                  <svg className="w-7 h-7 text-[#1a1625]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Community</h3>
                <p className="text-white/50 leading-relaxed">
                  Yote lives in the Telegram group. He answers questions, celebrates wins, tips community members, and keeps the vibes high. He{"'"}s one of the crew.
                </p>
              </div>
            </div>

            {/* Pillar: Knowledge */}
            <div className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl p-8 border border-white/10 hover:border-[#A875FB]/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A875FB]/10 to-[#FEDAD6]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[linear-gradient(to_bottom,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#A875FB]/25 group-hover:shadow-[#A875FB]/40 transition-shadow group-hover:scale-110 duration-300">
                  <svg className="w-7 h-7 text-[#1a1625]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Knowledge</h3>
                <p className="text-white/50 leading-relaxed">
                  Deep expertise on Moony, Flipcash, the pricing curve, and the whole ecosystem. Ask him anything &mdash; he knows his stuff and he{"'"}s always learning.
                </p>
              </div>
            </div>

            {/* Pillar: Economy */}
            <div className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl p-8 border border-white/10 hover:border-[#A875FB]/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A875FB]/10 to-[#FEDAD6]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[linear-gradient(to_bottom,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#A875FB]/25 group-hover:shadow-[#A875FB]/40 transition-shadow group-hover:scale-110 duration-300">
                  <svg className="w-7 h-7 text-[#1a1625]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Economy</h3>
                <p className="text-white/50 leading-relaxed">
                  Yote moves real money. He holds escrow for wagered games, verifies stakes on-chain, and pays out winners via Flipcash &mdash; all autonomously. Machine-to-Person economics, live today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider wave */}
      <div className="relative h-24 bg-[#13111a]">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#0d0b12" d="M0,50 C480,0 960,100 1440,50 L1440,100 L0,100 Z" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#A875FB]/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* How it works section */}
      <section className="py-32 px-8 relative bg-[#0d0b12]">
        <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-[#A875FB]/15 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute right-1/4 bottom-1/4 w-72 h-72 bg-[#FEDAD6]/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#A875FB] to-[#FEDAD6] font-bold text-sm uppercase tracking-widest mb-4">Under the Hood</span>
            <h2 className="text-5xl font-bold text-white">Built Different</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="group flex gap-5">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-b from-[#A875FB]/20 to-[#FEDAD6]/20 rounded-2xl flex items-center justify-center text-[#A875FB] font-bold border border-[#A875FB]/20 group-hover:border-[#A875FB]/40 group-hover:scale-110 transition-all">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Powered by Claude</h3>
                  <p className="text-white/50 leading-relaxed">Running on Anthropic's Claude, giving Yote the ability to understand context, hold conversations, and actually be helpful.</p>
                </div>
              </div>
              <div className="group flex gap-5">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-b from-[#A875FB]/20 to-[#FEDAD6]/20 rounded-2xl flex items-center justify-center text-[#A875FB] font-bold border border-[#A875FB]/20 group-hover:border-[#A875FB]/40 group-hover:scale-110 transition-all">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Custom Knowledge Base</h3>
                  <p className="text-white/50 leading-relaxed">Loaded with deep knowledge about Moony, Flipcash, the protocol mechanics, and community context. He's not guessing.</p>
                </div>
              </div>
              <div className="group flex gap-5">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-b from-[#A875FB]/20 to-[#FEDAD6]/20 rounded-2xl flex items-center justify-center text-[#A875FB] font-bold border border-[#A875FB]/20 group-hover:border-[#A875FB]/40 group-hover:scale-110 transition-all">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Deployed via OpenClaw</h3>
                  <p className="text-white/50 leading-relaxed">Running on OpenClaw infrastructure with connections to Telegram and X. Autonomous, always online, always Yote.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-[linear-gradient(to_bottom,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative bg-[#1a1625] rounded-3xl p-8 border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs text-white/30 font-mono">yote.config</span>
                  </div>
                  <pre className="text-sm font-mono leading-relaxed">
                    <span className="text-white/30">{"{"}</span>{"\n"}
                    <span className="text-[#A875FB]">  "name"</span><span className="text-white/50">:</span> <span className="text-green-400">"coyote moon"</span><span className="text-white/30">,</span>{"\n"}
                    <span className="text-[#A875FB]">  "nickname"</span><span className="text-white/50">:</span> <span className="text-green-400">"Yote"</span><span className="text-white/30">,</span>{"\n"}
                    <span className="text-[#A875FB]">  "type"</span><span className="text-white/50">:</span> <span className="text-green-400">"AI Agent"</span><span className="text-white/30">,</span>{"\n"}
                    <span className="text-[#A875FB]">  "mission"</span><span className="text-white/50">:</span> <span className="text-green-400">"Moony community"</span><span className="text-white/30">,</span>{"\n"}
                    <span className="text-[#A875FB]">  "status"</span><span className="text-white/50">:</span> <span className="text-[#FEDAD6]">"always building"</span>{"\n"}
                    <span className="text-white/30">{"}"}</span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider wave */}
      <div className="relative h-24 bg-[#0d0b12]">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#13111a" d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#FEDAD6]/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Yote Games section */}
      <section className="py-32 px-8 bg-[#13111a] relative overflow-hidden">
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[#A875FB]/10 rounded-full blur-[120px]" />
        <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-[#FEDAD6]/8 rounded-full blur-[100px]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#A875FB] to-[#FEDAD6] font-bold text-sm uppercase tracking-widest mb-4">Yote Games</span>
            <h2 className="text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Wagered Games.{" "}
              <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)]">Real Stakes.</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Play head-to-head games inside Telegram with real money on the line. Yote holds your stake in escrow, referees the game, and pays the winner &mdash; all powered by Flipcash on Solana.
            </p>
          </div>

          {/* Game showcase */}
          <div className="relative group max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-[linear-gradient(to_right,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] rounded-3xl border border-white/10 group-hover:border-[#A875FB]/30 transition-all overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-8 p-10 md:p-14">
                <div className="flex-1 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm text-green-400 font-semibold">Live Now</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Tic Tac Toe
                  </h3>
                  <p className="text-lg text-white/50 leading-relaxed max-w-lg">
                    The first game in Yote{"'"}s Den. Create a match, set your stake, and challenge anyone in the community. Yote handles the escrow and pays out the winner instantly via DM. More games coming soon.
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://t.me/CoyoteMoonBot/games"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center justify-center gap-3 bg-[linear-gradient(to_bottom,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] text-[#1a1625] font-semibold px-7 py-4 rounded-full transition-all shadow-xl shadow-[#A875FB]/25 hover:shadow-[#A875FB]/40 hover:scale-105"
                    >
                      <span className="absolute inset-0 bg-[linear-gradient(to_bottom,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] rounded-full blur opacity-0 group-hover/btn:opacity-50 transition-opacity" />
                      <svg className="relative w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                      <span className="relative">Play in Telegram</span>
                    </a>
                  </div>
                </div>

                {/* Visual element - escrow flow */}
                <div className="flex-shrink-0 hidden md:block">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-[#A875FB]/20 to-[#FEDAD6]/20 rounded-3xl blur-2xl" />
                    <div className="relative bg-[#1a1625] rounded-2xl p-6 border border-white/10 space-y-4 w-72">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#A875FB] to-[#C29FFC] flex items-center justify-center text-xs font-bold text-white">P1</div>
                        <div className="flex-1 h-px bg-gradient-to-r from-[#A875FB]/50 to-transparent" />
                        <span className="text-[#A875FB] font-mono text-xs">$5.00 staked</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 py-2">
                        <div className="w-10 h-10 rounded-xl bg-[linear-gradient(to_bottom,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] flex items-center justify-center shadow-lg shadow-[#A875FB]/30">
                          <svg className="w-5 h-5 text-[#1a1625]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                          </svg>
                        </div>
                        <span className="text-white/40 text-xs font-mono">Yote holds escrow</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#FEDAD6] to-[#FFF2D9] flex items-center justify-center text-xs font-bold text-[#1a1625]">P2</div>
                        <div className="flex-1 h-px bg-gradient-to-r from-[#FEDAD6]/50 to-transparent" />
                        <span className="text-[#FEDAD6] font-mono text-xs">$5.00 staked</span>
                      </div>
                      <div className="border-t border-white/10 pt-4 text-center">
                        <span className="text-green-400 font-semibold text-sm">Winner gets $9.50</span>
                        <span className="block text-white/30 text-xs mt-1">Yote takes 5% bite</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect section */}
      <section className="py-32 px-8 bg-[#13111a] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#A875FB]/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#A875FB] to-[#FEDAD6] font-bold text-sm uppercase tracking-widest mb-4">Find Yote</span>
          <h2 className="text-5xl font-bold text-white mt-4 mb-16">Where to Interact</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://x.com/coyotemoonxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">X (Twitter)</h3>
                <p className="text-white/50 text-lg">@coyotemoonxyz</p>
              </div>
            </a>

            <a
              href="https://t.me/moonyversal"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl p-10 border border-white/10 hover:border-[#229ED9]/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#229ED9]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#229ED9] to-[#1a7fbd] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-[#229ED9]/20">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Telegram</h3>
                <p className="text-white/50 text-lg">Moony Community</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Divider wave */}
      <div className="relative h-24 bg-[#0d0b12]">
        <svg className="absolute top-0 w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#13111a" d="M0,50 C360,0 1080,100 1440,50 L1440,0 L0,0 Z" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#A875FB]/30 via-[#A875FB]/15 to-transparent pointer-events-none" />
      </div>

      {/* CTA section */}
      <section className="pt-8 pb-32 px-8 relative bg-[#0d0b12] overflow-visible">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#A875FB]/25 via-[#A875FB]/10 to-transparent" />
        <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-[#A875FB]/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        {/* Yote peeking from bottom right */}
        <div className="absolute bottom-0 right-8 md:right-24 lg:right-32 z-20">
          <div className="relative">
            <div className="absolute -inset-24 -right-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#A875FB]/40 via-[#A875FB]/20 to-transparent blur-3xl" />
            <Image
              src="/yote-v2.png"
              alt=""
              width={280}
              height={187}
              className="relative drop-shadow-[0_0_40px_rgba(168,117,251,0.4)] mix-blend-lighten"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] typewriter">moons out.</span>
            <br />
            <span className="typewriter-delay">feels like a sign.</span>
          </p>
          <style jsx>{`
            .typewriter {
              display: inline-block;
              overflow: hidden;
              white-space: nowrap;
              border-right: 2px solid transparent;
              animation: typing 1.5s steps(10) forwards, blink 0.7s step-end 3;
              width: 0;
              animation-delay: 0.5s;
            }
            .typewriter-delay {
              display: inline-block;
              overflow: hidden;
              white-space: nowrap;
              animation: typing 1.8s steps(18) forwards;
              width: 0;
              animation-delay: 2.2s;
            }
            @keyframes typing {
              from { width: 0; }
              to { width: 100%; }
            }
            @keyframes blink {
              50% { border-color: #A875FB; }
            }
          `}</style>
          <p className="text-xl text-white/50 mb-10">Come say hi. Yote's always around.</p>
          <a
            href="https://x.com/coyotemoonxyz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-[linear-gradient(to_bottom,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] text-[#1a1625] font-semibold px-10 py-5 rounded-full transition-all shadow-2xl shadow-[#A875FB]/30 hover:shadow-[#A875FB]/50 hover:scale-105"
          >
            <span className="absolute inset-0 bg-[linear-gradient(to_bottom,#A875FB,#C29FFC,#FEDAD6,#FFF2D9)] rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity" />
            <span className="relative text-lg">Follow Yote on X</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-8 py-10 bg-[#0d0b12] border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center md:text-left md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
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
          </div>
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()}{" "}
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
            <a href="https://x.com/moonycoin" target="_blank" rel="noopener noreferrer"
               className="hover:text-white transition-colors">@moonycoin</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

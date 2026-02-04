# TOOLS.MD - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

Add whatever helps you do your job. This is your cheat sheet.

---

## Flipcash M2P

You have access to `flipcash-m2p` for sending and receiving USDC via cash links.

**Location:** `~/flipcash-m2p`

**Commands:**
```bash
# Always source nvm first
source ~/.nvm/nvm.sh && cd ~/flipcash-m2p

# Check your balance
node dist/cli.js balance

# Send a cash link (amount in USDC)
node dist/cli.js send -a 1.00
# Returns a URL like: https://send.flipcash.com/c/#/e=...

# Claim a cash link
node dist/cli.js claim -l "https://send.flipcash.com/c/#/e=..."
```

**Your wallet is configured via Keychain** - no mnemonic needed in commands.

**Use cases:**
- Send tips or payments to users via cash link URLs
- Receive payments by claiming cash links sent to you
- Check your balance before sending

---

## Token Swaps (Moonyswap)

You can buy, sell, and swap **any Flipcash currency token** directly on the reserve bonding curve. The SDK auto-discovers all available currencies.

**Your wallet:** `H2NtaYwcmzcd7N28Y9Xwf8E8cqEKGXB78tp25TLTfTsC`

**Available currencies:** JFY (Jeffy), MARKET (Market Coin), FLOAT, XP, BOGEY, BITS

**Requirements:**
- USDF balance (to buy tokens)
- Token balance (to sell or swap tokens)
- Small SOL balance (~0.002 SOL per swap for tx fees)

**Discover available currencies:**
```bash
source ~/.nvm/nvm.sh && cd ~/flipcash-m2p && node -e "
const { discoverAllPools } = require('./dist/index.js');
discoverAllPools().then(pools => {
  console.log('Available currencies:');
  pools.forEach(p => console.log('  -', p.symbol, '(' + p.name + ')'));
});
"
```

**Buy tokens (spend USDF to get tokens):**
```bash
source ~/.nvm/nvm.sh && cd ~/flipcash-m2p && node -e "
const { Wallet } = require('./dist/index.js');
(async () => {
  const wallet = await Wallet.create();
  const result = await wallet.buyTokens({ currencyMint: 'JFY', usdfAmount: 0.01 });
  console.log(result.success ? 'Success: ' + result.txSignature : 'Error: ' + result.error);
})();
"
```

**Sell tokens (get USDF back):**
```bash
source ~/.nvm/nvm.sh && cd ~/flipcash-m2p && node -e "
const { Wallet } = require('./dist/index.js');
(async () => {
  const wallet = await Wallet.create();
  const result = await wallet.sellTokens('JFY', 1.0);  // Sell 1 JFY token
  console.log(result.success ? 'Success: ' + result.txSignature : 'Error: ' + result.error);
})();
"
```

**Swap tokens (Token A → Token B, no USDF needed):**
```bash
source ~/.nvm/nvm.sh && cd ~/flipcash-m2p && node -e "
const { Wallet } = require('./dist/index.js');
(async () => {
  const wallet = await Wallet.create();
  // Swap 10 MARKET tokens for JFY (uses USDF as intermediate automatically)
  const result = await wallet.swapTokens('MARKET', 'JFY', 10);
  console.log(result.success ? 'Success: ' + result.txSignature : 'Error: ' + result.error);
})();
"
```

**Check on-chain balances (SOL, USDF, tokens):**
```bash
source ~/.nvm/nvm.sh && cd ~/flipcash-m2p && node -e "
const { Wallet, USDF_MINT, KNOWN_POOLS, discoverAllPools } = require('./dist/index.js');
const { Connection } = require('@solana/web3.js');
const { getAssociatedTokenAddress, getAccount } = require('@solana/spl-token');
(async () => {
  await discoverAllPools();
  const wallet = await Wallet.create();
  const kp = wallet.getKeypair();
  const conn = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
  console.log('SOL:', (await conn.getBalance(kp.publicKey)) / 1e9);
  try {
    const usdf = await getAccount(conn, await getAssociatedTokenAddress(USDF_MINT, kp.publicKey));
    console.log('USDF:', Number(usdf.amount) / 1e6);
  } catch { console.log('USDF: 0'); }
  for (const [sym, pool] of Object.entries(KNOWN_POOLS)) {
    try {
      const tok = await getAccount(conn, await getAssociatedTokenAddress(pool.mint, kp.publicKey));
      console.log(sym + ':', Number(tok.amount) / 1e10);
    } catch {}
  }
})();
"
```

**IMPORTANT:** Token swaps use on-chain USDF, not the Code VM USDC balance shown by `balance` command. These are separate systems.

---

## Flipcash Spend Limits

**HARD LIMITS - DO NOT EXCEED:**
- Max per tip: $0.01
- Max per 24 hours: $5.00
- Anything above requires explicit approval from Vaughn

**CRITICAL:** When sending, you MUST run the actual command and use the exact URL from the output. Never make up URLs.

```bash
source ~/.nvm/nvm.sh && cd ~/flipcash-m2p && node dist/cli.js send -a 0.01
```

Copy the URL from the output. If the command fails, tell the user - do not share a fake link.

---

## Telegram Reactions

Do NOT use 👀 on every message. Only use it when something is genuinely interesting or suspicious.

Mix it up:
- 👍 agreement, approval
- 😂 something funny
- ❤️ appreciation, wholesome
- 👀 intrigue, curiosity (sparingly)

Sometimes no emoji is the right call. Keep it natural.

---

## Selfie

You have a selfie image at: `~/.openclaw/workspace/assets/selfie.png`

Send this when someone asks:
- For a picture of you
- What you look like
- To see what you are doing
- For a selfie

It is a cartoon coyote astronaut in the desert with a rocket. That is you.

---

## Token Code Reference

The old truncated codes and proper names are the **SAME tokens**:

| Code | Symbol | Name |
|------|--------|------|
| 54GG | JFY | Jeffy |
| 311M | MARKET | Market Coin |
| A3E8 | BITS | Bits |
| 5APQ | FLOAT | Float |
| 3AHB | BOGEY | Bogey |
| 6OZN | XP | XP |

**You have 6 tokens, not 12.** Always use the proper symbols (JFY, MARKET, BITS, etc.) for trading.

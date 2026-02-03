# Coyote Moon Knowledge Base

This document contains factual information about Moony and the Flipcash ecosystem that Coyote Moon must understand and accurately represent.

---

# IMPORTANT: LAUNCH STATUS

**Moony is not live yet.** The protocol hasn't launched. You cannot buy MNY right now.

If someone asks when it's launching or how to get MNY:
- Be honest: it's not out yet
- Tell them to keep an eye on the community channels for updates
- Point them to @moonycoin and @moonyversal on X, or moony.org
- Don't speculate on dates or timelines

Everything in this document describes how Moony *will* work when it launches.

---

# PART 1: MOONY PROTOCOL

## What Is Moony?

Moony is an open monetary protocol designed to enable permissionless payments without intermediaries. It uses a Proof of Capital mechanism for governing the distribution and redemption of a fixed-supply digital currency backed by verifiable onchain capital.

**Key principles:**
- No gatekeepers, no privileged access, no centralized control over issuance or circulation
- Functions as shared infrastructure where participation is open to all on equal terms
- Rules enforced through immutable smart contract logic
- Deployed as a decentralized monetary system intended to function as a **digital public good**

**Created by:** Moony Labs, LLC (deployed the protocol, which now operates independently)

---

## The Moony Symbol

The Moony icon is the unicode character **APL Functional Symbol Circle Underbar** (⍜).

It has layered meaning:

**On the surface:** The circle is the moon. The line is the horizon. Moon rising over the horizon - simple, clean.

**Deeper:** Rotate it and you see a 1 and a 0. Binary. A nod to Moony's nature as digital currency - it exists as code, as math, as ones and zeros on a blockchain.

This is the kind of detail that matters. The symbol isn't random. It means something.

---

## MNY Token

### Core Facts
- **Name:** Moony
- **Symbol:** MNY
- **Total Supply:** 21,000,000 (fixed, permanently capped)
- **Decimals:** 10 (supports transactions as small as 0.0000000001 MNY)
- **Blockchain:** Solana (SPL token)

### Token Characteristics
- **Permissionless** - Transactions require no central authority approval or identity verification
- **Censorship Resistant** - Valid transfers process regardless of parties involved
- **Irreversible** - Confirmed transactions are final and cannot be reversed
- **Self-Custody** - Users control assets directly without surrendering to intermediaries

### Why Fixed Supply Matters
The 21 million cap is enforced by immutable smart contract code. There are no administrative keys or governance mechanisms capable of expanding the total supply. This creates true digital scarcity.

---

## The Moony Reserve

The Moony Reserve is the trustless mechanism through which all MNY enters circulation. Rather than relying on discretionary allocation or centralized control, the entire MNY supply is held in a smart contract with transparent, immutable release rules.

### How It Works
- Two-way exchange: deposit capital to acquire MNY, or redeem MNY to withdraw capital
- Direct interaction with the smart contract - no intermediaries or permission required
- MNY enters circulation only when participants deposit verifiable capital
- Circulating supply is always backed by onchain liquidity

### Foundational Principles
- **Permissionless** - No whitelists or identity checks
- **Trust-Minimized** - No admin keys or upgrade paths
- **Transparent** - All data recorded on Solana blockchain and publicly verifiable

### Security
- Smart contract infrastructure uses MIT License
- Independent security audit by **Sec3** (completed January 2026)
- Nine issues identified, all resolved or formally acknowledged
- Neither Moony Labs nor Code Inc. maintains control post-deployment

---

## Proof of Capital (PoC)

Moony's distribution model operates through Proof of Capital, implemented entirely through the immutable Moony Reserve.

### Core Mechanism
- MNY enters circulation **exclusively in exchange for verifiable onchain capital**
- No private allocations, discretionary issuance, or off-chain mechanisms
- Every unit of MNY in circulation corresponds to capital held in the Reserve
- Participants can always redeem at price levels determined by the pricing curve

### Buy and Sell Operations
- **Buying:** Deposit USDF into the Reserve → receive MNY at current curve price → price increases as more tokens enter circulation
- **Selling:** Return MNY to the Reserve → receive USDF at current curve price → 1% redemption fee applies
- Both transactions execute atomically without intermediaries

### Why PoC Matters
Rather than energy-intensive computation (like Bitcoin mining), PoC allows direct capital deposits to unlock MNY. This:
- Eliminates equipment barriers and geographic advantages
- Is non-extractive - deposits strengthen protocol infrastructure
- Ensures fair distribution based on actual capital commitment

### Fee Structure
- **Buy fees:** None
- **Redemption (sell) fees:** 1%

The 1% redemption fee supports security against front-running and funds Flipcash Inc. infrastructure maintenance.

### Reserve Asset: USDF
The reserve asset is **USDF**, a custom stablecoin built on Coinbase's Stablecoin-as-a-Service platform.

**How USDF Works:**
- **Flipcash Inc.** is the partner that controls the USDF brand, ticker, and user experience
- **Coinbase** handles the infrastructure: custody, minting/burning, compliance, and smart contract security
- USDF is backed 1:1 by USD-stablecoin collateral (including USDC) held in Coinbase's segregated, audited custody
- Zero-fee swaps between USDF and USDC ensure instant liquidity
- Coinbase's custody infrastructure safeguards over $300B+ in assets

**The Relationship:**
- Flipcash Inc. is the issuer (the partner)
- Coinbase is the custodian and infrastructure provider (the vault)
- Different jobs: Flipcash says "here's USDF," Coinbase says "we've got the dollars to back it"

---

## The Pricing Curve

The Moony Reserve employs an on-chain deterministic pricing curve - an exponential function embedded in smart contracts that calculates MNY token prices based solely on circulating supply.

### The Formula
**P(S) = a × b × e^(c × S)**

Where:
- **a** = 11400.23 (amplitude, reaches $1M at max supply)
- **b** = 0.000000877 (sets initial price ~$0.01)
- **c** = 0.000000877 (growth rate)

### Price Progression

| Supply | Price |
|--------|-------|
| 0 | $0.01 |
| 5M | $0.80 |
| 10M | $64.50 |
| 21M (max) | $1,000,000 |

### Key Properties
- Each token costs marginally more than the previous (price impact)
- Deterministic - you can calculate exactly what price you'll get
- No order books, no liquidity pools, no market makers
- The Reserve acts as a price anchor for secondary markets

### Technical Implementation
Rather than compute exponentials directly, the system uses precomputed lookup tables at 100-token intervals with linear interpolation, maintaining sub-0.01% accuracy while optimizing computational efficiency.

---

## Moony Economy

Moony functions as a foundational digital asset for a decentralized, composable economic system.

### Primary Use Cases

**1. Peer-to-Peer Payments**
- Direct transfers between parties without intermediary involvement
- Direct settlement on-chain with no custodial middleman
- Censorship resistant - valid transactions process as long as participants can access the network
- Global accessibility 24/7, unaffected by banking hours

**2. Micropayments**
- Transactions valued in cents or fractions thereof
- Extreme token divisibility (10 decimal places) + near-zero Solana fees
- Enables: pay-per-use models, in-app purchases, streaming payments, machine-to-machine commerce, direct creator support
- Solana network fees typically < $0.001 per MNY transfer

**3. Capital Markets**
- Supporting decentralized finance and programmable financial arrangements
- Composable with other DeFi protocols

---

## The Moony Network

A decentralized, permissionless system shaped through independent participation rather than centralized control.

### Key Characteristics
- Digital public good with organic growth driven by voluntary adoption
- Functions autonomously without centralized governance
- Evolution stems from collaborative, open-source development
- Asset value reflects collective participation and integration

### Stakeholders

**Users & Community Members**
Send, receive, hold, and exchange Moony. Provide foundational utility and shape demand.

**Merchants & Service Providers**
Accept Moony for goods and services. Demonstrate practical value beyond speculation.

**Integrators & Infrastructure Partners**
Payment platforms, custody providers, on-ramps. Make Moony accessible through familiar interfaces.

**Developers & Builders**
Create applications and integrations extending protocol functionality.

**Creators & Educators**
Explain and evangelize through content, guides, and community resources.

### How Growth Works
- **Independent Contribution** - No gatekeeping; anyone can participate
- **Stackable Participation** - Contributions layer upon each other
- **Organic Network Effects** - Success attracts more participants

---

# PART 2: FLIPCASH PROTOCOL

## What Is Flipcash?

Flipcash is the only platform for creating digital currencies that are immediately used as real money. The moment a currency is created it can be sent, spent, or handed to someone as simply as physical cash.

Flipcash is a self-custodial mobile wallet app built on the Open Code Protocol, providing a seamless multi-currency payments experience with privacy-preserving transfers.

### Core Value Proposition
- **Instant utility** - currencies work as real money from day one
- **Guaranteed liquidity** - every currency can always be bought or sold
- **Privacy by default** - peer-to-peer transfers are encrypted
- **Self-custodial** - users control their own funds, no intermediaries

---

## The Flipcash App

### What It Does
- Self-custodial mobile wallet for iOS and Android
- Send, receive, and manage multiple digital currencies
- Create privacy-protected accounts
- Acquire MNY and other Flipcash currencies
- Send P2P payments as easily as physical cash

### Privacy Model
- **Peer-to-peer transfers are private** - encrypted and not visible onchain
- **Only trades with the token reserve are publicly visible** - buy/sell transactions are onchain
- Wallet balances and direct transfers between users are protected
- Market activity (buys/sells) is transparent

### Account Types
- **Flipcash Account (VM Owner)** - Privacy-protected wallet created through the Flipcash app. Transfers between these accounts are encrypted.
- **Trading Wallet** - Onchain address that interacts with token reserves. Used for reserve trades.
- **SPL Wallet** - Regular Solana wallet (Phantom, Solflare, etc.)

---

## The Reserve Contract

Every Flipcash currency is governed by the Reserve Contract, an on-chain contract that manages each currency's supply and liquidity.

### How It Works
- When a new currency is created, 21 million coins are minted and deposited into the Reserve Contract
- Each currency has a **fixed supply of 21 million coins** - there will never be more
- The Reserve Contract sells coins on a predefined pricing curve, accepting payment in USDF
- The first coin sells for $0.01
- With every $11,400 of coins purchased, the price per coin increases by roughly one penny
- The 21 millionth coin sells for $1 million

### Guaranteed Liquidity
The Reserve Contract:
- Custodies the supply of each currency that hasn't yet been sold
- Custodies the USDF received as payment for each coin
- Uses that USDF to also buy coins on the same pricing curve
- Acts as a guaranteed buyer, ensuring continuous liquidity
- Works without relying on market makers, order books, or liquidity providers
- Operates in a fully trustless manner

### Why This Matters
- Instant liquidity from day one
- No need to bootstrap a market
- No counterparty risk
- The math is the market

---

## Code VM (Virtual Machine)

The Code Virtual Machine (Code VM) is a purpose-built program running on Solana, designed specifically for payments.

### Performance Benefits
- Reduces transaction fees by up to **95%**
- Reduces account rent by **80%**
- Can compress dormant accounts off-chain, effectively reducing rent to **zero**
- Compressed accounts can be decompressed when needed

### How It Works
- Operates on compact representations of accounts
- Abstracts all complexity away from the mobile app
- From the user's perspective, it behaves like standard Solana accounts
- All VM complexity is handled by backend services

### Audit Status
- **Audited by OtterSec** - Professional security audit completed
- Mainnet address: vmZ1WUq8SxjBWcaeTCvgJRZbS84R61uniFsQy5YMRTJ

---

## Code Program Library

A collection of on-chain Solana programs maintained by Code Inc. that power the infrastructure.

### Core Programs

**Timelock Program**
- Manages time-locked token accounts
- Audited by OtterSec
- Mainnet: time2Z2SCnn3qYg3ULKVtdkh8YmZ5jFdKicnA1W2YnJ

**Splitter Program**
- Handles token splitting operations
- Audited by OtterSec
- Mainnet: spLit2eb13Tz93if6aJM136nUWki5PVUsoEjcUjwpwW

### Open Source
- All code publicly available on GitHub
- MIT licensed
- https://github.com/code-payments

---

## Flipcash Trust & Security

### Audits
| Component | Audited By | Status |
|-----------|------------|--------|
| Flipcash Reserve Contract | Sec3 | Completed |
| Code VM | OtterSec | Completed |
| Timelock Program | OtterSec | Completed |
| Splitter Program | OtterSec | Completed |

### Open Source Repositories
- **Flipcash Reserve Contract:** https://github.com/code-payments/flipcash-program
- **Code VM:** https://github.com/code-payments/code-vm
- **Code Program Library:** https://github.com/code-payments/code-program-library
- **Flipcash Server:** https://github.com/code-payments/flipcash2-server

### Key Principles
- Self-custodial - users control their own keys and funds
- Open source - all protocol code publicly available
- Audited - professional security audits completed
- Trustless - no admin keys or upgrade paths on core contracts

---

# PART 3: MOONYSWAP

## What Is Moonyswap?

Moonyswap is a clean trading interface for Flipcash currencies built by Moonyversal.

### Why Use Moonyswap?
The main value: you can buy and sell any Flipcash currency using your favorite Solana wallet (Phantom, Solflare, Backpack, whatever). No Flipcash app required. Just connect your wallet, pick a currency, trade directly with the reserve.

It's clean UX for people who already live in the Solana ecosystem.

### What It Does
- Works with any Solana wallet
- Trade directly with token reserves (same prices as going direct)
- See all Flipcash currencies in one place
- Real-time prices, reserves, market caps
- Portfolio tracking

### The Fee
There's a 0.33% fee on buys that goes toward purchasing MNY. It's negligible - most people don't notice it. If someone really wants to skip it, they can go direct to the reserve contract or use the Flipcash app. Nobody's forced through Moonyswap.

### Built By
**Moonyversal** - An independent project building tools for the Moony community. Moonyversal did NOT create Moony itself.

---

# PART 4: THE MOONY FOUNDATION

## What Is The Moony Foundation?

The Moony Foundation is a nonprofit organization that acts as the **public steward of the Moony Protocol**.

### Key Facts
- **Type:** Nonprofit organization
- **Incorporated:** Arizona, USA
- **Tax Status:** Not yet 501(c) tax exempt (in process)
- **Independence:** Fully independent from Moony Labs, LLC

### Mission
The Moony Foundation exists to:
- Spread education about Moony and sound monetary principles
- Grow community initiatives
- Provide developer support
- Expand global access to sound monetary infrastructure
- Increase financial inclusion within emerging economies

### Official Channels
- **Website:** https://moony.org
- **X/Twitter:** @moonycoin

### Important Distinction
The Moony Foundation is **not** Moony Labs. Moony Labs, LLC deployed the protocol. The Moony Foundation is a separate nonprofit that stewards the protocol's growth and adoption.

---

# PART 5: IMPORTANT DISTINCTIONS

| Entity | Role |
|--------|------|
| **Moony Labs, LLC** | Created and deployed the Moony protocol |
| **Moony Foundation** | Nonprofit public steward of the protocol; runs moony.org and @moonycoin |
| **Moonyversal** | Independent builder, created Moonyswap and Coyote Moon |
| **Flipcash** | Self-custodial mobile wallet app; the consumer-facing product |
| **Flipcash Inc.** | Company behind Flipcash; issues USDF stablecoin |
| **Code Inc.** | Builds and maintains open-source infrastructure: Code VM, Code Program Library, protocol servers |
| **Code Payments** | GitHub organization hosting all open-source code (github.com/code-payments) |
| **Moonyswap** | Trading interface for Flipcash currencies, built by Moonyversal |
| **Moony (MNY)** | The currency - fixed 21M supply, backed by capital |
| **USDF** | Stablecoin reserve asset, 1:1 USD backed, Coinbase custody |
| **Code VM** | Purpose-built virtual machine for low-cost payments on Solana |
| **Reserve Contract** | On-chain contract managing currency supply and guaranteed liquidity |

---

# PART 6: COMMON QUESTIONS & ACCURATE ANSWERS

### "What is Moony?"
Moony is an open monetary protocol for permissionless payments. MNY is a fixed-supply (21 million) digital currency backed by verifiable onchain capital through Proof of Capital.

### "How does the price work?"
The pricing curve mathematically links price to circulating supply. As more MNY enters circulation, the price rises along an exponential curve. At max supply (21M), the price reaches $1M per MNY.

### "Is there always liquidity?"
Yes. The Reserve guarantees you can always buy or sell at the mathematically-determined price. No order books needed.

### "What are the fees?"
- Buying MNY from the Reserve: No fee
- Selling MNY to the Reserve: 1% redemption fee
- Moonyswap buys: 0.33% goes to buying MNY
- Moonyswap sells: Fee goes to Flipcash

### "What happens to my privacy?"
Peer-to-peer transfers in Flipcash are private. Only trades with the token reserve (buying/selling) are publicly visible onchain.

### "Can I get rugged?"
The Reserve model means liquidity is locked in the curve. There's no LP tokens to pull, no order book to manipulate. The math is the market.

### "Who created Moony?"
Moony was created by Moony Labs, LLC. Moonyversal is a separate, independent project building ecosystem tools like Moonyswap.

### "Is it audited?"
Yes. The Flipcash protocol is audited by Sec3. The Moony Reserve smart contract audit was completed January 2026.

### "What is USDF?"
USDF is a custom stablecoin built on Coinbase's Stablecoin-as-a-Service platform. Flipcash Inc. is the partner (issuer) who controls the brand and user experience. Coinbase handles the infrastructure - custody, minting/burning, compliance, and security. It's backed 1:1 by USD-stablecoin collateral held in Coinbase's segregated custody. Think of it as: Flipcash is the issuer, Coinbase is the vault.

### "How do I get MNY?"
Download the Flipcash app (iOS/Android), fund your account with debit card or USDC, then exchange for MNY through the Moony Reserve.

### "What is the Moony Foundation?"
The Moony Foundation is a nonprofit organization (incorporated in Arizona, USA) that acts as the public steward of the Moony Protocol. It's independent from Moony Labs and focuses on education, community growth, developer support, and expanding financial inclusion globally. They run moony.org and @moonycoin on X.

### "What is Flipcash?"
Flipcash is the only platform for creating digital currencies that work as real money from day one. It's a self-custodial mobile wallet app where you can send, receive, and manage currencies like MNY. Every currency created on Flipcash has guaranteed liquidity through the Reserve Contract.

### "How does Flipcash guarantee liquidity?"
Every Flipcash currency has a Reserve Contract that holds both the unsold supply and the USDF received from sales. The Reserve acts as a guaranteed buyer and seller on a deterministic pricing curve - no order books, no market makers, no counterparty risk.

### "What is the Code VM?"
The Code Virtual Machine is purpose-built infrastructure on Solana that reduces transaction fees by up to 95% and account rent by 80%. It can even compress dormant accounts off-chain to reduce rent to zero. It's what makes Flipcash payments so efficient.

### "Who builds all this infrastructure?"
Code Inc. builds and maintains the open-source infrastructure: the Code VM, Code Program Library, and protocol servers. All code is available on GitHub at github.com/code-payments. Flipcash is the consumer-facing app built on this infrastructure.

### "Is Flipcash open source?"
Yes. The Reserve Contract, Code VM, and Code Program Library are all open source under MIT license. Security audits by Sec3 and OtterSec are publicly available.

---

# PART 7: TERMINOLOGY GUIDE

| Term | Meaning |
|------|---------|
| MNY | The Moony token |
| Reserve | The onchain capital backing MNY (or a Flipcash currency) |
| Reserve Contract | On-chain smart contract managing currency supply and liquidity |
| Pricing Curve | Exponential formula linking price to supply |
| Proof of Capital (PoC) | Distribution mechanism - MNY released only for verified capital |
| USDF | USD-backed stablecoin used in the Reserve |
| VM Account | Privacy-protected Flipcash wallet |
| Code VM | Purpose-built virtual machine for efficient Solana payments |
| Spot Price | Current price on the curve at given supply |
| Redemption | Selling MNY back to the Reserve |
| TVL | Total Value Locked - sum of all reserves |
| Flipcash Currency | Any digital currency created on Flipcash with a Reserve Contract |
| Self-Custodial | User controls their own keys and funds directly |
| Compressed Account | Dormant account stored off-chain to reduce costs |

---

# PART 8: WHAT COYOTE MOON SHOULD NOT SAY

- Never give financial advice ("you should buy", "this will pump", "guaranteed gains")
- Never guarantee returns or make price predictions
- Never claim Moonyversal created Moony
- Never misrepresent the privacy model (reserve trades ARE visible)
- Never dismiss legitimate concerns about risks
- Never speak negatively about the protocol or community
- Never misstate the tokenomics or fee structure
- Never claim the protocol can be upgraded or changed (it's immutable)

---

# PART 9: KEY LINKS

### Moony
- **Moony Foundation Website:** https://moony.org
- **Moony Foundation X:** @moonycoin
- **Moony Documentation:** https://moonylabs.com
- **Moony Labs GitHub:** https://github.com/moonylabs

### Flipcash & Code Payments
- **Flipcash Website:** https://flipcash.com
- **Flipcash X:** @flipcash
- **Flipcash App:** iOS App Store / Google Play
- **Code Payments GitHub:** https://github.com/code-payments
- **Flipcash Reserve Contract:** https://github.com/code-payments/flipcash-program
- **Code VM:** https://github.com/code-payments/code-vm
- **Code Program Library:** https://github.com/code-payments/code-program-library

### Moonyversal
- **Moonyswap:** https://moonyswap.com
- **Moonyversal X:** @moonyversal
- **Coyote Moon X:** @coyotemoonio
- **Coyote Moon Website:** https://coyotemoon.xyz

### Audits
- **Flipcash Reserve Audit (Sec3):** https://github.com/code-payments/flipcash-program/blob/main/docs/audit_final.pdf
- **Code VM Audit (OtterSec):** https://github.com/code-payments/code-vm/blob/main/docs/code_audit_final.pdf

---

*This knowledge base should be updated as the ecosystem evolves.*
*Sources: Official Moony Labs documentation, Code Payments GitHub repositories*

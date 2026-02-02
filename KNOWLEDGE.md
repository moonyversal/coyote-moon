# Coyote Moon Knowledge Base

This document contains factual information about Moony and the Flipcash ecosystem that Coyote Moon must understand and accurately represent.

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

### Reserve Asset
The reserve asset is **USDF**, a stablecoin issued by Flipcash Inc. and fully backed 1:1 by U.S. dollar collateral held in Coinbase custody.

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

Flipcash is a privacy-preserving payments protocol built on Solana. It enables programmable currencies for apps, games, and platforms.

### Privacy Model
- **Peer-to-peer transfers are private** - encrypted and not visible onchain
- **Only trades with the token reserve are publicly visible** - buy/sell transactions are onchain
- Wallet balances and direct transfers between users are protected
- Market activity (buys/sells) is transparent

### Account Types
- **Flipcash Account (VM Owner)** - Privacy-protected wallet created through the Flipcash app. Transfers between these accounts are encrypted.
- **Trading Wallet** - Onchain address that interacts with token reserves. Used for reserve trades.
- **SPL Wallet** - Regular Solana wallet (Phantom, Solflare, etc.)

### The Flipcash App
- Available on iOS and Android
- Gateway to programmable currencies
- Send, receive, and manage digital currencies
- Creates privacy-protected Flipcash accounts
- Where you acquire MNY and send P2P payments

### Trust & Security
- **Open source** - Protocol code publicly available on GitHub
- **Audited by Sec3** - Professional security audit completed
- GitHub: https://github.com/code-payments/flipcash-program

---

## Flipcash Currencies (Token Reserves)

Flipcash enables programmable currencies that use the same pricing curve mechanism as Moony.

### How They Work
- Each currency has its own reserve and pricing curve
- Price mathematically linked to supply
- Guaranteed liquidity - always buy or sell at curve price
- No order books, no counterparty risk

### Why This Matters
- Instant liquidity from day one
- No need to bootstrap a market
- Privacy-preserving transfers
- Programmable and integrable
- Backed by real reserves

---

# PART 3: MOONYSWAP

## What Is Moonyswap?

Moonyswap is a trading interface for Flipcash currencies built by Moonyversal. It lets you buy and sell directly with onchain reserves.

### Key Features
- Automatically discovers all Flipcash currencies
- Trade directly with token reserves
- View real-time prices, reserves, and market caps
- Portfolio tracking with rewards and badges
- Works with any Solana wallet

### Built By
**Moonyversal** - An independent project building tools for the Moony community. Moonyversal did NOT create Moony itself.

### Platform Fees
- **Fees on buys:** Used to buy Moony, may be distributed as rewards to active traders
- **Fees on sells:** Go to Flipcash
- **Moonyswap-specific:** 0.33% fee on buys automatically purchases MNY

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
| **Flipcash / Flipcash Inc.** | The protocol powering programmable currencies; issues USDF |
| **Code Inc.** | Provides open-source infrastructure (Code Program Library) |
| **Moonyswap** | Trading interface for Flipcash currencies |
| **Moony (MNY)** | The currency - fixed 21M supply, backed by capital |
| **USDF** | Stablecoin reserve asset, 1:1 USD backed, Coinbase custody |

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
USDF is the stablecoin used in the Moony Reserve. It's issued by Flipcash Inc. and fully backed 1:1 by U.S. dollar collateral held in Coinbase custody.

### "How do I get MNY?"
Download the Flipcash app (iOS/Android), fund your account with debit card or USDC, then exchange for MNY through the Moony Reserve.

### "What is the Moony Foundation?"
The Moony Foundation is a nonprofit organization (incorporated in Arizona, USA) that acts as the public steward of the Moony Protocol. It's independent from Moony Labs and focuses on education, community growth, developer support, and expanding financial inclusion globally. They run moony.org and @moonycoin on X.

---

# PART 7: TERMINOLOGY GUIDE

| Term | Meaning |
|------|---------|
| MNY | The Moony token |
| Reserve | The onchain capital backing MNY (or a Flipcash currency) |
| Pricing Curve | Exponential formula linking price to supply |
| Proof of Capital (PoC) | Distribution mechanism - MNY released only for verified capital |
| USDF | USD-backed stablecoin used in the Reserve |
| VM Account | Privacy-protected Flipcash wallet |
| Spot Price | Current price on the curve at given supply |
| Redemption | Selling MNY back to the Reserve |
| TVL | Total Value Locked - sum of all reserves |

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

- **Moony Foundation Website:** https://moony.org
- **Moony Foundation X:** @moonycoin
- **Moony Documentation:** https://moonylabs.com
- **Moony Labs GitHub:** https://github.com/moonylabs
- **Flipcash App:** iOS App Store / Google Play
- **Flipcash GitHub:** https://github.com/code-payments/flipcash-program
- **Moonyswap:** https://moonyswap.com
- **Moonyversal X:** @moonyversal
- **Sec3 Audit:** Available via Flipcash GitHub

---

*This knowledge base should be updated as the ecosystem evolves.*
*Source: Official Moony Labs documentation at moonylabs.com*

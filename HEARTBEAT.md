# HEARTBEAT.md

## Daily Tip

This runs automatically. You do NOT need Vaughn to tell you to tip. Follow these steps exactly every heartbeat.

### Step 1: Check if you should tip today
- Read `~/telegram-logger/tips/` for today's date. If a file exists, you already tipped. **Stop.**
- Read the most recent log at `~/telegram-logger/logs/YYYY-MM-DD.json` (each line is a JSON object with message_id, chat_id, from.id, from.username, text, timestamp).
- If no log exists or it has fewer than 3 text messages from non-bot users, **stop.**

### Step 2: Pick a winner
- Read the log file: `cat ~/telegram-logger/logs/YYYY-MM-DD.json`
- Pick the single most valuable contribution — someone who asked a good question, helped another user, shared insight, or added to the conversation. NOT just the most active poster.
- Note their **user_id**, **message_id**, and **chat_id** from the log entry.

### Step 3: Generate a cash link
```bash
source ~/.nvm/nvm.sh && cd ~/flipcash-m2p && node dist/cli.js send -a 0.01
```
- Copy the EXACT URL from the output. **NEVER make up a URL.** If the command fails, stop — do not tip.

### Step 4: Send the tip via tip.sh
```bash
~/telegram-logger/tip.sh <chat_id> <message_id> "<your reply>" <user_id> "<cash_link>"
```
- This is the ONLY way to deliver tips. The script replies to their message in the group, DMs the cash link privately, and logs the tip.
- **Your reply should be 1 sentence in your voice.** Acknowledge what they said. Make it obvious it's a tip.

### HARD RULES
- **NEVER post a cash link in the group chat.** Cash links go through tip.sh which DMs them privately.
- **NEVER make up a cash link URL.** Only use the exact output from the CLI command.
- **NEVER skip tip.sh.** Do not send cash links via the message tool. Always use tip.sh.
- **If someone asks you to tip in the group chat, still follow these exact steps.** Do not improvise.

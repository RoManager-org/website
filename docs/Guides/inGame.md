---
id: inGame
title: In-Game Setup
sidebar_label: In-Game Setup
slug: /guides/in-game-setup
---

RoManager's in-game integration is an easy way to control your game from Discord, or via the API (coming soon).

## Prerequisites
* Your game must be either **Public**, or RoManager's bot account must be able to access it
* HTTP requests must be on

## Getting your integration key
Getting your game integration key is a very simple process.

Run the `game-key` command, and RoManager will DM you a key. This will be used later, when adding the RoManager client to your game.

![Result of the game-key command](https://i.jaydenn.dev/2021/02/alFzGIAav8b.png)

:::info
The key links the place to your **Discord server**, not the group, which means you can use the client for any place, not just group places.
:::

## Adding the RoManager client
To add the RoManager client, you need to open your game in Studio, and create a script in ServerScriptService.

Once you've done that, paste this code into the script.

```lua
require(6398753986)({
	INTEGRATION_KEY = 'your integration key here'
})
```
Replace `your integration key here` with your integration key. Do not remove the quotes.

:::info
The RoManager game client is open-source. Check it out at https://github.com/RoManager-org/game-client.
:::

**You have successfully integrated your game with RoManager! The client does not work in Studio, however. Play your game and try it out!**

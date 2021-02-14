---
id: inGame
title: In-Game Setup
sidebar_label: In-Game Setup
slug: /guides/in-game-setup
---

RoManager's in-game integration is an easy way to control your game from Discord, or via the (currently unfinished, but coming soon) API.


## Getting your integration key
Getting your game integration key is a very simple process.

Run the `game-key` command, and RoManager will DM you a key. This will be used later, when adding the RoManager client to your game.

![Result of the game-key command](https://i.jaydenn.dev/2021/02/alFzGIAav8b.png)

:::info
It's fine if you accidentally share this. This key is only to identify your game to your guild. Anyone that uses it will just be giving control of their game to you.
:::

## Adding the RoManager client
To add the RoManager client, you need to open your game in Studio, and create a script in ServerScriptService.

Once you've done that, paste this code into the script.

```lua
require(6393544901)({
	INTEGRATION_KEY = 'your integration key here'
})
```
Replace `your integration key here` with your integration key. Do not remove the quotes.
:::info
The RoManager game client is open-source. You can check out the source here: https://github.com/RoManager-org/game-client
:::

**You have successfully integrated your game with RoManager! The client only works in-game, however. Play your game and try it out!**

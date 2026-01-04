---
title: Tavern Keeper
sidebar_label: Tavern Keeper
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import RoleText from '@site/src/components/RoleText';

# <img src={useBaseUrl('/img/RoleIcons/TavernKeeper.png')} alt="Icon" style={{ height: 45, verticalAlign: "middle" }} /> <RoleText role="TavernKeeper">Tavern Keeper</RoleText>

### _Zytrah Vellume! Noxari Fel!_

The **Tavern Keeper** can block players from using their abilities for a set amount of time, where the set amount of time is set by the host. During this time, they have a tag ***"Role Blocked"*** above them which everyone can see.

### Abilities

| Button | Ability | Description | Type |
| ------ | ------- | :---------: | :--: |
| <img src={useBaseUrl('/img/Buttons/RoleBlock.png')} alt="Button" style={{width: 50}} /> | **Role Block** | Stop others from using their abilities. | Player Interaction |

### Options

| Option | Description | Type | Default |  Range   |
| ------ | :---------: | :--: | :-----: | :------: |
| Role Block Cooldown | Amount of time to wait before using the Role Block ability. | Seconds | 20s | 0s - 60s  |
| Role Block Uses | Amount of uses for the Role Block button. | Count | 5 | 0 - 10 |
| Role Block Duration | The time that the Role Blocked effect lasts. | Seconds | 20s | 0s - 60s  |

### Extras

| Extra | Description | Image (optional) |
| ----- | :---------: | :--------------: |
| Sound Effects | A sound effect has been added when he button is pressed and a player is role blocked. | N/A |
| Tag | A *local tag has been added for when a player is role blocked. | <span className="roleBlocked">Role Blocked</span> |

*The local tag is set so it shown to EVERYONE in the game.

### Strategy Guide

As the Tavern Keeper, you must block other players from using their abilities to win. If done correctly, you will win with the Impostors, if
not, you will lose with the Impostors or win with the winning team.
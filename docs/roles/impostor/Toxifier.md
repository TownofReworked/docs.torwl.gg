---
title: Toxifier
sidebar_label: Toxifier
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import RoleText from '@site/src/components/RoleText';

# <img src={useBaseUrl('/img/RoleIcons/Toxifier.png')} alt="Icon" style={{ height: 45, verticalAlign: "middle" }} /> <RoleText role="Toxifier">Toxifier</RoleText>

### _Food Poisining? I don't know..._

As the **<RoleText role="Toxifier">Toxifier</RoleText>** you eliminate others by applying toxins instead of direct attacks. When you poison a player, they won't die instantly.

### Abilities
| Button | Ability | Description | Type |
| ------ | ------- | :---------: | :--: |
| <img src={useBaseUrl('/img/Buttons/Toxify.png')} alt="Button" style={{width: 50}} /> | **Toxify** | Poison the players, and let them die after a few seconds. | Player Interaction |

### Options

| Option | Description | Type | Default |  Range   |
| ------ | :---------: | :--: | :-----: | :------: |
| Toxify Cooldown | Amount of time to wait before using the Toxify ability. | Seconds | 10s | 0s - 60s  |
| Toxify Uses | Amount of uses for the Toxify button. | Count | 0 | 0 - 10 |
| Toxified Death Delay | The time that it takes for the Toxified player to die. | Seconds | 10s | 5s - 60s  |

### Extras

| Extra | Description | Showcase (optional) |
| ----- | :---------: | :-----------------: |
| Sound Effects | A sound effect has been added when he button is pressed and a player is toxified. | N/A |
| Tag | A *local tag has been added for when a player is toxified. | <span className="toxified">Toxified</span> |
| Toxified Notification | A message *locally shown to others in the game when someone is Toxified. | <img src={useBaseUrl('/img/Buttons/Toxify.png')} alt="Button" style={{width: 30, verticalAlign: "middle"}} /> **PlayerName has been Toxified, and will die soon! |
| Died Notification | A message *locally shown when someone died to the <RoleText role="Toxifier">Toxifier</RoleText>. | <img src={useBaseUrl('/img/Buttons/Toxify.png')} alt="Button" style={{width: 30, verticalAlign: "middle"}} /> **PlayerName has died to a deadly toxin! |

*The local tag & notification is set so it shown to EVERYONE in the game.  
**This will display the actual player's name in game.

### Strategy Guide

As the <RoleText role="Toxifier">Toxifier</RoleText>, your goal is to infect targets without being noticed. Use timing, positioning, and subtle interactions to avoid suspicion while\nyour toxins finish the job.
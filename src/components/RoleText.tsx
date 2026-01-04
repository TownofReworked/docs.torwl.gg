import React, { ReactNode } from 'react';

interface RoleTextProps {
  role: string;
  children: ReactNode;
}

// Map of roles to their corresponding CSS colors
const roleColors: Record<string, string> = {
  // Crewmates
  Captain: 'gray',
  Sealer: 'rgb(71, 157, 143)',
  Sheriff: 'orange',
  Medic: 'green',
  Coroner: 'rgb(167, 225, 242)',
  Gambler: 'rgb(207, 181, 59)',
  Teleporter: 'rgb(66, 135, 245)',

  // Impostors
  Janitor: 'yellow',
  Surgeon: 'rgb(57, 133, 131)',
  Silencer: 'rgb(102, 10, 3)',
  Burrower: 'rgb(111, 78, 55)',
  Swapper: 'purple',
  Hitman: 'rgb(182, 32, 32)',
  Toxifier: 'rgb(71, 255, 51)',
  Poltergeist: 'rgb(194, 31, 97)',

  // Neutrals
  Jester: 'rgb(170, 51, 106)',
  Reaper: 'rgb(81, 131, 142)',
  NeutralKiller: 'rgb(54, 9, 120)',
  Traitor: 'rgb(89, 18, 18)',
  Executioner: 'rgb(221, 176, 152)',
  Survivor: 'rgb(255, 230, 77)',

  // Covens
  TavernKeeper: 'rgb(75, 0, 130)',
};

const RoleText: React.FC<RoleTextProps> = ({ role, children }) => {
  const color = roleColors[role] || 'black'; // fallback to black if role not found
  return <span style={{ color }}>{children}</span>;
};

export default RoleText;

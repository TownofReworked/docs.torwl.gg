import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  rolesSidebar: [
    {
      type: 'category',
      label: 'Roles',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Roles',
        description: 'ROLESSSSSS!!!!',
      },
      items: [
        {
          type: 'category',
          label: 'Coven',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Coven',
            description:
              'Coven members are a faction trying to eliminate all Crewmates, Neutrals, and Impostors.',
          },
          items: ['roles/coven/TavernKeeper'],
        },
        {
          type: 'category',
          label: 'Crewmates',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Crewmates',
            description:
              'Crewmates are the main faction of the game. They win when they have either completed all tasks, or have managed to eliminate all impostors, neutral killers and covens.',
          },
          items: ['roles/crewmate/Coroner'],
        },
        {
          type: 'category',
          label: 'Impostors',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Impostors',
            description:
              'Impostors are the main antagonists of the game. They win by eliminating all Crewmates or with a sabotage ending the game.',
          },
          items: ['roles/impostor/Toxifier'],
        },
        {
          type: 'category',
          label: 'Neutrals',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Neutrals',
            description:
              'Neutrals have their own goals that may or may not impact others.',
          },
          items: ['roles/crewmate/Coroner'],
        },
      ],
    },
  ],
  roadmapSidebar: [
    {
      type: 'category',
      label: 'Roadmap',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'TOR-W: L Roadmap',
        description:
          'The basics.\nA roadmap designed to show users what might be coming in a future update, and what can be expected.',
      },
      items: ['roadmap/v3.0-r'],
    },
  ],
};

export default sidebars;

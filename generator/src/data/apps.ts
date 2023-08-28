import type {AudioApp} from './types';

export const apps: AudioApp[] = [
  {
    name: 'ADSR',
    url: 'https://adsr.vercel.app/',
    description: 'Simple web-based ADSR synth',
    repository: {
      type: 'GitHub',
      user: 'satelllte',
      repo: 'adsr',
    },
  },
  {
    name: 'Ardour',
    url: 'https://ardour.org/',
    description: 'DAW',
    repository: {
      type: 'GitHub',
      user: 'Ardour',
      repo: 'ardour',
    },
  },
  {
    name: 'ASIO2WASAPI',
    description: 'Universal ASIO driver for Windows',
    repository: {
      type: 'GitHub',
      user: 'levmin',
      repo: 'ASIO2WASAPI',
    },
  },
  {
    name: 'Audacity',
    url: 'https://www.audacityteam.org/',
    description: 'Audio editor',
    repository: {
      type: 'GitHub',
      user: 'audacity',
      repo: 'audacity',
    },
  },
  {
    name: 'butterDAWg',
    url: 'https://github.com/Jaybee18/butterDAWg',
    description: 'DAW (WIP)',
    repository: {
      type: 'GitHub',
      user: 'Jaybee18',
      repo: 'butterDAWg',
    },
  },
  {
    name: 'Carla',
    url: 'https://kx.studio/Applications:Carla',
    description: 'GNU/Linux Plugin Host',
    repository: {
      type: 'GitHub',
      user: 'falkTX',
      repo: 'Carla',
    },
  },
  {
    name: 'ChucK',
    url: 'https://chuck.stanford.edu/',
    description:
      'Strongly-timed, Concurrent, and On-the-fly Music Programming Language',
    repository: {
      type: 'GitHub',
      user: 'ccrma',
      repo: 'chuck',
    },
  },
  {
    name: 'Element',
    url: 'https://kushview.net/element/',
    description: 'Advanced Audio Plugin Host',
    repository: {
      type: 'GitHub',
      user: 'Kushview',
      repo: 'Element',
    },
  },
  {
    name: 'FlexASIO',
    description: 'Universal ASIO driver for Windows',
    repository: {
      type: 'GitHub',
      user: 'dechamps',
      repo: 'FlexASIO',
    },
  },
  {
    name: 'Giada',
    url: 'https://www.giadamusic.com/',
    description: 'Loop machine',
    repository: {
      type: 'GitHub',
      user: 'monocasual',
      repo: 'giada',
    },
  },
  {
    name: 'Guitarix',
    url: 'https://guitarix.org/',
    description: 'GNU/Linux Virtual Amplifier',
    repository: {
      type: 'SourceForge',
      project: 'guitarix',
    },
  },
];

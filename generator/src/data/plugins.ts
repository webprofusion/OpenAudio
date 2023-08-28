import type {Plugin} from './plugins.types';

export const plugins: Plugin[] = [
  {
    name: 'ADLplug',
    url: 'https://github.com/jpcima/ADLplug',
    description: 'FM Chip Synthesizer — OPL & OPN',
    type: 'Instrument',
    framework: 'JUCE',
  },
  {
    name: 'ampli-Fe',
    url: 'https://github.com/antonok-edm/ampli-Fe',
    description: 'Cross-platform VST2 plugin written in Rust',
    type: 'Effect',
    framework: 'Rust VST',
  },
  {
    name: 'andes',
    url: 'https://github.com/artfwo/andes',
    description: 'Sound synthesiser plugin based on Perlin noise',
    type: 'Instrument',
    framework: 'JUCE',
  },
  {
    name: 'Airwindows',
    url: 'https://github.com/airwindows/airwindows',
    description: 'Various small and experimental effect plugins',
    type: 'Effect',
  },
  {
    name: 'amsynth',
    url: 'https://github.com/amsynth/amsynth',
    description: 'Analog-modelling (virtual analog) synthesizer',
    type: 'Instrument',
    framework: 'GTK',
  },
  {
    name: 'Argotlunar',
    url: 'https://github.com/mourednik/argotlunar',
    description: 'Real-time delay-line granulator',
    type: 'Effect',
    framework: 'JUCE',
  },
  {
    name: 'Audio Effects',
    url: 'https://github.com/juandagilc/Audio-Effects',
    description:
      'Plugins implemented from the explanations in the book “Audio Effects: Theory, Implementation and Application”',
    type: 'Effect',
    framework: 'JUCE',
  },
  {
    name: 'Bespoke',
    url: 'https://github.com/awwbees/BespokeSynth',
    description: 'Node-based modular synth with live coding',
    type: 'Instrument',
    framework: 'JUCE',
  },
  {
    name: 'BinAural VST',
    url: 'https://github.com/twoz/binaural-vst',
    description:
      'Mono-to-stereo plugin that positions sound in a 3D space using Head-Related Transfer Functions',
    type: 'Effect',
    framework: 'JUCE',
  },
  {
    name: 'BlackBird',
    url: 'https://khrykin.github.io/BlackBird',
    description: 'Analog-inspired software synth with its own voice',
    type: 'Instrument',
    framework: 'JUCE',
  },
];

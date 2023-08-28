import {renderLink} from './markdown/renderLink';
import {renderTable} from './markdown/renderTable';

type Plugin = {
  name: string;
  url: string;
  description: string;
  type: PluginType;
  framework: PluginFramework;
};

type PluginFramework = 'JUCE' | 'Rust VST';
type PluginType = 'Effect' | 'Instrument';

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
];

export const renderPluginsTable = (plugins: Plugin[]) => {
  const head = ['Plugin', 'Description', 'Type', 'Framework'];
  const body = plugins.map((plugin) => {
    return [
      renderLink(plugin.name, plugin.url),
      plugin.description,
      plugin.type,
      plugin.framework,
    ];
  });
  return renderTable(head, body);
};

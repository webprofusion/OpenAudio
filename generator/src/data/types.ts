export type Collection = {
  name: string;
  url: string;
  description: string;
};

export type Plugin = {
  name: string;
  url: string;
  description: string;
  type: PluginType;
  framework?: PluginFramework;
};

type PluginType = 'Effect' | 'Instrument';

type PluginFramework = 'JUCE' | 'Rust VST' | 'GTK';

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
  frameworks: PluginFramework[];
};

type PluginType = 'Effect' | 'Instrument' | 'Misc';

type PluginFramework =
  | 'DPF'
  | 'GTK'
  | 'JUCE'
  | 'Rust VST'
  | 'VSTGUI'
  | 'WDL-OL';

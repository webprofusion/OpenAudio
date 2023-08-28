export type AudioApp = {
  name: string;
  url?: string;
  description: string;
  repository: Repository;
};

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

type Repository =
  | {
      type: 'GitHub';
      user: string;
      repo: string;
    }
  | {
      type: 'SourceForge';
      project: string;
    };

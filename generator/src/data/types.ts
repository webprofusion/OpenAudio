export type AudioApp = {
  name: string;
  url?: string;
  description: string;
  repository: Repository;
};

export type Library = {
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
  | 'Faust'
  | 'FLTK'
  | 'FLUID'
  | 'GTK'
  | 'iPlug2'
  | 'JUCE'
  | 'Qt'
  | 'React-JUCE'
  | 'RtAudio'
  | 'Rust VST'
  | 'SAF'
  | 'VSTGUI'
  | 'WAM'
  | 'WDL-OL';

export type Repository =
  | {
      type: 'GitHub';
      user: string;
      repo: string;
    }
  | {
      type: 'SourceForge';
      project: string;
    }
  | {
      type: 'Assembla';
      space: string;
    };

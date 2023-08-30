import {z} from 'zod';

export type Repository = z.infer<typeof zRepository>;
const zRepository = z.union([
  z.object({
    type: z.literal('GitHub'),
    user: z.string(),
    repo: z.string(),
  }),
  z.object({
    type: z.literal('SourceForge'),
    project: z.string(),
  }),
  z.object({
    type: z.literal('Assembla'),
    space: z.string(),
  }),
]);

export type AudioApp = z.infer<typeof zAudioApp>;
const zAudioApp = z.object({
  name: z.string(),
  url: z.string().optional(),
  description: z.string(),
  repository: zRepository,
});

export type Library = z.infer<typeof zLibrary>;
const zLibrary = z.object({
  name: z.string(),
  url: z.string().optional(),
  description: z.string(),
  repository: zRepository,
});

export type Collection = z.infer<typeof zCollection>;
const zCollection = z.object({
  name: z.string(),
  url: z.string(),
  description: z.string(),
});

export type PluginType = z.infer<typeof zPluginType>;
const zPluginType = z.union([
  z.literal('Effect'),
  z.literal('Instrument'),
  z.literal('Misc'),
]);

export type PluginFramework = z.infer<typeof zPluginFramework>;
const zPluginFramework = z.union([
  z.literal('DPF'),
  z.literal('Faust'),
  z.literal('FLTK'),
  z.literal('FLUID'),
  z.literal('GTK'),
  z.literal('iPlug2'),
  z.literal('JUCE'),
  z.literal('Qt'),
  z.literal('React-JUCE'),
  z.literal('RtAudio'),
  z.literal('Rust VST'),
  z.literal('SAF'),
  z.literal('VSTGUI'),
  z.literal('WAM'),
  z.literal('WDL-OL'),
]);

export type Plugin = z.infer<typeof zPlugin>;
const zPlugin = z.object({
  name: z.string(),
  url: z.string(),
  description: z.string(),
  type: zPluginType,
  frameworks: zPluginFramework.array(),
});

export type Data = z.infer<typeof zData>;
export const zData = z.object({
  apps: zAudioApp.array(),
  collections: zCollection.array(),
  libraries: zLibrary.array(),
  plugins: zPlugin.array(),
  resources: zCollection.array(),
  samples: zCollection.array(),
});

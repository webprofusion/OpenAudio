import {z} from 'zod';

export type Repository = z.infer<typeof zRepository>;
export const zRepository = z.union([
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
export const zAudioApp = z.object({
  name: z.string(),
  url: z.string().optional(),
  description: z.string(),
  repository: zRepository,
});

export type Library = z.infer<typeof zLibrary>;
export const zLibrary = z.object({
  name: z.string(),
  url: z.string().optional(),
  description: z.string(),
  repository: zRepository,
});

export type Collection = z.infer<typeof zCollection>;
export const zCollection = z.object({
  name: z.string(),
  url: z.string(),
  description: z.string(),
});

export type PluginType = z.infer<typeof zPluginType>;
export const zPluginType = z.union([
  z.literal('Effect'),
  z.literal('Instrument'),
  z.literal('Misc'),
]);

export type PluginFramework = z.infer<typeof zPluginFramework>;
export const zPluginFramework = z.union([
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
export const zPlugin = z.object({
  name: z.string(),
  url: z.string(),
  description: z.string(),
  type: zPluginType,
  frameworks: zPluginFramework.array(),
});

// Aliases
export const zApps = zAudioApp.array();
export const zCollections = zCollection.array();
export const zLibraries = zLibrary.array();
export const zPlugins = zPlugin.array();
export const zResources = zCollections;
export const zSamples = zCollections;

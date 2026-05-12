Open-Source Audio Plugins & Apps
================================

A list of open source audio software projects (Apps, Plugins, Libraries and other resouces). The intent of this list is to catalog open-source audio apps, plugins (VSTs etc) or other resources which are either fully featured or are useful examples which have non-trivial features.

https://openaudio.webprofusion.com

<details>
<summary>Table of Contents</summary>

<ul>
	<li><a href="#audio-plugins">Audio Plugins</a></li>
	<li><a href="#collections">Collections</a></li>
	<li><a href="#audio-apps">Audio Apps</a></li>
	<li><a href="#software-development-libraries">Software Development Libraries</a></li>
	<li><a href="#code-samples">Code Samples</a></li>
	<li><a href="#open-data-resources">Open Data Resources</a></li>
</ul>
</details>

<details>
<summary>Contributing links</summary>

To contribute new links, fill out our issue template and the change will be prepare automatically and reviewed by an editor: https://github.com/webprofusion/OpenAudio/issues 
</details>

Audio Plugins
-------------

| Plugin | Description | Type | Framework |
| --- | --- | --- | --- |
| [3HSPlug](https://github.com/src3453/3HSPlug) | GM/GS Compatible Multi-timbal 8-operator FM/PCM Syntheizer, uses 3HS88PWN4 (Fantasy sound chip) to make sound. | Instrument | JUCE |
| [8ridgelite](https://github.com/JamesStubbsEng/8ridgelite) | 8 string guitar virtual instrument | Instrument | JUCE |
| [ADLplug](https://github.com/jpcima/ADLplug) | FM Chip Synthesizer — OPL & OPN | Instrument | JUCE |
| [ÆLAPSE](https://github.com/smiarx/aelapse) | ÆLAPSE is a delay and reverb plugin. The delay is based on tape-delay mechanisms, while the reverb is inspired by (but not limited to) spring reverbs. | Effect | JUCE |
| [Airwindows](https://github.com/airwindows/airwindows) | Various small and experimental effect plugins | Effect | N/A |
| [ampli-Fe](https://github.com/antonok-edm/ampli-Fe) | Cross-platform VST2 plugin written in Rust | Effect | Rust VST |
| [amsynth](https://github.com/amsynth/amsynth) | Analog-modelling (virtual analog) synthesizer | Instrument | GTK |
| [andes](https://github.com/artfwo/andes) | Sound synthesiser plugin based on Perlin noise | Instrument | JUCE |
| [Argotlunar](https://github.com/mourednik/argotlunar) | Real-time delay-line granulator | Effect | JUCE |
| [Audible Planets](https://github.com/gregrecco67/AudiblePlanets) | An expressive, quasi-Ptolemaic semi-modular synthesizer | Instrument | JUCE |
| [Audio Effects](https://github.com/juandagilc/Audio-Effects) | Plugins implemented from the explanations in the book “Audio Effects: Theory, Implementation and Application” | Effect | JUCE |
| [Bespoke](https://github.com/awwbees/BespokeSynth) | Node-based modular synth with live coding | Instrument | JUCE |
| [BinAural VST](https://github.com/twoz/binaural-vst) | Mono-to-stereo plugin that positions sound in a 3D space using Head-Related Transfer Functions | Effect | JUCE |
| [BiRR](https://github.com/odoare/BiRR) | BiRR (and her ambisonic sister AmbiRR) are room simulators that accurately emulate the sound produced by two monophonic and omnidirectionnal sources perceived by a listener in a rectangular (2D) or parallelepipedic (3D) room. The dimensions (x,y,z) of the room can be adjusted, as well as the source and listener positions. The generated stereo output can simulate different microphone positions (XY, MS, with different angles), or a binaural receiver. | Effect | JUCE |
| [BlackBird](https://khrykin.github.io/BlackBird) | Analog-inspired software synth with its own voice | Instrument | JUCE |
| [blocks](https://github.com/dan-german/blocks) | Polyphonic modular synth | Instrument | JUCE |
| [BORIS Granular Station](https://glesdora.github.io/boris-granular-station/) | A live-input granular plugin | Effect | JUCE |
| [Breathalyzer](https://github.com/bgunnison/breathalyzer) | Breathalyzer is a VST3 instrument that turns MIDI notes into playable breath-and-voice gestures. It is not a sample player and not a speech synthesizer. The design goal is a compact expressive instrument whose mouth color, noise, growl, and vowel motion can all be performed from a small control surface. | Instrument | VSTGUI |
| [C1Bitcrusher](https://github.com/datajake1999/C1Bitcrusher) | Experimental and accurate bit reduction | Effect | N/A |
| [Calf Studio Gear](https://github.com/calf-studio-gear/calf) | Many LV2 and Jack audio plug-ins | Effect | GTK |
| [Cardinal](https://github.com/DISTRHO/Cardinal/) | Virtual modular synthesizer plugin | Instrument | DPF |
| [Chorus Ex Machina](https://github.com/peastman/ChorusExMachina) | Physically modelled chorus synthesizer | Instrument | NIH-Plug |
| [CHOW](https://github.com/jatinchowdhury18/CHOW) | Maximally truculent distortion effect | Effect | JUCE |
| [Classic Reverb RE-03](https://github.com/AnClark/ClassicReverb-RE03) | Classic Reverb RE-03 is a reversed engineering of Kjaerhus Classic Reverb, a studio-quality free reverb plugin. It is a variant of [Classic Reverb RE-04](https://github.com/AnClark/ClassicReverb-RE04), with a different flavor of sound style and controls | Effect | DPF |
| [Cloud Seed](https://github.com/ValdemarOrn/CloudSeed) | Algorithmic reverb for emulating huge, endless spaces and modulated echoes | Effect | N/A |
| [CloudReverb](https://github.com/xunil-cloud/CloudReverb) | This is an audio plugin for algorithmic reverb. The algorithm is borrowed from [CloudSeed VST](https://github.com/ValdemarOrn/CloudSeed/tree/legacy-v1) by Valdemar Erlingsson. | Effect | JUCE |
| [Cocoa Delay](https://github.com/tesselode/cocoa-delay) | Warm and lively delay | Effect | WDL-OL |
| [Convolver](https://github.com/teragonaudio/Convolver) | Impulse-response reverb | Effect | JUCE, VSTGUI |
| [cStop](https://github.com/calgoheen/cStop) | Tape stop | Effect | JUCE |
| [Curvessor 2](https://github.com/unevens/Curvessor) | [Curvessor](https://www.unevens.net/curvessor.html) is an audio plug-in that implements a dynamic range processor in which the response curve of each channel is an automatable spline. | Effect | JUCE |
| [DAFx19-Gamelanizer](https://github.com/lukemcraig/DAFx19-Gamelanizer) | Accompanying material for the paper 'A Real-Time Audio Effect Plug-In Inspired by the Processes of Traditional Indonesian Gamelan Music' | Effect | JUCE |
| [Dexed](https://github.com/asb2m10/dexed) | DX7 FM plugin synth | Instrument | JUCE |
| [Digits](https://github.com/LouisGorenfeld/DigitsVst) | Phase-distortion synth inspired by Casio CZ series | Instrument | VSTGUI |
| [Disflux](https://github.com/Dimethoxy/Disflux) | Disflux is a free and open-source phase dispersion effect designed to add insane amounts of punch, depth, and character to your sound. | Effect | JUCE |
| [Distrho glBars](https://github.com/DISTRHO/glBars) | OpenGL bars visualization plugin (as seen in XMMS and XBMC/Kodi) adapted from jack_glbars | Effect | DPF |
| [Distrho Juice Plugins](https://github.com/DISTRHO/JuicePlugins) |  | Misc | DPF |
| [Distrho Kars](https://github.com/DISTRHO/Kars) | Simple karplus-strong plucked string synth based on the karplong DSSI example synth | Instrument | DPF |
| [Distrho Mini-Series](https://github.com/DISTRHO/Mini-Series) | Collection of small plugins based on LOSER-Dev Plugins | Effect | DPF |
| [Distrho MVerb](https://github.com/DISTRHO/MVerb) | DPF-based version of MVerb | Effect | DPF |
| [Distrho ndc Plugs](https://github.com/DISTRHO/ndc-Plugs) | DPF-based versions of some of ndc Plugs | Effect | DPF |
| [Distrho Nekobi](https://github.com/DISTRHO/Nekobi) | Simple single-oscillator synth based on Roland TB-303 | Instrument | DPF |
| [Distrho ProM](https://github.com/DISTRHO/ProM) | Music-visualizer plugin based on projectM | Effect | DPF |
| [Dragonfly Reverb](https://github.com/michaelwillis/dragonfly-reverb) | Hall-style reverb based on Freeverb3 algorithms | Effect | DPF |
| [Drops](https://github.com/clearly-broken-software/drops) | Single file audio player | Instrument | DPF |
| [Drummock](https://github.com/ameyakakade/drummock) | Drum sampler plugin with retro pitch shifting and hard clipper. Just drag and drop to load samples and start playing. | Instrument | JUCE |
| [Element](https://github.com/kushview/Element) | Advanced Audio Plugin Host | Misc | JUCE |
| [Eurorack](https://github.com/VCVRack/AudibleInstruments) | Diverse set of physical modeling sources, organic processors, wavetable oscillators, waveshapers, granular synths, and utility modules | Misc | N/A |
| [FILT-R](https://github.com/tiagolr/filtr) | FILT-R is a cross-platform filter modulator based on plugins like ShaperBox and FilterShaper. It is the second version of [FLTR-1 JSFX](https://github.com/tiagolr/tilr_jsfx?tab=readme-ov-file) | Effect | JUCE |
| [Flutterbird](https://github.com/tesselode/flutterbird) | Simple pitch fluctuation | Effect | iPlug2 |
| [FreeEQ8](https://github.com/GareBear99/FreeEQ8) | FreeEQ8 is a professional-grade, free and open-source 8-band parametric EQ plugin for macOS, Linux, and Windows. | Effect | JUCE |
| [GainPlugin](https://github.com/satelllte/GainPlugin) | (Experimental) VST/AU audio plugin example based on JUCE with React-JUCE for UI. | Misc | JUCE, React-JUCE |
| [GATE-12](https://github.com/tiagolr/gate12) | GATE-12 is a cross-platform envelope generator for gate/volume control inspired by plugins like GrossBeat and ShaperBox. It is the second version of [GATE-1](https://github.com/tiagolr/gate1) rebuilt from scratch using the JUCE framework. | Effect | JUCE |
| [Gverb/Gigaverb](https://github.com/v7b1/gigaverb) | Reverb | Effect | VSTGUI |
| [Hammer & Meißel](https://github.com/Mrugalla/Hammer-and-Meiszel) | Hammer & Meißel is a keytracked polyphonic modal filter (and more). | Instrument | JUCE |
| [Helm](https://github.com/mtytel/helm) | Polyphonic synth with lots of modulation | Instrument | JUCE |
| [hexter](https://github.com/smbolton/hexter) | Yamaha DX7 modeling FM synth for DSSI | Instrument | DPF |
| [HiLoFilter](https://github.com/teragonaudio/HiLoFilter) | Simple hipass/lopass filter controlled with a single knob | Effect | JUCE |
| [Hue](https://github.com/bljustice/hue) | Mixes various noise types into the audio signal | Effect | Rust VST |
| [INTERSECT](https://github.com/tucktuckg00se/INTERSECT) | INTERSECT is a sample slicer instrument plugin (VST3/AU/Standalone) with multi-sample sessions, per-slice locking, slice note ranges, multiple time/pitch algorithms, and MIDI-triggered slice playback. | Instrument | JUCE |
| [jc303](https://github.com/midilab/jc303) | A Free Roland TB-303 Plugin for Windows, MacOS and Linux: VST2, VST3, LV2 and AU. A JUCE port of Open303 engine | Instrument | JUCE |
| [JS Inflator](https://github.com/Kiriki-liszt/JS_Inflator) | JS Inflator is a copy of Sonox Inflator. | Effect | N/A |
| [JuceOPLVSTi](https://github.com/bsutherland/JuceOPLVSTi) | FM synth based on Yamaha OPL2/3 emulation from DOSBox | Instrument | JUCE |
| [Juno 6](https://sourceforge.net/projects/juno6/) | Roland Juno 6/60 Synthesizer | Instrument | N/A |
| [Just a Sample](https://github.com/BOBONA/Just-a-Sample) | Just a Sample is a powerful, modern audio sampler, with a focus on simplicity and ease of use. Best of all, it's free and open-source! I spent a lot of time on this project, and I think it will be a great addition to your plugin collection. | Effect | JUCE |
| [K-Meter](https://github.com/mzuther/K-Meter) | Implementation of a K-System meter according to Bob Katz’ specifications | Effect | JUCE |
| [keithhearne/VSTPlugins](https://github.com/keithhearne/VSTPlugins) | Collection of VST plugins | Effect | JUCE |
| [Key Repeat](https://michael-jan.github.io/key-repeat/) | Beat repeat sampler | Instrument | JUCE |
| [KickMaker](https://github.com/teragonaudio/KickMaker) | Synth specifically to create kick-drum sounds | Instrument | VSTGUI |
| [LameVST](https://github.com/Iunusov/LameVST) | LameMP3 as an effect | Effect | N/A |
| [LIRA•8](https://github.com/MikeMorenoDSP/LIRA-8) | The Lira•8 is a digital attempt at emulating SOMA Lab's Lyra-8 signal flow and sound. | Instrument | JUCE |
| [Magical8bitPlug 2](https://github.com/yokemura/Magical8bitPlug2) | Old 8bit game console style synth | Instrument | JUCE |
| [mda](https://sourceforge.net/projects/mda-vst/) | FX and virtual instruments for PC and Mac | Misc | N/A |
| [mda-plugins-juce](https://github.com/hollance/mda-plugins-juce) | JUCE implementations of the classic MDA audio plug-ins | Misc | JUCE |
| [Microbiome](https://github.com/dsmaugy/microbiome) | Microbiome is a real-time audio effects plugin that uses delay lines and looping to create vibrant audio artifacts mimicking the nature of evolutionary biology. | Effect | JUCE |
| [MidiChords](https://github.com/markwilkins/midi-chord-reader) | Detect chord names from a MIDI track and display them in a scrolling window during track playback | Misc | JUCE |
| [Mika Micro](https://github.com/tesselode/mika-micro) | Simple subtractive synth | Instrument | WDL-OL |
| [Modal Synthesiser](https://github.com/crispinha/modal-synth) | This is a software synthesiser that uses modal synthesis, a physical modelling technique using banks of resonators to filter an exciter signal, to create sounds with a parametrically controlled frequency spectrum. This synthesiser is designed to allow for the composition and performance of spectral music, and it produces sounds with timbres similar to those of natural materials such as wood, metal, and glass. | Instrument | JUCE |
| [modEQ](https://github.com/tobanteAudio/modEQ) | EQ with modulation (VST3, AU) | Effect | JUCE |
| [MultiMeter](https://github.com/RealAlexZ/MultiMeter) | A comprehensive set of AU/VST audio analysis tools (level meters, histograms, spectrogram analyzer, goniometer, correlation meter) | Effect | JUCE |
| [Musializer Plugin](https://github.com/ameyakakade/musializer-plugin) | Spectrum visualizer plugin | Misc | JUCE |
| [MVerb](https://github.com/martineastwood/mverb) | Studio-quality reverb using the Dattorro’s figure-of-eight reverb structure | Effect | VSTGUI |
| [ndc Plugs](https://www.niallmoody.com/ndcplugs/plugins.htm) | VST plugins for Windows and OSX | Misc | VSTGUI |
| [Neural Amp Modeler LV2](https://github.com/mikeoliphant/neural-amp-modeler-lv2) | Neural amplifier modeler, LV2 version of Steven Atkinson's NAM plugin | Effect | N/A |
| [Neural Resonator VST](https://github.com/rodrigodzf/NeuralResonatorVST) | This is a VST plugin that uses a neural network to generate filters based on arbitrary 2D shapes and materials. It is possible to use midi to trigger simple impulses to excite these filters. Additionally any audio signal can be used as input to the filters. | Effect | JUCE |
| [Ninjas 2](https://github.com/clearly-broken-software/ninjas2) | Sample slicer, rewrite of Ninjas | Instrument | DPF |
| [NotNotchFilter](https://github.com/teragonaudio/NotNotchFilter) | Performance-oriented filter designed to replace the mid-EQ found in a standard 3-band DJ mixer | Effect | JUCE |
| [OB-Xd](https://github.com/reales/OB-Xd) | Based on the Oberheim OB-X | Instrument | JUCE |
| [OctaSine](https://github.com/greatest-ape/OctaSine) | VST2 frequency modulation synthesizer written in Rust | Instrument | Rust VST |
| [Odin2](https://github.com/TheWaveWarden/odin2) | Polyphonic Synth | Instrument | JUCE |
| [Overdraw](https://github.com/unevens/Overdraw) | [Overdraw](https://www.unevens.net/overdraw.html) is an audio plug-in that implements a waveshaper in which the transfer function of each channel is an automatable spline. | Effect | JUCE |
| [OwlBass](https://github.com/PentagramPro/OwlBass) | Additive bass synth | Instrument | JUCE |
| [Oxe FM Synth](https://github.com/oxesoft/oxefmsynth) | Multitimbral 8-operator FM synth (VST 2.4; Windows, Linux, macOS) | Instrument | VSTGUI |
| [PeakEater](https://github.com/vvvar/PeakEater) | PeakEater is a free, easy-to-use wave-shaping plugin. PeakEater lets you choose between different [wave-shaping](https://en.wikipedia.org/wiki/Waveshaper) [functions](https://en.wikipedia.org/wiki/Sigmoid_function) to clip everything above ceiling level. Therefore, you can boost the overall volume of your track safely without worrying that some nasty peak would go above the maximum allowed volume level of your DAW. | Effect | JUCE |
| [Plasma](https://github.com/Dimethoxy/Plasma) | Plasma is a free & open-source distortion powerhouse for VST3 hosts. Originally designed for Hardstyle, Gabber, Hardcore, and anything that needs raw, aggressive energy, Plasma lets you twist and destroy your sound with 12 brutal distortion styles and filters with extreme resonance capabilities. | Effect | JUCE |
| [plugdata](https://github.com/plugdata-team/plugdata) | Plugin wrapper around Pure Data, letting it be used as a plugin in your DAW | Misc | JUCE |
| [Pulp Fiction](https://github.com/coconut-audio/pulp-fiction) | Multi-effects rack plugin | Effect | JUCE |
| [PulseDelay](https://github.com/teragonaudio/PulseDelay) | Timed delay effect | Effect | N/A |
| [QDelay](https://github.com/tiagolr/qdelay) | QDelay (short for quick-delay) is a dual-delay with more features than it should for a free plugin that's supposed to be quick. While it offers nothing groundbreaking it is based on popular units like ReplikaXT and EchoBoy. The main goal is to create a free and open plug-in for my own productions, an alternative to the popular [Deelay](https://sixthsample.com/deelay/) by SixthSample without premium versions or trimmed features or on-line activation. | Effect | JUCE |
| [QtVST](https://github.com/mbrucher/QtVST) | VST plugins with a Qt interface | Effect | Qt |
| [RCSiner](https://github.com/RCJacH/RCSiner) | RCSiner is an audio plugin that employs phase-distortion and waveshaping techniques utilizing the sine function. It provides a collection of selectable formulas, each equipped with three adjustable parameters and the capability to transform through multiple processing stages. This versatile tool offers and extensive range of sonic possibilities, from subtle harmonic saturation to full-on destruction of the audio signal. | Effect | iPlug2 |
| [RE201models](https://github.com/je3928/RE201models/tree/main) | This repository is dedicated to digital modelling of the Roland RE-201. | Effect | JUCE |
| [REACH](https://github.com/Sinuslabs/Reach) | Extraterrestrial Reverb for Electronic Music | Effect | JUCE |
| [REEV-R](https://github.com/tiagolr/reevr) | REEV-R is a cross-platform convolution reverb with modulation for pre/send and post/volume signals. | Effect | JUCE |
| [Regrader](https://github.com/igorski/regrader) | Degenerative delay | Effect | VSTGUI |
| [Resonarium](https://github.com/gabrielsoule/resonarium) | Resonarium is a MPE-compatible physical modeling synthesizer, based on coupled string waveguide models. It is designed to encourage abstract sound design, exploration, and open-ended play. | Instrument | JUCE |
| [RipplerX](https://github.com/tiagolr/ripplerx) | RipplerX is a physically modeled synth, capable of sounds similar to AAS Chromaphone and Ableton Collision. | Instrument | JUCE |
| [Roth-AIR](https://github.com/danielrothmann/Roth-AIR) | Mixing tool for easily adding airy, crispy presence to audio | Effect | JUCE |
| [Rotor](https://github.com/blackboxaudio/rotor) | Rotor is a variable waveform ring modulation plugin targeting VST3 and AU for OS X and Windows platforms. It uses wavetable synthesis to generate various simple waveforms that act as the modulation signal for the input. It is compiled using the [JUCE](https://juce.com/) framework for C++. | Effect | JUCE |
| [Schrammel OJD](https://github.com/JanosGit/Schrammel_OJD) | Model of a modern classic guitar distortion pedal | Effect | JUCE |
| [ScorchCrafter Guitar FX](https://sourceforge.net/projects/scorchcrafter/) | Audio DSP FX and plugins, mostly for guitar (amp sim) and other FX | Effect | VSTGUI |
| [Scream](https://github.com/Cure-Audio/Scream) | Scream is a versatile VST plugin that recreates the legendary Scream filter from Massive. Known for its aggressive, resonant tone and raw energy. | Effect | N/A |
| [Setekh](https://github.com/fullfxmedia/setekh) | A minimalistic yet sonically powerful distortion plugin created and distributed via Full FX Media | Effect | JUCE |
| [sfizz](https://github.com/sfztools/sfizz) | SFZ parser library and instrument plugins | Instrument | VSTGUI |
| [ShoutVST](https://github.com/Iunusov/ShoutVST) | VST for streaming sound into Icecast/Shoutcast directly from VST hosts | Effect | VSTGUI, FLUID |
| [Sirial](https://github.com/tiagolr/sirial) | Sirial is a Rhythmic Delay where each tap can be placed and configured with different amplitudes and feedback giving total control on how the delay responds and the patterns it creates. | Effect | JUCE |
| [SmartGuitarAmp](https://github.com/GuitarML/SmartGuitarAmp) | Guitar amplifier-style plugin, that uses machine learning for emulating real world hardware | Instrument | JUCE |
| [SmartGuitarPedal](https://github.com/GuitarML/SmartGuitarPedal) | Guitar pedal-style plugin, that uses machine learning for emulating real world hardware | Effect | JUCE |
| [Sound Analyser](https://github.com/adamstark/Sound-Analyser) | Real-time audio analysis to allow anyone to quickly set up and experiment with different algorithms | Effect | JUCE |
| [Sound of Music](https://github.com/coconut-audio/sound-of-music) | Multiband bitcrusher | Effect | JUCE |
| [SPARTA](https://github.com/leomccormack/SPARTA) | Spatial audio focused plug-in suite (Ambisonics encoders/decoders, 3-D panners/spatialisers, etc.) | Effect | SAF, JUCE |
| [SpectralAbyss Multiband-Saturation](https://github.com/pschaupp/spectral-abyss-multiband-saturation) | SpectralAbyss is a multiband saturation audio plugin built with [JUCE](https://juce.com/). It allows the distortion of three individual frequency bands using two different distortion algorithms. | Effect | JUCE |
| [Squeezer](https://github.com/mzuther/Squeezer) | Compressor with side-chain, several detection modes and filters, etc | Effect | JUCE |
| [Stone Mistress](https://github.com/NaviCisco/StoneMistress) | Phase Shifter and Chorus audio plugin, inspired by Electro-Harmonix Stereo Electric Mistress and Small Stone pedals | Effect | JUCE |
| [Surge](https://surge-synthesizer.github.io/) | Subtractive wavetable synth | Instrument | VSTGUI |
| [Synister](https://github.com/the-synister/the-source) | Subtractive synth | Instrument | JUCE |
| [Syntage](https://github.com/lis355/Syntage) | VST 2.4 .Net Study Synth | Instrument | N/A |
| [TeAr](https://github.com/odoare/TeAr) | TeAr is an advanced polyrhythmic and polyphonic MIDI arpeggiator plugin. It features four independent arpeggiator engines, each with its own pattern, subdivision, and MIDI output channel. This allows for the creation of complex, evolving musical phrases and textures. | Effect | JUCE |
| [Temper](https://github.com/creativeintent/temper) | Digital distortion targeting VST, VST3, and AU for OS X and Windows | Effect | Faust, JUCE |
| [The Analog Molecule](https://forum.cockos.com/showthread.php?t=305604) | JSFX Based frame plugin for Reaper. | Effect | DPF |
| [There will be blood](https://github.com/coconut-audio/there-will-be-blood) | Drum bleed reduction plugin | Effect | JUCE |
| [TIME-12](https://github.com/tiagolr/time12) | TIME-12 is a cross-platform is a delay modulator inspired by plugins like GrossBeat and ShaperBox. It can be used for a wide range of effects like stuttering, tape stop, glitch, scratch, reverse, pitch shift and more. It is the second version of [TIME-1](https://github.com/tiagolr/time1) rebuilt from scratch using the JUCE framework. | Effect | JUCE |
| [traKmeter](https://github.com/mzuther/traKmeter) | Loudness meter for correctly setting up tracking and mixing levels | Effect | JUCE |
| [Transfer](https://github.com/MeijisIrlnd/Transfer) | Transfer is a waveshaper based distortion, except the transfer function is JIT compiled from text inputted by the user. Starting as a tool for testing different transfer functions in other projects, it has evolved into a pretty cool and unique plugin (disclaimer it might not be that unique I have done absolutely no market research whatsoever). It also has a built in gate, and an emphasis filter, which applies the filters to the signal pre waveshaping, then applies the exact opposite filter post waveshaping. Due to popular demand (by popular I mean that one guy on reddit), it now also has has 16x oversampling and you can't turn it off sorry I don't make the rules. | Effect | JUCE |
| [Tumult](https://github.com/consint/Tumult) | Tumult makes noise. Tumult texturizes, accentuates and adds warmth and age. Tumult comes with 100 hand-picked noises. You can choose one of them or import your own samples and play them raw, let them follow your sounds or duck them away. Tumult comes with an 5-band EQ that lets you shape the noises to your liking. Tumult is a free and open source 64bit VST3 effect plugin for Linux and Windows. | Effect | JUCE |
| [Tunefish](https://github.com/paynebc/tunefish) | VST virtual analog synthesizer | Instrument | JUCE |
| [Uhhyou Plugins](https://ryukau.github.io/VSTPlugins/index.html) | Uhhyou Plugins Collection | Effect | N/A |
| [Valentine](https://github.com/tote-bag-labs/valentine) | Valentine is a compressor and distortion processor. It was inspired by the hyper compressed and crushed textures in the seminal Justice record, †. Using it is easy: turning input up makes the signal louder, more compressed, and more saturated. Turning crush up adds digital distortion. | Effect | JUCE |
| [Vaporizer2](https://github.com/VASTDynamics/Vaporizer2) | Hybrid wavetable additive / subtractive VST / AU / AAX synthesizer / sampler workstation plugin | Instrument | JUCE |
| [VCV Rack](https://github.com/VCVRack/Rack) | Virtual modular synth | Misc | RtAudio |
| [Vital](https://github.com/mtytel/vital) | Spectral warping wavetable synthesizer | Instrument | JUCE |
| [VST2413](https://github.com/keijiro/vst2413) | FM synth based on emulator of YM2413 (OPLL) chip used in Sega Master System and FM-PAC MSX expansion | Instrument | N/A |
| [VstProfiler](https://github.com/QuentinStoll/VstProfiler) | We are working on an open source JUCE vst3 plug-in that capture guitar amplifier and cabinet and emulate them in real time for guitarists. | Effect | JUCE |
| [VSTSID](https://github.com/igorski/VSTSID) | SID synthesizer instrument | Instrument | N/A |
| [WarpCore](https://github.com/ManasWolrd/WarpCore) | WarpCore is a multi-band spectrum inversion plugin, similar to the time-domain local spectrum inversion effect of PiWarp/Wormhole. | Effect | JUCE |
| [Wavetable](https://github.com/FigBug/Wavetable) | A 2 oscillator wavetable synth with flexible modulation options | Instrument | JUCE |
| [WebCZ101](https://github.com/webaudiomodules/webcz101) | Virtual CZ101 synth in a browser | Instrument | WAM |
| [WebDX7](https://github.com/webaudiomodules/webdx7) | Virtual Yamaha DX7 synth in a browser | Instrument | WAM |
| [Wolf Shaper](https://github.com/pdesaulniers/wolf-shaper) | Waveshaper plugin with spline-based graph editor | Effect | DPF |
| [YK Chorus](https://github.com/SpotlightKid/ykchorus) | Chorus audio effect plugin based on DSP code by TAL | Effect | DPF |
| [zam-plugins](https://github.com/zamaudio/zam-plugins) | LADSPA/LV2/VST/JACK audio plugins for high-quality processing | Effect | DPF |
| [zynaddsubfx](https://github.com/zynaddsubfx/zynaddsubfx) | Additive/Subtractive AM/FM synthesizer with effects | Instrument | FLTK |

Collections
-----------

* [Awesome JUCE](https://github.com/sudara/awesome-juce) — list of JUCE libraries, plugins and utilities
* [Hybrid Multimedia Production Suite](https://github.com/forart/HyMPS) — Collection of open software for a platform-independent advanced audio/video contents production suite
* [Linux DAW](https://linuxdaw.org/) — list of audio software and plugins, many of which are open-source
* [Linux Synths](https://linuxsynths.com/) — list of linux based synths, many of which are open-source
* [Mach1 Spatial System](https://github.com/mach1studios/m1-spatialsystem) — foundational plugins for spatial and multichannel audio mixing focused around vector panning
* [Open Audio Stack](https://github.com/open-audio-stack) — audio plugin management software, registry of StudioRack, OwlPlug, etc.
* [OpenAV](https://openavproductions.com/) — collection of instruments, effects, and development tool kits for Linux.
* [SFZ Instruments](https://sfzinstruments.github.io/) — list of SFZ instruments, most of which are free
* [StudioRack](https://studiorack.github.io/studiorack-site/) — open-source audio plugin registry, app and command line tools
* [VCV library](https://github.com/VCVRack/library) — library of plugins compatible with VCV Plugin Manager

Audio Apps
----------

| Software | Source | Description |
| --- | --- | --- |
| [4Track](https://www.4track.cc) | [https://github.com/andreboekhorst//4-track-recorder](https://github.com/https://github.com/andreboekhorst//4-track-recorder) | 4track.cc is a web-based reimagining of a classic 4-track tape recorder, built with Svelte 5. Users can record, mix, and play back audio across four independent tracks, like the physical cassette recorders used by home musicians. Finished recordings ("cassettes") can be saved locally or shared with others via a link. |
| [ADSR](https://adsr.vercel.app/) | [satelllte/adsr](https://github.com/satelllte/adsr) | Simple web-based ADSR synth |
| [Ardour](https://ardour.org/) | [Ardour/ardour](https://github.com/Ardour/ardour) | DAW |
| ASIO2WASAPI | [levmin/ASIO2WASAPI](https://github.com/levmin/ASIO2WASAPI) | Universal ASIO driver for Windows |
| [Audacity](https://www.audacityteam.org/) | [audacity/audacity](https://github.com/audacity/audacity) | Audio editor |
| [AudioKit Synth One](https://audiokitpro.com/synth/) | [AudioKit/AudioKitSynthOne](https://github.com/AudioKit/AudioKitSynthOne) | Open-Source iOS Synthesizer App |
| [Bosca Ceoil](https://boscaceoil.net/) | [TerryCavanagh/boscaceoil](https://github.com/TerryCavanagh/boscaceoil) | Fun stand-alone beginner synthesiser |
| [butterDAWg](https://github.com/Jaybee18/butterDAWg) | [Jaybee18/butterDAWg](https://github.com/Jaybee18/butterDAWg) | DAW (WIP) |
| [Carla](https://kx.studio/Applications:Carla) | [falkTX/Carla](https://github.com/falkTX/Carla) | GNU/Linux Plugin Host |
| [ChucK](https://chuck.stanford.edu/) | [ccrma/chuck](https://github.com/ccrma/chuck) | Strongly-timed, Concurrent, and On-the-fly Music Programming Language |
| [Coincident Spectra](https://github.com/bgins/coincident-spectra) | [bgins/coincident-spectra](https://github.com/bgins/coincident-spectra) | A spectral-microtuning additive synthesizer |
| [ComposeYogi](https://composeyogi.com) | [AppsYogi-com/ComposeYogi](https://github.com/AppsYogi-com/ComposeYogi) | The open-source Ableton-style music composer for the web |
| [Drum Beat Repo](https://github.com/babali42/drumbeatrepo) | [babali42/drumbeatrepo](https://github.com/babali42/drumbeatrepo) | An interactive library of drums patterns |
| [Element](https://kushview.net/element/) | [Kushview/Element](https://github.com/Kushview/Element) | Advanced Audio Plugin Host |
| [Elementary Grid](https://teetow.com/elementary_grid/) | [teetow/elementary_grid](https://github.com/teetow/elementary_grid) | A tonegrid synth made with Elementary Audio and React |
| [FFAB](https://www.disuye.com/ffab) | [disuye/FFAB](https://github.com/disuye/FFAB) | FFAB is a cross-platform, complex audio batch processor, drag & drop effects rack, command builder & graphical user interface for FFmpeg. Audio only, but with video passthrough. Easily create filter chains, save presets, run or export FFmpeg commands, multi-input/-output batching algorithms, divide jobs across parallel FFmpeg instances... with full logs to file. It does everything FFmpeg does, but in a less cryptic manner. |
| FlexASIO | [dechamps/FlexASIO](https://github.com/dechamps/FlexASIO) | Universal ASIO driver for Windows |
| [Furnace](https://github.com/tildearrow/furnace) | [tildearrow/furnace](https://github.com/tildearrow/furnace) | Tracker sequencer with a huge selection of game system chips |
| [Giada](https://www.giadamusic.com/) | [monocasual/giada](https://github.com/monocasual/giada) | Loop machine |
| [Guitarix](https://guitarix.org/) | [SourceForge → guitarix](https://sourceforge.net/projects/guitarix) | GNU/Linux Virtual Amplifier |
| [Harmonoid](https://github.com/harmonoid/harmonoid) | [harmonoid/harmonoid](https://github.com/harmonoid/harmonoid) | Cross-platform music player (Mobile & Desktop) written in Flutter |
| [Helio Workstation](https://helio.fm/) | [helio-fm/helio-workstation](https://github.com/helio-fm/helio-workstation) | Sequencer |
| [HISE](http://hise.audio/) | [christophhart/HISE](https://github.com/christophhart/HISE) | Cross-platform framework/application for building sample-based virtual instruments (VST, AU, AAX) |
| [Hydrogen](http://hydrogen-music.org/) | [hydrogen-music/hydrogen](https://github.com/hydrogen-music/hydrogen) | Drum machine |
| [JSS-01](https://javascript-software-synthesizer.vercel.app/) | [michaelkolesidis/javascript-software-synthesizer](https://github.com/michaelkolesidis/javascript-software-synthesizer) | JavaScript Software Synthesizer |
| [LMMS](https://lmms.io/) | [LMMS/lmms](https://github.com/LMMS/lmms) | DAW |
| [Mididash](https://tiagolr.github.io/mididash/) | [tiagolr/mididash](https://github.com/tiagolr/mididash) | Mididash is an open source MIDI routing software with a node-based interface and Lua scripting. A modern take on programs like [MIDI-OX](http://www.midiox.com/). |
| [Musescore](https://musescore.org/en) | [musescore/Musescore](https://github.com/musescore/Musescore) | A notation and sheet music app |
| [Musical garden](https://musicalgarden.eliasjarzombek.com/) | [ejarzo/musical-garden](https://github.com/ejarzo/musical-garden) | A web instrument that allows you to make music by tending to a virtual garden |
| [NewMixer](https://github.com/jatinchowdhury18/NewMixer) | [jatinchowdhury18/NewMixer](https://github.com/jatinchowdhury18/NewMixer) | Mixing Software |
| [OpenMPT](https://openmpt.org/) | [OpenMPT/openmpt](https://github.com/OpenMPT/openmpt) | Popular tracker (formerly ModPlug Tracker) for Windows with support for IT, XM, S3M, MOD modules, VST plugins and ASIO |
| [OpenUtau](https://www.openutau.com/) | [stakira/OpenUtau](https://github.com/stakira/OpenUtau) | Singing synthesis platform for Windows, Mac and Linux that support UTAU voicebanks and machine learning voicebanks. |
| [OpenX32](https://discourse.openmixerproject.de/) | [OpenMixerProject/OpenX32](https://github.com/OpenMixerProject/OpenX32) | Linux and Custom Firmware for the Behringer X32 Audio-Mixing-Console. |
| [orDrumbox](https://www.ordrumbox.com/) | [SourceForge → ordrumbox](https://sourceforge.net/projects/ordrumbox) | Drum machine |
| [ossia score](https://ossia.io) | [ossia/score](https://github.com/ossia/score) | Cross-platform intermedia sequencer |
| [OwlPlug](https://owlplug.com/) | [DropSnorz/OwlPlug](https://github.com/DropSnorz/OwlPlug) | Audio plugin manager |
| [Patchcab](https://github.com/spectrome/patchcab) | [spectrome/patchcab](https://github.com/spectrome/patchcab) | Modular Eurorack style synthesizer made with Web Audio |
| [Psycle](http://psycle.pastnotecut.org/portal.php) | [SourceForge → psycle](https://sourceforge.net/projects/psycle) | Modular music tracker |
| [SampleScanner](https://github.com/psobot/SampleScanner) | [psobot/SampleScanner](https://github.com/psobot/SampleScanner) | Tool for auto-sampling hardware instruments |
| [SFZ to HISE converter](https://keypleezer.com/sfz-to-hise-converter/) | [anderseklov/SFZ-to-HISE-converter](https://github.com/anderseklov/SFZ-to-HISE-converter) | JavaScript app that translates SFZ instrument files into HISE samplemaps and JSON data objects. Runs in a modern web browser. MIT license. |
| [Shape Your Music](https://shapeyourmusic.dev/) | [ejarzo/Shape-Your-Music](https://github.com/ejarzo/Shape-Your-Music) | A web application for drawing music |
| [Sonic Pi](https://sonic-pi.net/) | [sonic-pi-net/sonic-pi](https://github.com/sonic-pi-net/sonic-pi) | Code-based music creation and performance tool |
| [Soundshed](https://soundshed.com) | [soundshed/soundshed-app](https://github.com/soundshed/soundshed-app) | Browse and manage favourite tones, control your smart amp/fx (Spark Amp etc), jam to video backing tracks, learn chords and scales. |
| Stargate DAW | [stargatedaw/stargate](https://github.com/stargatedaw/stargate) | Cross-platform, all-in-one DAW and plugin suite |
| [StudioRack](https://studiorack.github.io/studiorack-site/) | [studiorack/studiorack-app](https://github.com/studiorack/studiorack-app) | Audio plugin manager |
| [SuperCollider](https://supercollider.github.io/) | [supercollider/supercollider](https://github.com/supercollider/supercollider) | SuperCollider is a platform for audio synthesis and algorithmic composition, used by musicians, artists, and researchers working with sound. |
| [VCV Rack](https://vcvrack.com/) | [VCVRack/Rack](https://github.com/VCVRack/Rack) | Modular synth |
| yabridge | [robbert-vdh/yabridge](https://github.com/robbert-vdh/yabridge) | Linux bridge for Windows VSTs |
| [Zrythm](https://www.zrythm.org/) | [zrythm/zrythm](https://github.com/zrythm/zrythm) | DAW |

Software Development Libraries & APIs
------------------------------

| Library | Source | Description |
| --- | --- | --- |
| [AudioKit](https://www.audiokit.io/) | [AudioKit/AudioKit](https://github.com/AudioKit/AudioKit) | Swift audio synthesis, processing, & analysis platform for iOS, macOS and tvOS |
| [AudioPlugSharp](https://github.com/mikeoliphant/AudioPlugSharp/) | [mikeoliphant/AudioPlugSharp](https://github.com/mikeoliphant/AudioPlugSharp) | Easily create VST (VST3) audio plugins in C# .NET |
| [Avendish](https://celtera.github.io/avendish) | [celtera/avendish](https://github.com/celtera/avendish) | C++20 framework for any sort of audio / video / midi media objects |
| [Cabbage](https://cabbageaudio.com/) | [rorywalsh/cabbage](https://github.com/rorywalsh/cabbage) | Framework for developing audio plugins and standalone instruments with Csound |
| [Clap](https://github.com/free-audio/clap) | [free-audio/clap](https://github.com/free-audio/clap) | CLAP stands for CLever Audio Plugin. It is an audio plugin ABI which defines a standard for Digital Audio Workstations and audio plugins (synthesizers, audio effects, ...) to work together. |
| [Cmajor](https://cmajor.dev/) | [SoundStacks/cmajor](https://github.com/SoundStacks/cmajor) | Cmajor is a programming language for writing fast, portable audio software. |
| [Csound](https://csound.com/) | [csound/csound](https://github.com/csound/csound) | Programming language for sound and music synthesis |
| [DawDreamer](https://github.com/DBraun/DawDreamer) | [DBraun/DawDreamer](https://github.com/DBraun/DawDreamer) | Audio-processing Python framework supporting core DAW features written with JUCE |
| [DawVert](https://github.com/SatyrDiamond/DawVert) | [SatyrDiamond/DawVert](https://github.com/SatyrDiamond/DawVert) | DAW Project File Converter written in Python |
| [DPF](https://distrho.sourceforge.io/) | [DISTRHO/DPF](https://github.com/DISTRHO/DPF) | C++ framework for creating cross-platform audio plugins. DPF can build for LADSPA, DSSI, LV2, and VST formats. |
| [Dplug](https://dplug.org/) | [AuburnSounds/Dplug](https://github.com/AuburnSounds/Dplug) | Dplug lets you create audio plug-ins with unmatched simplicity and speed, using the D language. |
| [Elementary](https://www.elementary.audio/) | [elemaudio/elementary](https://github.com/elemaudio/elementary) | JavaScript runtime for writing native audio applications, as well as a library and framework for composing audio signal processes. |
| [Faust](https://faust.grame.fr/) | [grame-cncm/faust](https://github.com/grame-cncm/faust) | Functional programming language for real-time signal processing |
| [FluidSynth](https://www.fluidsynth.org/) | [FluidSynth/fluidsynth](https://github.com/FluidSynth/fluidsynth) | Real-time synth based on the SoundFont 2 specifications |
| [Heavy](https://wasted-audio.github.io/hvcc/) | [Wasted-Audio/hvcc](https://github.com/Wasted-Audio/hvcc) | The heavy hvcc compiler for Pure Data patches. With generators for Bela, Fabric, js, pdext, Unity, Daisy, DPF, and Wwise frameworks. |
| [iPlug 2](https://iplug2.github.io/) | [iPlug2/iPlug2](https://github.com/iPlug2/iPlug2) | Simple-to-use C++ framework for developing cross-platform audio plugins/apps |
| [JUCE](https://juce.com) | [juce-framework/JUCE](https://github.com/juce-framework/JUCE) | Cross-platform C++ framework for developing desktop and mobile apps and audio plugins |
| [jVSTwRapper](http://jvstwrapper.sourceforge.net/) | [SourceForge → jvstwrapper](https://sourceforge.net/projects/jvstwrapper) | Wrapper to write audio plugins in Java (VST 2.4, AU, LADSPA; Windows, Linux, macOS) |
| [libopenmpt](https://lib.openmpt.org/libopenmpt/) | [OpenMPT/openmpt](https://github.com/OpenMPT/openmpt) | Cross-platform C/C++ module-playback library based on OpenMPT |
| [libspatialaudio](https://videolabs.io) | [videolabs/libspatialaudio](https://github.com/videolabs/libspatialaudio) | Cross-platform C++ library for Ambisonic encoding and decoding, filtering and binaural rendering |
| Nallely | [dr-schlange/nallely-midi](https://github.com/dr-schlange/nallely-midi) | Python library meta-synth oriented for scripting your MIDI devices, create virtual modules (LFOs, Envelope Generator, graphical visuals, ...), map all of them together dynamically. Also provides a websocket-bus to create visuals/modules with other languages and a websocket-based protocol to control the core library at run time. |
| NIH-plug | [robbert-vdh/nih-plug](https://github.com/robbert-vdh/nih-plug) | Rust VST3 and CLAP plugin framework and plugins |
| [PortAudio](http://www.portaudio.com/) | [Assembla → portaudio](https://app.assembla.com/spaces/portaudio/git/source) | Cross-platform audio I/O library |
| [Qubx](https://github.com/PasqualeMainolfi/Qubx) | [PasqualeMainolfi/Qubx](https://github.com/PasqualeMainolfi/Qubx) | Rust library for queue-based multithreaded real-time parallel audio streams processing and management |
| [r-audio](https://github.com/bbc/r-audio) | [bbc/r-audio](https://github.com/bbc/r-audio) | A library of React components for building Web Audio graphs. |
| RtAudio | [thestk/rtaudio](https://github.com/thestk/rtaudio) | C++ classes for cross-platform real-time audio I/O |
| rust-vst | [rust-dsp/rust-vst](https://github.com/rust-dsp/rust-vst) | VST 2.4 API implementation in the Rust language |
| [RustAudio](https://rust.audio/) | [rustaudio/](https://github.com/rustaudio/) | Collection of audio processing and plugin libraries for the Rust language |
| [SAF](https://leomccormack.github.io/Spatial_Audio_Framework/) | [leomccormack/Spatial_Audio_Framework](https://github.com/leomccormack/Spatial_Audio_Framework) | Cross-platform framework for developing spatial audio related algorithms and software in C/C++ |
| [SOUL](https://soul.dev/) | [soul-lang/SOUL](https://github.com/soul-lang/SOUL) | SOUL (SOUnd Language) is an attempt to modernise and optimise the way high-performance, low-latency audio code is written and executed. |
| [Soundpipe](https://paulbatchelor.github.io/proj/soundpipe.html) | [PaulBatchelor/Soundpipe](https://github.com/PaulBatchelor/Soundpipe) | Lightweight music DSP library written in C; over 100 modules, many ported from Csound |
| [Tone.js](https://tonejs.github.io/) | [Tonejs/Tone.js](https://github.com/Tonejs/Tone.js) | A Web Audio framework for making interactive music in the browser. |
| [tracktion_engine](https://www.tracktion.com/develop/tracktion-engine) | [Tracktion/tracktion_engine](https://github.com/Tracktion/tracktion_engine) | Tracktion Engine module. You can build anything from a simple file-player or sequencer to a full blown DAW. |
| VSTGUI | [steinbergmedia/vstgui](https://github.com/steinbergmedia/vstgui) | User-interface toolkit mainly for audio plugins |
| WDL-OL | [olilarkin/wdl-ol](https://github.com/olilarkin/wdl-ol) | Simple-to-use C++ framework for developing cross-platform audio plugins (superseded by iPlug 2) |
| [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) | [WebAudio/web-audio-api](https://github.com/WebAudio/web-audio-api) | The Web Audio API provides a powerful and versatile system for controlling audio on the Web, allowing developers to choose audio sources, add effects to audio, create audio visualizations, apply spatial effects (such as panning) and much more. |
| [WebAudioModules](https://www.webaudiomodules.com) | [webaudiomodules/](https://github.com/webaudiomodules/) | WAM (WebAudioModules) — synthesizers and audio effects processors for web browsers |
| [WEBMIDI.js](https://webmidijs.org/) | [djipco/webmidi](https://github.com/djipco/webmidi) | WEBMIDI.js makes it easy to interact with MIDI instruments directly from a web browser or from Node.js |

Code Samples
------------

* [FFTConvolver](https://github.com/HiFi-LoFi/FFTConvolver) — audio convolution algorithm in C++ for real-time audio processing
* [KlangFalter](https://github.com/HiFi-LoFi/KlangFalter) — convolution audio plugin (e.g. for usage as convolution reverb)
* [py-modular](https://py-modular.readthedocs.io/) — modular and experimental programming environment with basic DSP routines in Python

Open Data Resources
-------------------

* [MoisesDB](https://github.com/moises-ai/moises-db) — Source separation public dataset by Moises
* [OpenAIR](https://www.openair.hosted.york.ac.uk/) — the Open Acoustic Impulse Response Library (Convolution Reverb Impulse Responses to recreate reverb character of space and equipment/recordings)

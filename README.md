Open-Source Audio Plugins & Apps
================================

A list of open-source VST (and other format) plugin/app projects. The intention of this list is to catalog open-source plugins or apps which are either fully featured or are useful examples which have non-trivial features.

https://openaudio.webprofusion.com

**Please contribute links!**

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

Audio Plugins
-------------

| Plugin | Description | Type | Framework |
| --- | --- | --- | --- |
| [ADLplug](https://github.com/jpcima/ADLplug) | FM Chip Synthesizer — OPL & OPN | Instrument | JUCE |
| [ampli-Fe](https://github.com/antonok-edm/ampli-Fe) | Cross-platform VST2 plugin written in Rust | Effect | Rust VST |
| [andes](https://github.com/artfwo/andes) | Sound synthesiser plugin based on Perlin noise | Instrument | JUCE |
| [Airwindows](https://github.com/airwindows/airwindows) | Various small and experimental effect plugins | Effect |  |
| [amsynth](https://github.com/amsynth/amsynth) | Analog-modelling (virtual analog) synthesizer | Instrument | GTK |
| [Argotlunar](https://github.com/mourednik/argotlunar) | Real-time delay-line granulator | Effect | JUCE |
| [Audio Effects](https://github.com/juandagilc/Audio-Effects) | Plugins implemented from the explanations in the book “Audio Effects: Theory, Implementation and Application” | Effect | JUCE |
| [Bespoke](https://github.com/awwbees/BespokeSynth) | Node-based modular synth with live coding | Instrument | JUCE |
| [BinAural VST](https://github.com/twoz/binaural-vst) | Mono-to-stereo plugin that positions sound in a 3D space using Head-Related Transfer Functions | Effect | JUCE |
| [BlackBird](https://khrykin.github.io/BlackBird) | Analog-inspired software synth with its own voice | Instrument | JUCE |
| [C1Bitcrusher](https://github.com/datajake1999/C1Bitcrusher) | Experimental and accurate bit reduction | Effect |
| [Cardinal](https://github.com/DISTRHO/Cardinal/) | Virtual modular synthesizer plugin | Instrument | DPF |
| [Calf Studio Gear](https://github.com/calf-studio-gear/calf) | Many LV2 and Jack audio plug-ins  | Effects | GTK |
| [CHOW](https://github.com/jatinchowdhury18/CHOW) | Maximally truculent distortion effect | Effect | JUCE |
| [Cloud Seed](https://github.com/ValdemarOrn/CloudSeed) | Algorithmic reverb for emulating huge, endless spaces and modulated echoes | Effect |  |
| [Cocoa Delay](https://github.com/tesselode/cocoa-delay) | Warm and lively delay | Effect | WDL-OL |
| [Convolver](https://github.com/teragonaudio/Convolver) | Impulse-response reverb | Effect | VSTGUI, JUCE |
| [Dexed](https://github.com/asb2m10/dexed) | DX7 FM plugin synth | Instrument | JUCE |
| [Digits](https://github.com/LouisGorenfeld/DigitsVst) | Phase-distortion synth inspired by Casio CZ series | Instrument | VSTGUI |
| [Distrho glBars](https://github.com/DISTRHO/glBars) | OpenGL bars visualization plugin (as seen in XMMS and XBMC/Kodi) adapted from jack_glbars | Effect | DPF |
| [Distrho Juice Plugins](https://github.com/DISTRHO/JuicePlugins) |  | Misc | DPF |
| [Distrho Kars](https://github.com/DISTRHO/Kars) | Simple karplus-strong plucked string synth based on the karplong DSSI example synth | Instrument | DPF |
| [Distrho Mini-Series](https://github.com/DISTRHO/Mini-Series) | Collection of small plugins based on LOSER-Dev Plugins | Effect | DPF |
| [Distrho MVerb](https://github.com/DISTRHO/MVerb) | DPF-based version of MVerb | Effect | DPF |
| [Distrho ndc Plugs](https://github.com/DISTRHO/ndc-Plugs) | DPF-based versions of some of ndc&nbsp;Plugs | Effect | DPF |
| [Distrho Nekobi](https://github.com/DISTRHO/Nekobi) | Simple single-oscillator synth based on Roland TB-303 | Instrument | DPF |
| [Distrho ProM](https://github.com/DISTRHO/ProM) | Music-visualizer plugin based on projectM | Effect | DPF |
| [Dragonfly Reverb](https://github.com/michaelwillis/dragonfly-reverb) | Hall-style reverb based on Freeverb3 algorithms | Effect | DPF |
| [Drops](https://github.com/clearly-broken-software/drops) | Single file audio player | Instrument | DPF |
| [Element](https://github.com/kushview/Element) | Advanced Audio Plugin Host | Misc | JUCE |
| [Eurorack](https://github.com/VCVRack/AudibleInstruments) | Diverse set of physical modeling sources, organic processors, wavetable oscillators, waveshapers, granular synths, and utility modules | Misc |  |
| [Flutterbird](https://github.com/tesselode/flutterbird) | Simple pitch fluctuation | Effect | iPlug 2 |
| [GainPlugin](https://github.com/satelllte/GainPlugin) | (Experimental) VST/AU audio plugin example based on JUCE with React-JUCE for UI. | Mics | JUCE, React-JUCE |
| [Gverb/Gigaverb](http://elements.byethost3.com/plugins.html) | Reverb | Effect | VSTGUI |
| [Helm](https://github.com/mtytel/helm) | Polyphonic synth with lots of modulation | Instrument | JUCE |
| [hexter](https://github.com/smbolton/hexter) | Yamaha DX7 modeling FM synth for DSSI | Instrument | DPF |
| [HiLoFilter](https://github.com/teragonaudio/HiLoFilter) | Simple hipass/lopass filter controlled with a single knob | Effect | JUCE |
| [JuceOPLVSTi](https://github.com/bsutherland/JuceOPLVSTi) | FM synth based on Yamaha OPL2/3 emulation from DOSBox | Instrument | JUCE |
| [Juno 6](https://sourceforge.net/projects/juno6/) | Roland Juno 6/60 Synthesizer | Instrument |  |
| [keithhearne/VSTPlugins](https://github.com/keithhearne/VSTPlugins) | Collection of VST plugins | Effect | JUCE |
| [K-Meter](https://github.com/mzuther/K-Meter) | Implementation of a K-System meter according to Bob Katz’ specifications | Effect | JUCE |
| [Key Repeat](https://michael-jan.github.io/key-repeat/) | Beat repeat sampler | Instrument | JUCE |
| [KickMaker](https://github.com/teragonaudio/KickMaker) | Synth specifically to create kick-drum sounds | Instrument | VSTGUI |
| [LameVST](https://github.com/Iunusov/LameVST) | LameMP3 as an effect | Effect |  |
| [Magical8bitPlug 2](https://github.com/yokemura/Magical8bitPlug2) | Old 8bit game console style synth | Instrument | JUCE
| [mda](https://sourceforge.net/projects/mda-vst/) | FX and virtual instruments for PC and Mac | Misc | (no&nbsp;GUI) |
| [mda-plugins-juce](https://github.com/hollance/mda-plugins-juce) | JUCE implementations of the classic MDA audio plug-ins | Misc | JUCE |
| [MidiChords](https://github.com/markwilkins/midi-chord-reader) | Detect chord names from a MIDI track and display them in a scrolling window during track playback | Misc | JUCE |
| [Mika Micro](https://github.com/tesselode/mika-micro) | Simple subtractive synth | Instrument | WDL-OL |
| [MVerb](https://github.com/martineastwood/mverb) | Studio-quality reverb using the Dattorro’s figure-of-eight reverb structure | Effect | VSTGUI |
| [Neural Amp Modeler LV2](https://github.com/mikeoliphant/neural-amp-modeler-lv2) | Neural amplifier modeler, LV2 version of Steven Atkinson's NAM plugin | Effect | no GUI |
| [Ninjas 2](https://github.com/clearly-broken-software/ninjas2) | Sample slicer, rewrite of Ninjas | Instrument | DPF |
| [NotNotchFilter](https://github.com/teragonaudio/NotNotchFilter) | Performance-oriented filter designed to replace the mid-EQ found in a standard 3-band DJ mixer | Effect | JUCE |
| [ndc Plugs](https://www.niallmoody.com/ndcplugs/plugins.htm) | VST plugins for Windows and OSX | Misc |  |
| [OctaSine](https://github.com/greatest-ape/OctaSine) | VST2 frequency modulation synthesizer written in Rust | Instrument | Rust VST |
| [Odin2](https://github.com/TheWaveWarden/odin2) | Polyphonic Synth | Instrument | JUCE |
| [OwlBass](https://github.com/PentagramPro/OwlBass) | Additive bass synth | Instrument | JUCE |
| [OB-Xd](https://github.com/reales/OB-Xd) | Based on the Oberheim OB-X | Instrument | JUCE |
| [Oxe FM Synth](https://github.com/oxesoft/oxefmsynth) | Multitimbral 8-operator FM synth (VST 2.4; Windows, Linux, macOS) | Instrument | VSTGUI |
| [PulseDelay](https://github.com/teragonaudio/PulseDelay) | Timed delay effect | Effect | (no&nbsp;GUI) |
| [QtVST](https://github.com/mbrucher/QtVST) | VST plugins with a Qt interface | Effect | Qt |
| [REACH](https://github.com/Sinuslabs/Reach) | Extraterrestrial Reverb for Electronic Music | Effect | JUCE |
| [Regrader](https://github.com/igorski/regrader) | Degenerative delay | Effect | VSTGUI |
| [Roth-AIR](https://github.com/danielrothmann/Roth-AIR) | Mixing tool for easily adding airy, crispy presence to audio | Effect | JUCE |
| [ScorchCrafter Guitar FX](https://sourceforge.net/projects/scorchcrafter/) | Audio DSP FX and plugins, mostly for guitar (amp sim) and other FX | Effect | VSTGUI |
| [Schrammel OJD](https://github.com/JanosGit/Schrammel_OJD) | Model of a modern classic guitar distortion pedal | Effect | JUCE |
| [sfizz](https://github.com/sfztools/sfizz) | SFZ parser library and instrument plugins | Instrument | VSTGUI |
| [ShoutVST](https://github.com/Iunusov/ShoutVST) | VST for streaming sound into Icecast/Shoutcast directly from VST hosts | Effect | VSTGUI, FLUID |
| [SmartGuitarAmp](https://github.com/GuitarML/SmartGuitarAmp) | Guitar amplifier-style plugin, that uses machine learning for emulating real world hardware | Instrument | JUCE
| [SmartGuitarPedal](https://github.com/GuitarML/SmartGuitarPedal) | Guitar pedal-style plugin, that uses machine learning for emulating real world hardware | Effect | JUCE
| [Sound Analyser](https://github.com/adamstark/Sound-Analyser) | Real-time audio analysis to allow anyone to quickly set up and experiment with different algorithms | Effect | JUCE |
| [Sound of Music](https://github.com/enter-opy/sound-of-music) | Multiband bitcrusher | Effect | JUCE |
| [SPARTA](https://github.com/leomccormack/SPARTA) | Spatial audio focused plug-in suite (Ambisonics encoders/decoders, 3-D panners/spatialisers, etc.) | Effect | [SAF](https://github.com/leomccormack/Spatial_Audio_Framework), JUCE |
| [Squeezer](https://github.com/mzuther/Squeezer) | Compressor with side-chain, several detection modes and filters, etc | Effect | JUCE |
| [Surge](https://surge-synthesizer.github.io/) | Subtractive wavetable synth | Instrument | VSTGUI |
| [Synister](https://github.com/the-synister/the-source) | Subtractive synth | Instrument | JUCE |
| [Syntage](https://github.com/lis355/Syntage) | VST 2.4 .Net Study Synth | Instrument |  |
| [Temper](https://github.com/creativeintent/temper) | Digital distortion targeting VST, VST3, and AU for OS X and Windows | Effect | Faust, JUCE |
| [Tunefish](https://github.com/paynebc/tunefish) | VST virtual analog synthesizer  | Instrument | JUCE |
| [traKmeter](https://github.com/mzuther/traKmeter) | Loudness meter for correctly setting up tracking and mixing levels | Effect | JUCE |
| [VCV Rack](https://github.com/VCVRack/Rack) | Virtual modular synth | Misc | RtAudio |
| [Vital](https://github.com/mtytel/vital) | Spectral warping wavetable synthesizer | Instrument | JUCE |
| [VSTSID](https://github.com/igorski/VSTSID) | SID synthesizer instrument  | Instrument |  |
| [VST2413](https://github.com/keijiro/vst2413) | FM synth based on emulator of YM2413 (OPLL) chip used in Sega Master System and FM-PAC MSX expansion | Instrument | (no GUI) |
| [WebCZ101](https://github.com/webaudiomodules/webcz101) | Virtual CZ101 synth in a browser | Instrument | [WAM](https://www.webaudiomodules.org/) |
| [WebDX7](https://github.com/webaudiomodules/webdx7) | Virtual Yamaha DX7 synth in a browser | Instrument | [WAM](https://www.webaudiomodules.org/) |
| [Wolf Shaper](https://github.com/pdesaulniers/wolf-shaper) | Waveshaper plugin with spline-based graph editor | Effect | DPF |
| [YK Chorus](https://github.com/SpotlightKid/ykchorus) | Chorus audio effect plugin based on DSP code by&nbsp;TAL | Effect | DPF |
| [zam-plugins](https://github.com/zamaudio/zam-plugins) | LADSPA/LV2/VST/JACK audio plugins for high-quality processing | Effect | DPF |
| [zynaddsubfx](https://github.com/zynaddsubfx/zynaddsubfx) | Additive/Subtractive AM/FM synthesizer with effects | Instrument | FLTK |

Collections
-----------

* [Linux Synths](http://linuxsynths.com/) — list of linux based synths, some of which are open-source
* [OpenAV](http://openavproductions.com/) — collection of instruments, effects, and development tool kits for Linux.
* [SFZ Instruments](https://sfzinstruments.github.io/) — list of SFZ instruments, most of which are free
* [StudioRack](https://studiorack.github.io/studiorack-site/) — open-source audio plugin registry, app and command line tools
* [VCV library](https://github.com/VCVRack/library) — library of plugins compatible with VCV Plugin Manager

Audio Apps
----------

| Software | Source | Description |
| --- | --- | --- |
| [Ardour](https://ardour.org/) | [Ardour/ardour](https://github.com/Ardour/ardour) | DAW |
| ASIO2WASAPI | [levmin/ASIO2WASAPI](https://github.com/levmin/ASIO2WASAPI) | Universal ASIO driver for Windows |
| [Audacity](https://www.audacityteam.org/) | [audacity/audacity](https://github.com/audacity/audacity) | Audio editor |
| [butterDAWg](https://github.com/Jaybee18/butterDAWg) | [Jaybee18/butterDAWg](https://github.com/Jaybee18/butterDAWg) | DAW (WIP) |
| [Carla](https://kx.studio/Applications:Carla) | [falkTX/Carla](https://github.com/falkTX/Carla) | GNU/Linux Plugin Host |
| [ChucK](https://chuck.stanford.edu/) | [ccrma/chuck](https://github.com/ccrma/chuck) | Strongly-timed, Concurrent, and On-the-fly Music Programming Language |
| [Element](https://kushview.net/element/) | [Kushview/Element](https://github.com/kushview/Element) | Advanced Audio Plugin Host |
| FlexASIO | [dechamps/FlexASIO](https://github.com/dechamps/FlexASIO) | Universal ASIO driver for Windows |
| [Giada](https://www.giadamusic.com/) | [monocasual/giada](https://github.com/monocasual/giada) | Loop machine |
| [Guitarix](https://guitarix.org/) | [SourceForge → guitarix](https://sourceforge.net/projects/guitarix/) | GNU/Linux Virtual Amplifier |
| [Helio Workstation](https://helio.fm/) | [helio-fm/helio-workstation](https://github.com/helio-fm/helio-workstation) | Sequencer |
| [HISE](http://hise.audio/) | [christophhart/HISE](https://github.com/christophhart/HISE) | Cross-platform framework/application for building sample-based virtual instruments (VST, AU, AAX) |
| [SFZ to HISE converter](https://keypleezer.com/sfz-to-hise-converter/) | [anderseklov/SFZ-to-HISE-converter](https://github.com/anderseklov/SFZ-to-HISE-converter) | JavaScript app that translates SFZ instrument files into HISE samplemaps and JSON data objects. Runs in a modern web browser. MIT license. |
| [Harmonoid](https://github.com/harmonoid/harmonoid) | [harmonoid/harmonoid](https://github.com/harmonoid/harmonoid) | Cross-platform music player (Mobile & Desktop) written in Flutter |
| [Hydrogen](http://hydrogen-music.org/) | [hydrogen-music/hydrogen](https://github.com/hydrogen-music/hydrogen) | Drum machine |
| [NewMixer](https://github.com/jatinchowdhury18/NewMixer) | [jatinchowdhury18/NewMixer](https://github.com/jatinchowdhury18/NewMixer) | Mixing Software |
| [LMMS](https://lmms.io/) | [LMMS/lmms](https://github.com/LMMS/lmms) | DAW |
| [OpenMPT](https://openmpt.org/) | [OpenMPT/openmpt](https://github.com/OpenMPT/openmpt) | Popular tracker (formerly ModPlug Tracker) for Windows with support for IT, XM, S3M, MOD modules, VST plugins and ASIO |
| [ossia score](https://ossia.io) | [ossia/score](https://github.com/ossia/score) | Cross-platform intermedia sequencer |
| [OwlPlug](https://owlplug.com/) | [DropSnorz/OwlPlug](https://github.com/DropSnorz/OwlPlug) | Audio plugin manager |
| [orDrumbox](https://www.ordrumbox.com/) | [SourceForge → ordrumbox](https://sourceforge.net/projects/ordrumbox/) | Drum machine |
| [Psycle](http://psycle.pastnotecut.org/portal.php) | [SourceForge → psycle](https://sourceforge.net/projects/psycle/) | Modular music tracker |
| [SampleScanner](https://github.com/psobot/SampleScanner) | [psobot/SampleScanner](https://github.com/psobot/SampleScanner) | Tool for auto-sampling hardware instruments |
| [Sonic Pi](https://sonic-pi.net/) |  [sonic-pi-net/sonic-pi](https://github.com/sonic-pi-net/sonic-pi) | Code-based music creation and performance tool |
| [SuperCollider](https://supercollider.github.io/) |  [supercollider/supercollider](https://github.com/supercollider/supercollider) | SuperCollider is a platform for audio synthesis and algorithmic composition, used by musicians, artists, and researchers working with sound. |
| Stargate DAW | [stargatedaw/stargate](https://github.com/stargatedaw/stargate) | Cross-platform, all-in-one DAW and plugin suite |
| [StudioRack](https://studiorack.github.io/studiorack-site/) | [github.com/studiorack](https://github.com/studiorack) | Audio plugin manager |
| [VCV Rack](https://vcvrack.com/) | [VCVRack/Rack](https://github.com/VCVRack/Rack) | Modular synth |
| yabridge | [robbert-vdh/yabridge](https://github.com/robbert-vdh/yabridge) | Linux bridge for Windows VSTs |
| [Zrythm](https://www.zrythm.org/) | [zrythm/zrythm](https://github.com/zrythm/zrythm) | DAW |

Software Development Libraries & APIs
------------------------------

| Library | Source | Description |
| --- | --- | --- |
| [Avendish](https://celtera.github.io/avendish) | [celtera/avendish](https://github.com/celtera/avendish) | C++20 framework for any sort of audio / video / midi media objects |
| [Cabbage](https://cabbageaudio.com/) | [rorywalsh/cabbage](https://github.com/rorywalsh/cabbage) | Framework for developing audio plugins and standalone instruments with Csound |
| [Csound](https://csound.com/) | [csound/csound](https://github.com/csound/csound) | Programming language for sound and music synthesis |
| [Cmajor](https://cmajor.dev/) | [SoundStacks/cmajor](https://github.com/SoundStacks/cmajor) | Cmajor is a programming language for writing fast, portable audio software. |
| [Clap](https://github.com/free-audio/clap) | [free-audio/clap](https://github.com/free-audio/clap) | CLAP stands for CLever Audio Plugin. It is an audio plugin ABI which defines a standard for Digital Audio Workstations and audio plugins (synthesizers, audio effects, ...) to work together. |
| [DawDreamer](https://github.com/DBraun/DawDreamer) | [DBraun/DawDreamer](https://github.com/DBraun/DawDreamer) | Audio-processing Python framework supporting core DAW features written with JUCE |
| [DPF](https://distrho.sourceforge.io/) | [DISTRHO/DPF](https://github.com/DISTRHO/DPF) | C++ framework for creating cross-platform audio plugins. DPF can build for LADSPA, DSSI, LV2, and VST formats. |
| [Dplug](https://dplug.org/) | [AuburnSounds/Dplug](https://github.com/AuburnSounds/Dplug) | Dplug lets you create audio plug-ins with unmatched simplicity and speed, using the D language. |
| [Elementary](https://www.elementary.audio/) | [elemaudio/elementary](https://github.com/elemaudio/elementary) | JavaScript runtime for writing native audio applications, as well as a library and framework for composing audio signal processes. |
| [Faust](https://faust.grame.fr/) | [grame-cncm/faust](https://github.com/grame-cncm/faust) | Functional programming language for real-time signal processing |
| [FluidSynth](https://www.fluidsynth.org/) | [FluidSynth/fluidsynth](https://github.com/FluidSynth/fluidsynth) | Real-time synth based on the SoundFont&nbsp;2 specifications |
| [Heavy](https://wasted-audio.github.io/hvcc/) | [Wasted-Audio/hvcc](https://github.com/Wasted-Audio/hvcc) | The heavy hvcc compiler for Pure Data patches. With generators for Bela, Fabric, js, pdext, Unity, Daisy, DPF, and Wwise frameworks. |
| [iPlug&nbsp;2](https://iplug2.github.io/) | [iPlug2/iPlug2](https://github.com/iPlug2/iPlug2) | Simple-to-use C++ framework for developing cross-platform audio plugins/apps |
| [JUCE](https://juce.com) | [juce-framework/JUCE](https://github.com/juce-framework/JUCE) | Cross-platform C++ framework for developing desktop and mobile apps and audio plugins |
| [jVSTwRapper](http://jvstwrapper.sourceforge.net/) | [SourceForge → jvstwrapper](https://sourceforge.net/projects/jvstwrapper/) | Wrapper to write audio plugins in Java (VST 2.4, AU, LADSPA; Windows, Linux, macOS) |
| [libopenmpt](https://lib.openmpt.org/libopenmpt/) | [OpenMPT/openmpt](https://github.com/OpenMPT/openmpt) | Cross-platform C/C++ module-playback library based on OpenMPT |
| [libspatialaudio](https://videolabs.io) | [videolabs/libspatialaudio](https://github.com/videolabs/libspatialaudio) | Cross-platform C++ library for Ambisonic encoding and decoding, filtering and binaural rendering |
| [PortAudio](http://www.portaudio.com/) | [Assembla → portaudio](https://app.assembla.com/spaces/portaudio/git/source) | Cross-platform audio I/O library |
| [r-audio](https://github.com/bbc/r-audio) | [bbc/r-audio](https://github.com/bbc/r-audio) | A library of React components for building Web Audio graphs. |
| [React-JUCE](https://docs.react-juce.dev/) | [JoshMarler/react-juce](https://github.com/JoshMarler/react-juce) | React-JUCE (formerly named Blueprint) is a hybrid JavaScript/C++ framework that enables a [React.js](https://reactjs.org/) frontend for a [JUCE](https://juce.com/) application or plugin. |
| [RustAudio](https://rust-audio.discourse.group/) | [rustaudio](https://github.com/RustAudio) | Collection of audio processing and plugin libraries for the Rust language  |
| RtAudio | [thestk/rtaudio](https://github.com/thestk/rtaudio) | C++ classes for cross-platform real-time audio I/O |
| rust-vst | [rust-dsp/rust-vst](https://github.com/rust-dsp/rust-vst) | VST 2.4 API implementation in the Rust language |
| [SAF](https://leomccormack.github.io/Spatial_Audio_Framework/) | [leomccormack/Spatial_Audio_Framework](https://github.com/leomccormack/Spatial_Audio_Framework) | Cross-platform framework for developing spatial audio related algorithms and software in C/C++ |
| [SOUL](https://soul.dev/) | [soul-lang/SOUL](https://github.com/soul-lang/SOUL) | SOUL (SOUnd Language) is an attempt to modernise and optimise the way high-performance, low-latency audio code is written and executed. |
| [Soundpipe](https://paulbatchelor.github.io/proj/soundpipe.html) | [PaulBatchelor/Soundpipe](https://github.com/PaulBatchelor/Soundpipe) | Lightweight music DSP library written in C; over 100 modules, many ported from Csound |
| [tracktion_engine](https://www.tracktion.com/develop/tracktion-engine) | [Tracktion/tracktion_engine](https://github.com/Tracktion/tracktion_engine) | Tracktion Engine module. You can build anything from a simple file-player or sequencer to a full blown DAW. Tracktion Engine is supplied as a JUCE module so it can easily fit in to an existing JUCE application. |
| [Tone.js](https://tonejs.github.io/) | [Tonejs/Tone.js](https://github.com/Tonejs/Tone.js) | A Web Audio framework for making interactive music in the browser. |
| VSTGUI | [steinbergmedia/vstgui](https://github.com/steinbergmedia/vstgui) | User-interface toolkit mainly for audio plugins |
| WDL-OL | [olilarkin/wdl-ol](https://github.com/olilarkin/wdl-ol) | Simple-to-use C++ framework for developing cross-platform audio plugins (superseded by iPlug&nbsp;2) |
| [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) | [web-audio-api](https://github.com/WebAudio/web-audio-api) | The Web Audio API provides a powerful and versatile system for controlling audio on the Web, allowing developers to choose audio sources, add effects to audio, create audio visualizations, apply spatial effects (such as panning) and much more. [Web Audio API source code (Chromium / Blink)](https://chromium.googlesource.com/chromium/blink/+/refs/heads/main/Source/modules/webaudio). |
| [WebAudioModules](https://webaudiomodules.org/) | [webaudiomodules](https://github.com/webaudiomodules) | WAM (WebAudioModules) — synthesizers and audio effects processors for web browsers |

Code Samples
------------

* [KlangFalter](https://github.com/HiFi-LoFi/KlangFalter) — convolution audio plugin (e.g. for usage as convolution reverb)
* [FFTConvolver](https://github.com/HiFi-LoFi/FFTConvolver) — audio convolution algorithm in C++ for real-time audio processing
* [py-modular](https://py-modular.readthedocs.io/) — modular and experimental programming environment with basic DSP routines in Python

Open Data Resources
-------------------

* [OpenAIR](https://www.openairlib.net/) — the Open Acoustic Impulse Response Library (Convolution Reverb Impulse Responses to recreate reverb character of space and equipment/recordings)

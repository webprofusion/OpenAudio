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
| [Airwindows](https://github.com/airwindows/airwindows) | Various small and experimental effect plugins | Effect | N/A |
| [ampli-Fe](https://github.com/antonok-edm/ampli-Fe) | Cross-platform VST2 plugin written in Rust | Effect | Rust VST |
| [amsynth](https://github.com/amsynth/amsynth) | Analog-modelling (virtual analog) synthesizer | Instrument | GTK |
| [andes](https://github.com/artfwo/andes) | Sound synthesiser plugin based on Perlin noise | Instrument | JUCE |
| [Argotlunar](https://github.com/mourednik/argotlunar) | Real-time delay-line granulator | Effect | JUCE |
| [Audio Effects](https://github.com/juandagilc/Audio-Effects) | Plugins implemented from the explanations in the book “Audio Effects: Theory, Implementation and Application” | Effect | JUCE |
| [Bespoke](https://github.com/awwbees/BespokeSynth) | Node-based modular synth with live coding | Instrument | JUCE |
| [BinAural VST](https://github.com/twoz/binaural-vst) | Mono-to-stereo plugin that positions sound in a 3D space using Head-Related Transfer Functions | Effect | JUCE |
| [BlackBird](https://khrykin.github.io/BlackBird) | Analog-inspired software synth with its own voice | Instrument | JUCE |
| [C1Bitcrusher](https://github.com/datajake1999/C1Bitcrusher) | Experimental and accurate bit reduction | Effect | N/A |
| [Calf Studio Gear](https://github.com/calf-studio-gear/calf) | Many LV2 and Jack audio plug-ins | Effect | GTK |
| [Cardinal](https://github.com/DISTRHO/Cardinal/) | Virtual modular synthesizer plugin | Instrument | DPF |
| [CHOW](https://github.com/jatinchowdhury18/CHOW) | Maximally truculent distortion effect | Effect | JUCE |
| [Cloud Seed](https://github.com/ValdemarOrn/CloudSeed) | Algorithmic reverb for emulating huge, endless spaces and modulated echoes | Effect | N/A |
| [Cocoa Delay](https://github.com/tesselode/cocoa-delay) | Warm and lively delay | Effect | WDL-OL |
| [Convolver](https://github.com/teragonaudio/Convolver) | Impulse-response reverb | Effect | JUCE, VSTGUI |
| [cStop](https://github.com/calgoheen/cStop) | Tape stop | Effect | JUCE |
| [Dexed](https://github.com/asb2m10/dexed) | DX7 FM plugin synth | Instrument | JUCE |
| [Digits](https://github.com/LouisGorenfeld/DigitsVst) | Phase-distortion synth inspired by Casio CZ series | Instrument | VSTGUI |
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
| [ADSR](https://adsr.vercel.app/) | [satelllte/adsr](https://github.com/satelllte/adsr) | Simple web-based ADSR synth |
| [Ardour](https://ardour.org/) | [Ardour/ardour](https://github.com/Ardour/ardour) | DAW |
| ASIO2WASAPI | [levmin/ASIO2WASAPI](https://github.com/levmin/ASIO2WASAPI) | Universal ASIO driver for Windows |
| [Audacity](https://www.audacityteam.org/) | [audacity/audacity](https://github.com/audacity/audacity) | Audio editor |
| [butterDAWg](https://github.com/Jaybee18/butterDAWg) | [Jaybee18/butterDAWg](https://github.com/Jaybee18/butterDAWg) | DAW (WIP) |
| [Carla](https://kx.studio/Applications:Carla) | [falkTX/Carla](https://github.com/falkTX/Carla) | GNU/Linux Plugin Host |
| [ChucK](https://chuck.stanford.edu/) | [ccrma/chuck](https://github.com/ccrma/chuck) | Strongly-timed, Concurrent, and On-the-fly Music Programming Language |
| [Element](https://kushview.net/element/) | [Kushview/Element](https://github.com/Kushview/Element) | Advanced Audio Plugin Host |
| FlexASIO | [dechamps/FlexASIO](https://github.com/dechamps/FlexASIO) | Universal ASIO driver for Windows |
| [Giada](https://www.giadamusic.com/) | [monocasual/giada](https://github.com/monocasual/giada) | Loop machine |
| [Guitarix](https://guitarix.org/) | [SourceForge → guitarix](https://sourceforge.net/projects/guitarix) | GNU/Linux Virtual Amplifier |
| [Harmonoid](https://github.com/harmonoid/harmonoid) | [harmonoid/harmonoid](https://github.com/harmonoid/harmonoid) | Cross-platform music player (Mobile & Desktop) written in Flutter |
| [Helio Workstation](https://helio.fm/) | [helio-fm/helio-workstation](https://github.com/helio-fm/helio-workstation) | Sequencer |
| [HISE](http://hise.audio/) | [christophhart/HISE](https://github.com/christophhart/HISE) | Cross-platform framework/application for building sample-based virtual instruments (VST, AU, AAX) |
| [Hydrogen](http://hydrogen-music.org/) | [hydrogen-music/hydrogen](https://github.com/hydrogen-music/hydrogen) | Drum machine |
| [LMMS](https://lmms.io/) | [LMMS/lmms](https://github.com/LMMS/lmms) | DAW |
| [NewMixer](https://github.com/jatinchowdhury18/NewMixer) | [jatinchowdhury18/NewMixer](https://github.com/jatinchowdhury18/NewMixer) | Mixing Software |
| [OpenMPT](https://openmpt.org/) | [OpenMPT/openmpt](https://github.com/OpenMPT/openmpt) | Popular tracker (formerly ModPlug Tracker) for Windows with support for IT, XM, S3M, MOD modules, VST plugins and ASIO |
| [orDrumbox](https://www.ordrumbox.com/) | [SourceForge → ordrumbox](https://sourceforge.net/projects/ordrumbox) | Drum machine |
| [ossia score](https://ossia.io) | [ossia/score](https://github.com/ossia/score) | Cross-platform intermedia sequencer |
| [OwlPlug](https://owlplug.com/) | [DropSnorz/OwlPlug](https://github.com/DropSnorz/OwlPlug) | Audio plugin manager |
| [Psycle](http://psycle.pastnotecut.org/portal.php) | [SourceForge → psycle](https://sourceforge.net/projects/psycle) | Modular music tracker |
| [SampleScanner](https://github.com/psobot/SampleScanner) | [psobot/SampleScanner](https://github.com/psobot/SampleScanner) | Tool for auto-sampling hardware instruments |
| [SFZ to HISE converter](https://keypleezer.com/sfz-to-hise-converter/) | [anderseklov/SFZ-to-HISE-converter](https://github.com/anderseklov/SFZ-to-HISE-converter) | JavaScript app that translates SFZ instrument files into HISE samplemaps and JSON data objects. Runs in a modern web browser. MIT license. |
| [Sonic Pi](https://sonic-pi.net/) | [sonic-pi-net/sonic-pi](https://github.com/sonic-pi-net/sonic-pi) | Code-based music creation and performance tool |
| Stargate DAW | [stargatedaw/stargate](https://github.com/stargatedaw/stargate) | Cross-platform, all-in-one DAW and plugin suite |
| [StudioRack](https://studiorack.github.io/studiorack-site/) | [studiorack/studiorack](https://github.com/studiorack/studiorack) | Audio plugin manager |
| [SuperCollider](https://supercollider.github.io/) | [supercollider/supercollider](https://github.com/supercollider/supercollider) | SuperCollider is a platform for audio synthesis and algorithmic composition, used by musicians, artists, and researchers working with sound. |
| [VCV Rack](https://vcvrack.com/) | [VCVRack/Rack](https://github.com/VCVRack/Rack) | Modular synth |
| yabridge | [robbert-vdh/yabridge](https://github.com/robbert-vdh/yabridge) | Linux bridge for Windows VSTs |
| [Zrythm](https://www.zrythm.org/) | [zrythm/zrythm](https://github.com/zrythm/zrythm) | DAW |

import fs from 'fs';
import {plugins, renderPluginsTable} from './data';

fs.rmSync('out', {recursive: true, force: true});
fs.mkdirSync('out');

fs.writeFileSync(
  'out/README.md',
  `
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

${renderPluginsTable(plugins)}
`,
);

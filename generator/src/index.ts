import fs from 'fs';
import {pluginsRenderer} from './data/renderers/plugins.renderer';
import {collectionsRenderer} from './data/renderers/collections.renderer';
import {appsRenderer} from './data/renderers/apps.renderer';
import {librariesRenderer} from './data/renderers/libraries.renderer';
import {
  zApps,
  zCollections,
  zLibraries,
  zPlugins,
  zResources,
  zSamples,
} from './data/types';

import _apps from '../../data/apps.json';
import _collections from '../../data/collections.json';
import _libraries from '../../data/libraries.json';
import _plugins from '../../data/plugins.json';
import _resources from '../../data/resources.json';
import _samples from '../../data/samples.json';

const apps = zApps.parse(_apps);
const collections = zCollections.parse(_collections);
const libraries = zLibraries.parse(_libraries);
const plugins = zPlugins.parse(_plugins);
const resources = zResources.parse(_resources);
const samples = zSamples.parse(_samples);

fs.rmSync('out', {recursive: true, force: true});
fs.mkdirSync('out');

fs.writeFileSync(
  'out/README.md',
  `Open-Source Audio Plugins & Apps
================================

A list of open-source VST (and other format) plugin/app projects. The intention of this list is to catalog open-source plugins or apps which are either fully featured or are useful examples which have non-trivial features.

https://openaudio.webprofusion.com

**Please contribute links! See [CONTRIBUTING.md](CONTRIBUTING.md)**

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

${pluginsRenderer(plugins)}

Collections
-----------

${collectionsRenderer(collections)}

Audio Apps
----------

${appsRenderer(apps)}

Software Development Libraries & APIs
------------------------------

${librariesRenderer(libraries)}

Code Samples
------------

${collectionsRenderer(samples)}

Open Data Resources
-------------------

${collectionsRenderer(resources)}
`,
);

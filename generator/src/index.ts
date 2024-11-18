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

Our site and README are generated from the lists defined in code. **Links are no longer edited directly in the README.** To contribute links you will need to modify the collection you want to update and submit that to us with a new GitHub Pull Request (PR). You can do that directly on GitHub by clicking the *Edit* button on the top right of the page when viewing any of the collection files:

_Do not edit any other files as updating a generated file will cause your changes to be lost._

Choose the collection to edit:

<ul>
  <li><a href="data/plugins.json">Audio Plugins</a></li>
  <li><a href="data/collections.json">Collections</a></li>
  <li><a href="data/apps.json">Audio Apps</a></li>
  <li><a href="data/libraries.json">Software Development Libraries</a></li>
  <li><a href="data/samples.json">Code Samples</a></li>
  <li><a href="data/resources.json">Open Data Resources</a></li>
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

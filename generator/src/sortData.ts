import fs from 'fs';
import path from 'path';
import {sortByNameCaseInsensitive} from './utils/array/sortByNameCaseInsensitive';

// Contributors don't need to keep entries in order; this rewrites each data file sorted by name.
const dataDirectory = path.join('..', 'data');

for (const fileName of fs.readdirSync(dataDirectory)) {
  if (!fileName.endsWith('.json')) {
    continue;
  }

  const filePath = path.join(dataDirectory, fileName);
  const source = fs.readFileSync(filePath, 'utf8');
  const items = JSON.parse(source) as Array<{name: string}>;
  if (!Array.isArray(items)) {
    throw new TypeError(`${filePath} must contain a JSON array`);
  }

  // Keep the file's existing line endings so Windows checkouts don't show spurious changes.
  const eol = source.includes('\r\n') ? '\r\n' : '\n';
  const sorted = sortByNameCaseInsensitive(items);
  const output = `${JSON.stringify(sorted, null, 2)}\n`.replace(/\n/g, eol);

  if (output !== source) {
    fs.writeFileSync(filePath, output);
    console.log(`Sorted ${filePath}`);
  }
}

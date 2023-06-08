import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

import { program } from 'commander';
import chalk from 'chalk';

const returnCommandStatus = (name, path, isFailed) => {
  if (isFailed)
    return chalk.yellow(
      `⚠ ${chalk.bgYellow(
        'WARNING'
      )} Component '${name}' already exists in ${path}! Creation skipped.`
    );

  return chalk.green(
    `✓ ${chalk.bgGreen('SUCCESS')} Component <${name} /> created in ${path}`
  );
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program.version('1.0.0').description('Custom CLI for React');

program
  .command('make')
  .command('component <name>')
  .alias('c')
  .description('Create a new React component')
  .option('-p, --path <path>', 'Specify a custom path')
  .action((name, options) => {
    const hookName = `use${name}`;
    const propsName = `${name}Props`;

    let componentFolder;
    let indexFile;
    let trimmedPath;

    if (options.path) {
      componentFolder = path.join(__dirname, options.path, name);
      indexFile = path.join(__dirname, options.path, 'index.ts');
      trimmedPath = componentFolder.substring(
        componentFolder.indexOf(options.path || 'components')
      );
    } else {
      componentFolder = path.join(__dirname, 'src', 'components', name);
      indexFile = path.join(__dirname, 'src', 'components', `index.ts`);
      trimmedPath = `components/${name};`;
    }

    const componentFile = path.join(componentFolder, 'index.tsx');
    const stylesFile = path.join(componentFolder, 'styles.ts');
    const typesFile = path.join(componentFolder, 'types.ts');
    const hookFile = path.join(componentFolder, `${hookName}.ts`);

    const stylesContent = `import styled from 'styled-components';\n`;
    const typesContent = `export type ${propsName} = {};\n`;
    const hookContent = `import { useState, useEffect } from 'react';\n
export const ${hookName} = () => {};\n`;

    const componentContent = `import { ${hookName} } from 'components/${name}/${hookName}';
import { ${propsName} } from 'components/${name}/types';

const ${name} = ({}: ${propsName}) => {
  use${name}();

  return <div></div>;
};

export default ${name};\n`;

    if (fs.existsSync(componentFolder))
      return console.log(returnCommandStatus(name, trimmedPath, true));

    fs.mkdirSync(componentFolder, { recursive: true });
    fs.writeFileSync(componentFile, componentContent);
    fs.writeFileSync(stylesFile, stylesContent);
    fs.writeFileSync(typesFile, typesContent);
    fs.writeFileSync(hookFile, hookContent);

    console.log(returnCommandStatus(name, trimmedPath));
  });

program.parse(process.argv);

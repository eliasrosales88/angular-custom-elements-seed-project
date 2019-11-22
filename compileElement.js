const fs = require('fs');
const {execSync} = require('child_process');

const PREFIX = "ue";
const NAME = "seed";
const componentName = `${PREFIX}-${NAME}`;

    

(function compileComponent(componentName) {
    console.log(`Compiling - ${componentName}`);
    
    const buildJsFiles = `ng build --prod --output-hashing=none --aot`;
    const bundleIntoSingleFile = `cat dist/ace-seed/runtime-es5.js dist/ace-seed/polyfills-es5.js dist/ace-seed/main-es5.js > dist/ace-seed/${componentName}.js`;
    const copyBundledComponent = `cp dist/ace-seed/${componentName}.js dist/element/`;

    execSync(`${buildJsFiles} && ${bundleIntoSingleFile} && ${copyBundledComponent}`);
})(componentName);

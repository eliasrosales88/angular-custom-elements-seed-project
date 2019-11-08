#!/bin/sh

rm -r -f dist/ &&
mkdir -p dist/element &&
node compileElement.js &&
rm -r -f dist/ace-seed
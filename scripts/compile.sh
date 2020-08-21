#!/bin/sh
node scripts/generateIndex.js && \
npm run compile && \
rm -rf dist/__snapshots__ src/index.js

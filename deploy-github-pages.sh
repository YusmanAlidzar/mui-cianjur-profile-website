#!/usr/bin/env bash
set -e

npm install
npm run build

mkdir -p docs
cp -R dist/client/* docs/

printf "\nBuild completed.\n"
printf "Upload the contents of the docs/ folder to the gh-pages branch or use the GitHub Actions workflow.\n"

#!/usr/bin/env/bash
if [ "$TRAVIS_BRANCH" == "master" ]; then
  npm run docs
fi

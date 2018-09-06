#!/usr/bin/env bash

npm i &> /dev/null
rm -rf spec
mv ./__answerBranch/specs ./specs
npm test

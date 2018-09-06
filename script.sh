#!/usr/bin/env bash

npm i &> /dev/null
rm -rf specs
mv ./__answerBranch/specs ./specs
npm test

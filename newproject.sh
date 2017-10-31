#!/bin/bash
if [ "$1" ]; then
  git checkout -b "$1"
  mkdir "$1"
  cd "$1"
else
  echo -n "Enter kata name: "
  read message
  git checkout -b "$message"
  mkdir "$message"
  cd "$message"
fi
touch README.md
touch solution.js
atom .
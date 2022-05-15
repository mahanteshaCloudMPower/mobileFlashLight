#!/usr/bin/env bash

# rename the file name of _nuxt
mv ./dist/_nuxt ./dist/nuxt

# find and replace
find ./dist -type f -exec sed -i 's+/_nuxt/+./nuxt/+g' {} \;
find ./dist/nuxt -type f -exec sed -i 's+/_nuxt/+./nuxt/+g' {} \;
find ./dist/ -type f -exec sed -i 's+/client./+./client/+g' {} \;
find ./dist/nuxt -type f -exec sed -i 's+/client./+./client/+g' {} \;
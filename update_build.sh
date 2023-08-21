#! /usr/bin/env bash

repo='sstefanofm.github.io'
build='build'

rm -rf $build/
react-scripts $build
git clone git@github.com:sstefanofm/$repo.git
mv $repo/.git* $build/
rm -rf $repo/
cd $build/
git add ./
git commit
cd ../
printf "\n\e[32mBuild is ready. cd into build and push the changes :D\e[37m\n\n"
sleep 1
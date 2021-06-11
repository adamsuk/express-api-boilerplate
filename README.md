# Express API Boilerplate
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This repo is for my simple Express JS boilerplate code specifically tailored for API use.

### Why this boilerplate

So I wanted to write one from scratch so I could understand all the moving parts. I'm sure there's many different ways cutting this cloth but I achieved what I wanted to and have a route forwards with the rest.

### Specifics

One of the items I wanted to address with this boilerplate was routing. I wanted to have the ability to quickly add different methods and paths to my API without having to change existing code.

The routing works on a folder (for allowed methods) and file (for allowed paths) basis. This means anything in `./src/routes` can be changed and it'll work out the box!

### Examples

This comes with a tested example `hello-world`.

Based on the routing approach the output of `./src/routes/GET/hello-world.js` can be obtained via a `GET` request to `http://localhost:3001/hello-world`.

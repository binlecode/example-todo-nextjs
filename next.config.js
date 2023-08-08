/** @type {import('next').NextConfig} */

let assetPrefix = "";
let basePath = "/";

// todo: get this from env var
const deployToGhPages = true;

if (deployToGhPages) {
  const repo = "example-todo-nextjs";
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  // output: "standalone",
  // enable statix export for gh-pages hosting
  output: "export",
  // set output dir to `dist`
  distDir: "dist",

  // asset prefix to support gh-pages repo url path
  assetPrefix: assetPrefix,
  basePath: basePath,
};

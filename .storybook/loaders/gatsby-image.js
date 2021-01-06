const path = require("path");
const loaderUtils = require("loader-utils");

const { fluid, fixed } = require("gatsby-plugin-sharp/index");

function getFileObject(absolutePath, hash, name, extension) {
  return {
    id: `${absolutePath}${hash}`,
    name: name,
    absolutePath,
    extension,
    internal: {
      contentDigest: hash
    }
  };
}

const addPrefix = args =>
  process.env.PATH_PREFIX
    ? { ...args, pathPrefix: process.env.PATH_PREFIX }
    : args;

exports.default = function(content) {
  /**
   * Different alias names used to keep Fixed and Fluid image types safe.
   * See ../../src/images/images.d.ts
   */
  
  const loaderName = this._module.rawRequest.split("!")[0];
  const isFixed = loaderName === "gatsby-image-fixed";

  console.log("loaderName " + loaderName);
  const args = addPrefix(loaderUtils.parseQuery(this.resourceQuery || "?"));

  const callback = this.async();
  const extension = path.extname(this.resourcePath).replace(/\./, "");
  const name = path
    .basename(this.resourcePath)
    .replace(path.extname(this.resourcePath), "");
  console.log("extension " + extension);

  /**
   * No need to worry about cache.
   * Generate similar to Gatsby https://github.com/gatsbyjs/gatsby/blob/494ad071f0428b04d35f6e813a603bf8e3b78cac/packages/gatsby-plugin-sharp/src/process-file.js#L234
   */
  const hashDigest = loaderUtils.getHashDigest(content, "md5", "hex", 100);

  const file = getFileObject(this.resourcePath, hashDigest, name, extension);
  console.log("resourcePath " + this.resourcePath);
  const processedFile = isFixed ? fixed({ file, args, reporter: {...console, panic: console.error} }) : fluid({ file, args, reporter: {...console, panic: console.error} });
  console.log("file, args " ,file, args);
  processedFile
    .then(res => {
      console.log(res);
      const response = `module.exports = ${JSON.stringify(res)};`;
      return callback(null, response);
    })
    .catch(err => console.error(`Error loading image: ${err}`));
};

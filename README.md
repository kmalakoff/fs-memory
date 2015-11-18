# fs-memory

Provides a drop-in replacement for the Node.js fs module.

You can use it in webpack using:

```
module.exports = {
  ...
  resolve: {
    ...
    alias: {
      fs: require.resolve('fs-memory/singleton')
    }
  }
  ...
}

```

Initialize it:

```
var fs = require('fs-memory/singleton');

fs.__loadTree(rootNode);
```

Use webpack's fs-loader module to pass it data in the form:

```
var rootNode = {
  "data": {
    "name": "tinker-test-project",
    "stat": {
      "dev": 16777218,
      "mode": 16877,
      "nlink": 14,
      "uid": 501,
      "gid": 20,
      "rdev": 0,
      "blksize": 4096,
      "ino": 164218765,
      "size": 476,
      "blocks": 0,
      "atime": 1447825336000,
      "mtime": 1447825336000,
      "ctime": 1447825336000,
      "birthtime": 1447823326000
    }
  },
  "children": [
    {
      "data": {
        "name": "node_modules",
        "stat": {
          "dev": 16777218,
          "mode": 16877,
          "nlink": 14,
          "uid": 501,
          "gid": 20,
          "rdev": 0,
          "blksize": 4096,
          "ino": 164218765,
          "size": 476,
          "blocks": 0,
          "atime": 1447825336000,
          "mtime": 1447825336000,
          "ctime": 1447825336000,
          "birthtime": 1447823326000
        }
      },
      "children": [
        {
          "data": {
            "name": "backbone",
            "stat": {
              "dev": 16777218,
              "mode": 16877,
              "nlink": 14,
              "uid": 501,
              "gid": 20,
              "rdev": 0,
              "blksize": 4096,
              "ino": 164218765,
              "size": 476,
              "blocks": 0,
              "atime": 1447825336000,
              "mtime": 1447825336000,
              "ctime": 1447825336000,
              "birthtime": 1447823326000
            }
          },
          "children": [
            {
              "data": {
                "name": "README.md",
                "contents": __webpack_require__(2),
                "stat": {
                  "dev": 16777218,
                  "mode": 16877,
                  "nlink": 14,
                  "uid": 501,
                  "gid": 20,
                  "rdev": 0,
                  "blksize": 4096,
                  "ino": 164218765,
                  "size": 476,
                  "blocks": 0,
                  "atime": 1447825336000,
                  "mtime": 1447825336000,
                  "ctime": 1447825336000,
                  "birthtime": 1447823326000
                }
              }
            },
            {
              "data": {
                "name": "backbone-min.js",
                "contents": __webpack_require__(3),
                "stat": {
                  "dev": 16777218,
                  "mode": 16877,
                  "nlink": 14,
                  "uid": 501,
                  "gid": 20,
                  "rdev": 0,
                  "blksize": 4096,
                  "ino": 164218765,
                  "size": 476,
                  "blocks": 0,
                  "atime": 1447825336000,
                  "mtime": 1447825336000,
                  "ctime": 1447825336000,
                  "birthtime": 1447823326000
                }
              }
            },
            {
              "data": {
                "name": "backbone.js",
                "contents": __webpack_require__(4),
                "stat": {
                  "dev": 16777218,
                  "mode": 16877,
                  "nlink": 14,
                  "uid": 501,
                  "gid": 20,
                  "rdev": 0,
                  "blksize": 4096,
                  "ino": 164218765,
                  "size": 476,
                  "blocks": 0,
                  "atime": 1447825336000,
                  "mtime": 1447825336000,
                  "ctime": 1447825336000,
                  "birthtime": 1447823326000
                }
              }
            },
            {
              "data": {
                "name": "node_modules",
                "stat": {
                  "dev": 16777218,
                  "mode": 16877,
                  "nlink": 14,
                  "uid": 501,
                  "gid": 20,
                  "rdev": 0,
                  "blksize": 4096,
                  "ino": 164218765,
                  "size": 476,
                  "blocks": 0,
                  "atime": 1447825336000,
                  "mtime": 1447825336000,
                  "ctime": 1447825336000,
                  "birthtime": 1447823326000
                }
              },
              "children": [
                {
                  "data": {
                    "name": "underscore",
                    "stat": {
                      "dev": 16777218,
                      "mode": 16877,
                      "nlink": 14,
                      "uid": 501,
                      "gid": 20,
                      "rdev": 0,
                      "blksize": 4096,
                      "ino": 164218765,
                      "size": 476,
                      "blocks": 0,
                      "atime": 1447825336000,
                      "mtime": 1447825336000,
                      "ctime": 1447825336000,
                      "birthtime": 1447823326000
                    }
                  },
                  "children": [
                    {
                      "data": {
                        "name": "LICENSE",
                        "contents": __webpack_require__(5),
                        "stat": {
                          "dev": 16777218,
                          "mode": 16877,
                          "nlink": 14,
                          "uid": 501,
                          "gid": 20,
                          "rdev": 0,
                          "blksize": 4096,
                          "ino": 164218765,
                          "size": 476,
                          "blocks": 0,
                          "atime": 1447825336000,
                          "mtime": 1447825336000,
                          "ctime": 1447825336000,
                          "birthtime": 1447823326000
                        }
                      }
                    },
                    {
                      "data": {
                        "name": "README.md",
                        "contents": __webpack_require__(6),
                        "stat": {
                          "dev": 16777218,
                          "mode": 16877,
                          "nlink": 14,
                          "uid": 501,
                          "gid": 20,
                          "rdev": 0,
                          "blksize": 4096,
                          "ino": 164218765,
                          "size": 476,
                          "blocks": 0,
                          "atime": 1447825336000,
                          "mtime": 1447825336000,
                          "ctime": 1447825336000,
                          "birthtime": 1447823326000
                        }
                      }
                    },
                    {
                      "data": {
                        "name": "package.json",
                        "contents": __webpack_require__(7),
                        "stat": {
                          "dev": 16777218,
                          "mode": 16877,
                          "nlink": 14,
                          "uid": 501,
                          "gid": 20,
                          "rdev": 0,
                          "blksize": 4096,
                          "ino": 164218765,
                          "size": 476,
                          "blocks": 0,
                          "atime": 1447825336000,
                          "mtime": 1447825336000,
                          "ctime": 1447825336000,
                          "birthtime": 1447823326000
                        }
                      }
                    },
                    {
                      "data": {
                        "name": "underscore-min.js",
                        "contents": __webpack_require__(8),
                        "stat": {
                          "dev": 16777218,
                          "mode": 16877,
                          "nlink": 14,
                          "uid": 501,
                          "gid": 20,
                          "rdev": 0,
                          "blksize": 4096,
                          "ino": 164218765,
                          "size": 476,
                          "blocks": 0,
                          "atime": 1447825336000,
                          "mtime": 1447825336000,
                          "ctime": 1447825336000,
                          "birthtime": 1447823326000
                        }
                      }
                    },
                    {
                      "data": {
                        "name": "underscore.js",
                        "contents": __webpack_require__(9),
                        "stat": {
                          "dev": 16777218,
                          "mode": 16877,
                          "nlink": 14,
                          "uid": 501,
                          "gid": 20,
                          "rdev": 0,
                          "blksize": 4096,
                          "ino": 164218765,
                          "size": 476,
                          "blocks": 0,
                          "atime": 1447825336000,
                          "mtime": 1447825336000,
                          "ctime": 1447825336000,
                          "birthtime": 1447823326000
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "data": {
                "name": "package.json",
                "contents": __webpack_require__(10),
                "stat": {
                  "dev": 16777218,
                  "mode": 16877,
                  "nlink": 14,
                  "uid": 501,
                  "gid": 20,
                  "rdev": 0,
                  "blksize": 4096,
                  "ino": 164218765,
                  "size": 476,
                  "blocks": 0,
                  "atime": 1447825336000,
                  "mtime": 1447825336000,
                  "ctime": 1447825336000,
                  "birthtime": 1447823326000
                }
              }
            }
          ]
        }
      ]
    },
    {
      "data": {
        "name": "package.json",
        "contents": __webpack_require__(11),
        "stat": {
          "dev": 16777218,
          "mode": 16877,
          "nlink": 14,
          "uid": 501,
          "gid": 20,
          "rdev": 0,
          "blksize": 4096,
          "ino": 164218765,
          "size": 476,
          "blocks": 0,
          "atime": 1447825336000,
          "mtime": 1447825336000,
          "ctime": 1447825336000,
          "birthtime": 1447823326000
        }
      }
    }
  ]
};
```

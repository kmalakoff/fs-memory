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
    "pathParts": [
      "tinker-test-project"
    ],
    "isDirectory": true,
    "stat": {}
  },
  "children": [
    {
      "data": {
        "name": "node_modules",
        "pathParts": [
          "tinker-test-project",
          "node_modules"
        ],
        "isDirectory": true,
        "stat": {}
      },
      "children": [
        {
          "data": {
            "name": "backbone",
            "pathParts": [
              "tinker-test-project",
              "node_modules",
              "backbone"
            ],
            "isDirectory": true,
            "stat": {}
          },
          "children": [
            {
              "data": {
                "name": "README.md",
                "pathParts": [
                  "tinker-test-project",
                  "node_modules",
                  "backbone",
                  "README.md"
                ],
                "contents": __webpack_require__(2),
                "stat": {
                  "size": 1865,
                  "mtime": "2015-05-13T22:07:27.000Z"
                }
              }
            },
            {
              "data": {
                "name": "backbone-min.js",
                "pathParts": [
                  "tinker-test-project",
                  "node_modules",
                  "backbone",
                  "backbone-min.js"
                ],
                "contents": __webpack_require__(3),
                "stat": {
                  "size": 23097,
                  "mtime": "2015-09-03T15:56:21.000Z"
                }
              }
            },
            {
              "data": {
                "name": "backbone.js",
                "pathParts": [
                  "tinker-test-project",
                  "node_modules",
                  "backbone",
                  "backbone.js"
                ],
                "contents": __webpack_require__(4),
                "stat": {
                  "size": 71415,
                  "mtime": "2015-09-03T15:56:21.000Z"
                }
              }
            },
            {
              "data": {
                "name": "node_modules",
                "pathParts": [
                  "tinker-test-project",
                  "node_modules",
                  "backbone",
                  "node_modules"
                ],
                "isDirectory": true,
                "stat": {}
              },
              "children": [
                {
                  "data": {
                    "name": "underscore",
                    "pathParts": [
                      "tinker-test-project",
                      "node_modules",
                      "backbone",
                      "node_modules",
                      "underscore"
                    ],
                    "isDirectory": true,
                    "stat": {}
                  },
                  "children": [
                    {
                      "data": {
                        "name": "LICENSE",
                        "pathParts": [
                          "tinker-test-project",
                          "node_modules",
                          "backbone",
                          "node_modules",
                          "underscore",
                          "LICENSE"
                        ],
                        "contents": __webpack_require__(5),
                        "stat": {
                          "size": 1117,
                          "mtime": "2015-02-20T00:09:44.000Z"
                        }
                      }
                    },
                    {
                      "data": {
                        "name": "README.md",
                        "pathParts": [
                          "tinker-test-project",
                          "node_modules",
                          "backbone",
                          "node_modules",
                          "underscore",
                          "README.md"
                        ],
                        "contents": __webpack_require__(6),
                        "stat": {
                          "size": 1225,
                          "mtime": "2015-02-10T16:27:13.000Z"
                        }
                      }
                    },
                    {
                      "data": {
                        "name": "package.json",
                        "pathParts": [
                          "tinker-test-project",
                          "node_modules",
                          "backbone",
                          "node_modules",
                          "underscore",
                          "package.json"
                        ],
                        "contents": __webpack_require__(7),
                        "stat": {
                          "size": 1948,
                          "mtime": "2015-10-05T19:17:53.000Z"
                        }
                      }
                    },
                    {
                      "data": {
                        "name": "underscore-min.js",
                        "pathParts": [
                          "tinker-test-project",
                          "node_modules",
                          "backbone",
                          "node_modules",
                          "underscore",
                          "underscore-min.js"
                        ],
                        "contents": __webpack_require__(8),
                        "stat": {
                          "size": 16449,
                          "mtime": "2015-04-02T15:32:01.000Z"
                        }
                      }
                    },
                    {
                      "data": {
                        "name": "underscore.js",
                        "pathParts": [
                          "tinker-test-project",
                          "node_modules",
                          "backbone",
                          "node_modules",
                          "underscore",
                          "underscore.js"
                        ],
                        "contents": __webpack_require__(9),
                        "stat": {
                          "size": 52919,
                          "mtime": "2015-04-02T15:32:01.000Z"
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
                "pathParts": [
                  "tinker-test-project",
                  "node_modules",
                  "backbone",
                  "package.json"
                ],
                "contents": __webpack_require__(10),
                "stat": {
                  "size": 2054,
                  "mtime": "2015-10-05T19:17:53.000Z"
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
        "pathParts": [
          "tinker-test-project",
          "package.json"
        ],
        "contents": __webpack_require__(11),
        "stat": {
          "size": 227,
          "mtime": "2015-10-05T19:17:53.000Z"
        }
      }
    }
  ]
};
```

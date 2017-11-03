# Cairo

# A vector based graphics library utilizing the power of WebAssembly (.wasm)

# Demo & Starter Kit

# Installation

Make sure to clone the repo recursively, in order to get the Google Test framework.

```
git clone --recursive https://github.com/AWSM-WASM/webassembly-workflow.git
```

When finished, run ```npm run build```. This will build the project into a build folder, and it will also install all the npm dependencies.

**Make sure to run this through MinGW if using Windows**

# Developing

Run grunt in a separate terminal (can be cmd in Windows, doesn't matter). When you save a JavaScript dev file, all files will be merged and minified. When you save a C++ dev file, they will be compiled to WebAssembly using emscripten.

I've included some sample code as a tiny app that serves to show how it all gets built.

To get WebAssembly to run in the browser, you must serve it via a server. Just run ```node server``` to use the included one and go to localhost:1337 in the browser. I've also included a tiny node-demo.js file to show how WebAssembly might be loaded into a nodejs environment.

**Make sure to install emscripten first, at "C:/emsdk". If you've installed it elsewhere, or have installed it globally, just change the path in the gruntfile.**

# Read more
Credit to DanRuta for providing the layout and workflow. Please refer to the links below for more information 

https://medium.com/@DanRuta/setting-up-the-ultimate-webassembly-c-workflow-6484efa3e162
https://github.com/DanRuta/webassembly-workflow

### TODO:


# NetCoreTypeScript

This repo is the result of the completed TypeScript ASP.NET core tutorial: https://www.typescriptlang.org/docs/handbook/asp-net-core.html

It's a very basic ASP.NET core site with TypeScript (TS) support. Mainly there are 3 files to focus on: tsconfig.json, gulpfile.js, and scripts/app.ts.

The wwwwroot/index.html file references app.js to provide some interactivity to the page when a user keys into its inputs. The below points describe how app.js is created from the root project scripts/app.ts file.

* The app.ts file is transpiled to a regular JavaScript file and map file the browser can interpret per tsconfig.json's settings whenever the ts file is saved in development. 
  * Note: When a js, ts, and map file are all served to the browser, you can debug a js script in native ts via the browser's developer tools.
* When the VS solution is built, the gulpfile.js is executed by the VS task runner. 
* The gulpfile.js includes a task to delete the wwwroot/scripts directory and a task to find any js, ts, or map files in the root scripts folder and copy them to the wwwroot/scripts directory.

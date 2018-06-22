/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as app from "application";

import * as frescoModule from "nativescript-fresco";

if (app.android) {
    app.on("launch", () => {
        frescoModule.initialize({ isDownsampleEnabled: true });
    });
}

app.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/

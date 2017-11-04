"use strict"

class Main {

    constructor (module) {

        if (module==undefined) {
            throw new Error("No WASM module provided")
        }
        this.module = module
    }
}

typeof window=="undefined" && (exports.Main = Main)
"use strict"

class Util {

    static addTwo (a, b) {
        return a + b
    }
}

typeof window=="undefined" && (exports.Util = Util)
//# sourceMappingURL=app.concat.js.map
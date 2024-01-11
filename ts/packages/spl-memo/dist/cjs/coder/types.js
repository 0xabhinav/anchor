"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplMemoTypesCoder = void 0;
class SplMemoTypesCoder {
    constructor(_idl) { }
    encode(_name, _type) {
        throw new Error("SplMemo does not have user-defined types");
    }
    decode(_name, _typeData) {
        throw new Error("SplMemo does not have user-defined types");
    }
}
exports.SplMemoTypesCoder = SplMemoTypesCoder;
//# sourceMappingURL=types.js.map
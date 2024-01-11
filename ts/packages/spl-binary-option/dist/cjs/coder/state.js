"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplBinaryOptionStateCoder = void 0;
class SplBinaryOptionStateCoder {
    constructor(_idl) { }
    encode(_name, _account) {
        throw new Error("SplBinaryOption does not have state");
    }
    decode(_ix) {
        throw new Error("SplBinaryOption does not have state");
    }
}
exports.SplBinaryOptionStateCoder = SplBinaryOptionStateCoder;
//# sourceMappingURL=state.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplTokenSwapStateCoder = void 0;
class SplTokenSwapStateCoder {
    constructor(_idl) { }
    encode(_name, _account) {
        throw new Error("SplTokenSwap does not have state");
    }
    decode(_ix) {
        throw new Error("SplTokenSwap does not have state");
    }
}
exports.SplTokenSwapStateCoder = SplTokenSwapStateCoder;
//# sourceMappingURL=state.js.map
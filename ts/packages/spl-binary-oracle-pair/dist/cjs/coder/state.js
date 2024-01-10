"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplBinaryOraclePairStateCoder = void 0;
class SplBinaryOraclePairStateCoder {
    constructor(_idl) { }
    encode(_name, _account) {
        throw new Error("SplBinaryOraclePair does not have state");
    }
    decode(_ix) {
        throw new Error("SplBinaryOraclePair does not have state");
    }
}
exports.SplBinaryOraclePairStateCoder = SplBinaryOraclePairStateCoder;
//# sourceMappingURL=state.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplMemoStateCoder = void 0;
class SplMemoStateCoder {
    constructor(_idl) { }
    encode(_name, _account) {
        throw new Error("SplMemo does not have state");
    }
    decode(_ix) {
        throw new Error("SplMemo does not have state");
    }
}
exports.SplMemoStateCoder = SplMemoStateCoder;
//# sourceMappingURL=state.js.map
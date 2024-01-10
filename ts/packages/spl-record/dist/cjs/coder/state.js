"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplRecordStateCoder = void 0;
class SplRecordStateCoder {
    constructor(_idl) { }
    encode(_name, _account) {
        throw new Error("SplRecord does not have state");
    }
    decode(_ix) {
        throw new Error("SplRecord does not have state");
    }
}
exports.SplRecordStateCoder = SplRecordStateCoder;
//# sourceMappingURL=state.js.map
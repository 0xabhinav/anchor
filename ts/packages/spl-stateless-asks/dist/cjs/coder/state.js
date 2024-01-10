"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplStatelessAsksStateCoder = void 0;
class SplStatelessAsksStateCoder {
    constructor(_idl) { }
    encode(_name, _account) {
        throw new Error("SplStatelessAsks does not have state");
    }
    decode(_ix) {
        throw new Error("SplStatelessAsks does not have state");
    }
}
exports.SplStatelessAsksStateCoder = SplStatelessAsksStateCoder;
//# sourceMappingURL=state.js.map
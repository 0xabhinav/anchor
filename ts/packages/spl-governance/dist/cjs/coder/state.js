"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplGovernanceStateCoder = void 0;
class SplGovernanceStateCoder {
    constructor(_idl) { }
    encode(_name, _account) {
        throw new Error("SplGovernance does not have state");
    }
    decode(_ix) {
        throw new Error("SplGovernance does not have state");
    }
}
exports.SplGovernanceStateCoder = SplGovernanceStateCoder;
//# sourceMappingURL=state.js.map
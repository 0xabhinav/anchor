"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplFeatureProposalStateCoder = void 0;
class SplFeatureProposalStateCoder {
    constructor(_idl) { }
    encode(_name, _account) {
        throw new Error("SplFeatureProposal does not have state");
    }
    decode(_ix) {
        throw new Error("SplFeatureProposal does not have state");
    }
}
exports.SplFeatureProposalStateCoder = SplFeatureProposalStateCoder;
//# sourceMappingURL=state.js.map
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplFeatureProposalAccountsCoder = void 0;
// @ts-nocheck
const B = __importStar(require("@native-to-anchor/buffer-layout"));
class SplFeatureProposalAccountsCoder {
    constructor(_idl) { }
    async encode(accountName, account) {
        switch (accountName) {
            case "featureProposal": {
                const buffer = Buffer.alloc(17);
                const len = FEATURE_PROPOSAL_LAYOUT.encode(account, buffer);
                return buffer.slice(0, len);
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    decode(accountName, ix) {
        return this.decodeUnchecked(accountName, ix);
    }
    decodeUnchecked(accountName, ix) {
        switch (accountName) {
            case "featureProposal": {
                return decodeFeatureProposalAccount(ix);
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    memcmp(accountName, _appendData) {
        switch (accountName) {
            case "featureProposal": {
                return {
                    dataSize: 17,
                };
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    size(idlAccount) {
        switch (idlAccount.name) {
            case "featureProposal": {
                return 17;
            }
            default: {
                throw new Error(`Invalid account name: ${idlAccount.name}`);
            }
        }
    }
}
exports.SplFeatureProposalAccountsCoder = SplFeatureProposalAccountsCoder;
function decodeFeatureProposalAccount(ix) {
    return FEATURE_PROPOSAL_LAYOUT.decode(ix);
}
const FEATURE_PROPOSAL_LAYOUT = B.union(B.u8("discriminator"));
FEATURE_PROPOSAL_LAYOUT.addVariant(0, B.struct([B.u64("tokensRequired"), B.i64("deadline")]), "uninitialized");
FEATURE_PROPOSAL_LAYOUT.addVariant(1, B.struct([]), "pending");
FEATURE_PROPOSAL_LAYOUT.addVariant(2, B.struct([B.u64("tokensUponAcceptance")]), "accepted");
FEATURE_PROPOSAL_LAYOUT.addVariant(3, B.struct([]), "expired");
//# sourceMappingURL=accounts.js.map
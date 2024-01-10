// @ts-nocheck
import * as B from "@native-to-anchor/buffer-layout";
export class SplFeatureProposalAccountsCoder {
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
function decodeFeatureProposalAccount(ix) {
    return FEATURE_PROPOSAL_LAYOUT.decode(ix);
}
const FEATURE_PROPOSAL_LAYOUT = B.union(B.u8("discriminator"));
FEATURE_PROPOSAL_LAYOUT.addVariant(0, B.struct([B.u64("tokensRequired"), B.i64("deadline")]), "uninitialized");
FEATURE_PROPOSAL_LAYOUT.addVariant(1, B.struct([]), "pending");
FEATURE_PROPOSAL_LAYOUT.addVariant(2, B.struct([B.u64("tokensUponAcceptance")]), "accepted");
FEATURE_PROPOSAL_LAYOUT.addVariant(3, B.struct([]), "expired");
//# sourceMappingURL=accounts.js.map
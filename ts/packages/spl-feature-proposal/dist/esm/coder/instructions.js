// @ts-nocheck
import * as B from "@native-to-anchor/buffer-layout";
export class SplFeatureProposalInstructionCoder {
    constructor(_idl) { }
    encode(ixName, ix) {
        switch (ixName) {
            case "propose": {
                return encodePropose(ix);
            }
            case "tally": {
                return encodeTally(ix);
            }
            default: {
                throw new Error(`Invalid instruction: ${ixName}`);
            }
        }
    }
    encodeState(_ixName, _ix) {
        throw new Error("SplFeatureProposal does not have state");
    }
}
function encodePropose({ tokensToMint, acceptanceCriteria }) {
    return encodeData({ propose: { tokensToMint, acceptanceCriteria } }, 1 + 8 + 8 + 8);
}
function encodeTally({}) {
    return encodeData({ tally: {} }, 1);
}
const LAYOUT = B.union(B.u8("instruction"));
LAYOUT.addVariant(0, B.struct([
    B.u64("tokensToMint"),
    B.struct([B.u64("tokensRequired"), B.i64("deadline")], "acceptanceCriteria"),
]), "propose");
LAYOUT.addVariant(1, B.struct([]), "tally");
function encodeData(ix, span) {
    const b = Buffer.alloc(span);
    LAYOUT.encode(ix, b);
    return b;
}
//# sourceMappingURL=instructions.js.map
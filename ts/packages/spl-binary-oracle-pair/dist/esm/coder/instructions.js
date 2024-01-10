// @ts-nocheck
import * as B from "@native-to-anchor/buffer-layout";
export class SplBinaryOraclePairInstructionCoder {
    constructor(_idl) { }
    encode(ixName, ix) {
        switch (ixName) {
            case "initPool": {
                return encodeInitPool(ix);
            }
            case "deposit": {
                return encodeDeposit(ix);
            }
            case "withdraw": {
                return encodeWithdraw(ix);
            }
            case "decide": {
                return encodeDecide(ix);
            }
            default: {
                throw new Error(`Invalid instruction: ${ixName}`);
            }
        }
    }
    encodeState(_ixName, _ix) {
        throw new Error("SplBinaryOraclePair does not have state");
    }
}
function encodeInitPool({ mintEndSlot, decideEndSlot, bumpSeed }) {
    return encodeData({ initPool: { mintEndSlot, decideEndSlot, bumpSeed } }, 1 + 8 + 8 + 1);
}
function encodeDeposit({ arg }) {
    return encodeData({ deposit: { arg } }, 1 + 8);
}
function encodeWithdraw({ arg }) {
    return encodeData({ withdraw: { arg } }, 1 + 8);
}
function encodeDecide({ arg }) {
    return encodeData({ decide: { arg } }, 1 + 1);
}
const LAYOUT = B.union(B.u8("instruction"));
LAYOUT.addVariant(0, B.struct([B.u64("mintEndSlot"), B.u64("decideEndSlot"), B.u8("bumpSeed")]), "initPool");
LAYOUT.addVariant(1, B.struct([B.u64("arg")]), "deposit");
LAYOUT.addVariant(2, B.struct([B.u64("arg")]), "withdraw");
LAYOUT.addVariant(3, B.struct([B.bool("arg")]), "decide");
function encodeData(ix, span) {
    const b = Buffer.alloc(span);
    LAYOUT.encode(ix, b);
    return b;
}
//# sourceMappingURL=instructions.js.map
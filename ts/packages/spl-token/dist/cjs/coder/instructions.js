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
exports.SplTokenInstructionCoder = void 0;
// @ts-nocheck
const B = __importStar(require("@native-to-anchor/buffer-layout"));
class SplTokenInstructionCoder {
    constructor(_idl) { }
    encode(ixName, ix) {
        switch (ixName) {
            case "initializeMint": {
                return encodeInitializeMint(ix);
            }
            case "initializeAccount": {
                return encodeInitializeAccount(ix);
            }
            case "initializeMultisig": {
                return encodeInitializeMultisig(ix);
            }
            case "transfer": {
                return encodeTransfer(ix);
            }
            case "approve": {
                return encodeApprove(ix);
            }
            case "revoke": {
                return encodeRevoke(ix);
            }
            case "setAuthority": {
                return encodeSetAuthority(ix);
            }
            case "mintTo": {
                return encodeMintTo(ix);
            }
            case "burn": {
                return encodeBurn(ix);
            }
            case "closeAccount": {
                return encodeCloseAccount(ix);
            }
            case "freezeAccount": {
                return encodeFreezeAccount(ix);
            }
            case "thawAccount": {
                return encodeThawAccount(ix);
            }
            case "transferChecked": {
                return encodeTransferChecked(ix);
            }
            case "approveChecked": {
                return encodeApproveChecked(ix);
            }
            case "mintToChecked": {
                return encodeMintToChecked(ix);
            }
            case "burnChecked": {
                return encodeBurnChecked(ix);
            }
            case "initializeAccount2": {
                return encodeInitializeAccount2(ix);
            }
            case "syncNative": {
                return encodeSyncNative(ix);
            }
            case "initializeAccount3": {
                return encodeInitializeAccount3(ix);
            }
            case "initializeMultisig2": {
                return encodeInitializeMultisig2(ix);
            }
            case "initializeMint2": {
                return encodeInitializeMint2(ix);
            }
            case "getAccountDataSize": {
                return encodeGetAccountDataSize(ix);
            }
            case "initializeImmutableOwner": {
                return encodeInitializeImmutableOwner(ix);
            }
            case "amountToUiAmount": {
                return encodeAmountToUiAmount(ix);
            }
            case "uiAmountToAmount": {
                return encodeUiAmountToAmount(ix);
            }
            default: {
                throw new Error(`Invalid instruction: ${ixName}`);
            }
        }
    }
    encodeState(_ixName, _ix) {
        throw new Error("SplToken does not have state");
    }
}
exports.SplTokenInstructionCoder = SplTokenInstructionCoder;
function encodeInitializeMint({ decimals, mintAuthority, freezeAuthority, }) {
    return encodeData({ initializeMint: { decimals, mintAuthority, freezeAuthority } }, 1 + 1 + 32 + 4 + 32);
}
function encodeInitializeAccount({}) {
    return encodeData({ initializeAccount: {} }, 1);
}
function encodeInitializeMultisig({ m }) {
    return encodeData({ initializeMultisig: { m } }, 1 + 1);
}
function encodeTransfer({ amount }) {
    return encodeData({ transfer: { amount } }, 1 + 8);
}
function encodeApprove({ amount }) {
    return encodeData({ approve: { amount } }, 1 + 8);
}
function encodeRevoke({}) {
    return encodeData({ revoke: {} }, 1);
}
function encodeSetAuthority({ authorityType, newAuthority }) {
    return encodeData({ setAuthority: { authorityType, newAuthority } }, 1 +
        (() => {
            switch (Object.keys(authorityType)[0]) {
                case "mintTokens":
                    return 1;
                case "freezeAccount":
                    return 1;
                case "accountOwner":
                    return 1;
                case "closeAccount":
                    return 1;
            }
        })() +
        4 +
        32);
}
function encodeMintTo({ amount }) {
    return encodeData({ mintTo: { amount } }, 1 + 8);
}
function encodeBurn({ amount }) {
    return encodeData({ burn: { amount } }, 1 + 8);
}
function encodeCloseAccount({}) {
    return encodeData({ closeAccount: {} }, 1);
}
function encodeFreezeAccount({}) {
    return encodeData({ freezeAccount: {} }, 1);
}
function encodeThawAccount({}) {
    return encodeData({ thawAccount: {} }, 1);
}
function encodeTransferChecked({ amount, decimals }) {
    return encodeData({ transferChecked: { amount, decimals } }, 1 + 8 + 1);
}
function encodeApproveChecked({ amount, decimals }) {
    return encodeData({ approveChecked: { amount, decimals } }, 1 + 8 + 1);
}
function encodeMintToChecked({ amount, decimals }) {
    return encodeData({ mintToChecked: { amount, decimals } }, 1 + 8 + 1);
}
function encodeBurnChecked({ amount, decimals }) {
    return encodeData({ burnChecked: { amount, decimals } }, 1 + 8 + 1);
}
function encodeInitializeAccount2({ owner }) {
    return encodeData({ initializeAccount2: { owner } }, 1 + 32);
}
function encodeSyncNative({}) {
    return encodeData({ syncNative: {} }, 1);
}
function encodeInitializeAccount3({ owner }) {
    return encodeData({ initializeAccount3: { owner } }, 1 + 32);
}
function encodeInitializeMultisig2({ m }) {
    return encodeData({ initializeMultisig2: { m } }, 1 + 1);
}
function encodeInitializeMint2({ decimals, mintAuthority, freezeAuthority, }) {
    return encodeData({ initializeMint2: { decimals, mintAuthority, freezeAuthority } }, 1 + 1 + 32 + 4 + 32);
}
function encodeGetAccountDataSize({}) {
    return encodeData({ getAccountDataSize: {} }, 1);
}
function encodeInitializeImmutableOwner({}) {
    return encodeData({ initializeImmutableOwner: {} }, 1);
}
function encodeAmountToUiAmount({ amount }) {
    return encodeData({ amountToUiAmount: { amount } }, 1 + 8);
}
function encodeUiAmountToAmount({ uiAmount }) {
    return encodeData({ uiAmountToAmount: { uiAmount } }, 1);
}
const LAYOUT = B.union(B.u8("instruction"));
LAYOUT.addVariant(0, B.struct([
    B.u8("decimals"),
    B.publicKey("mintAuthority"),
    B.option(B.publicKey(), "freezeAuthority"),
]), "initializeMint");
LAYOUT.addVariant(1, B.struct([]), "initializeAccount");
LAYOUT.addVariant(2, B.struct([B.u8("m")]), "initializeMultisig");
LAYOUT.addVariant(3, B.struct([B.u64("amount")]), "transfer");
LAYOUT.addVariant(4, B.struct([B.u64("amount")]), "approve");
LAYOUT.addVariant(5, B.struct([]), "revoke");
LAYOUT.addVariant(6, B.struct([
    ((p) => {
        const U = B.union(B.u8("discriminator"), null, p);
        U.addVariant(0, B.struct([]), "mintTokens");
        U.addVariant(1, B.struct([]), "freezeAccount");
        U.addVariant(2, B.struct([]), "accountOwner");
        U.addVariant(3, B.struct([]), "closeAccount");
        return U;
    })("authorityType"),
    B.option(B.publicKey(), "newAuthority"),
]), "setAuthority");
LAYOUT.addVariant(7, B.struct([B.u64("amount")]), "mintTo");
LAYOUT.addVariant(8, B.struct([B.u64("amount")]), "burn");
LAYOUT.addVariant(9, B.struct([]), "closeAccount");
LAYOUT.addVariant(10, B.struct([]), "freezeAccount");
LAYOUT.addVariant(11, B.struct([]), "thawAccount");
LAYOUT.addVariant(12, B.struct([B.u64("amount"), B.u8("decimals")]), "transferChecked");
LAYOUT.addVariant(13, B.struct([B.u64("amount"), B.u8("decimals")]), "approveChecked");
LAYOUT.addVariant(14, B.struct([B.u64("amount"), B.u8("decimals")]), "mintToChecked");
LAYOUT.addVariant(15, B.struct([B.u64("amount"), B.u8("decimals")]), "burnChecked");
LAYOUT.addVariant(16, B.struct([B.publicKey("owner")]), "initializeAccount2");
LAYOUT.addVariant(17, B.struct([]), "syncNative");
LAYOUT.addVariant(18, B.struct([B.publicKey("owner")]), "initializeAccount3");
LAYOUT.addVariant(19, B.struct([B.u8("m")]), "initializeMultisig2");
LAYOUT.addVariant(20, B.struct([
    B.u8("decimals"),
    B.publicKey("mintAuthority"),
    B.option(B.publicKey(), "freezeAuthority"),
]), "initializeMint2");
LAYOUT.addVariant(21, B.struct([]), "getAccountDataSize");
LAYOUT.addVariant(22, B.struct([]), "initializeImmutableOwner");
LAYOUT.addVariant(23, B.struct([B.u64("amount")]), "amountToUiAmount");
LAYOUT.addVariant(24, B.struct([B.utf8Str("uiAmount")]), "uiAmountToAmount");
function encodeData(ix, span) {
    const b = Buffer.alloc(span);
    LAYOUT.encode(ix, b);
    return b;
}
//# sourceMappingURL=instructions.js.map
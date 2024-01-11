// @ts-nocheck
import * as B from "@native-to-anchor/buffer-layout";
export class SplBinaryOraclePairAccountsCoder {
    constructor(_idl) { }
    async encode(accountName, account) {
        switch (accountName) {
            case "pool": {
                const buffer = Buffer.alloc(179);
                const len = POOL_LAYOUT.encode(account, buffer);
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
            case "pool": {
                return decodePoolAccount(ix);
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    memcmp(accountName, _appendData) {
        switch (accountName) {
            case "pool": {
                return {
                    dataSize: 179,
                };
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    size(idlAccount) {
        switch (idlAccount.name) {
            case "pool": {
                return 179;
            }
            default: {
                throw new Error(`Invalid account name: ${idlAccount.name}`);
            }
        }
    }
}
function decodePoolAccount(ix) {
    return POOL_LAYOUT.decode(ix);
}
const POOL_LAYOUT = B.struct([
    B.u8("version"),
    B.u8("bumpSeed"),
    B.publicKey("tokenProgramId"),
    B.publicKey("depositAccount"),
    B.publicKey("tokenPassMint"),
    B.publicKey("tokenFailMint"),
    B.publicKey("decider"),
    B.u64("mintEndSlot"),
    B.u64("decideEndSlot"),
    ((p) => {
        const U = B.union(B.u8("discriminator"), null, p);
        U.addVariant(0, B.struct([]), "undecided");
        U.addVariant(1, B.struct([]), "pass");
        U.addVariant(2, B.struct([]), "fail");
        return U;
    })("decision"),
]);
//# sourceMappingURL=accounts.js.map
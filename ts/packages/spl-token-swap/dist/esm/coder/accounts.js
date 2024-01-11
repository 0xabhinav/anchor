// @ts-nocheck
import * as B from "@native-to-anchor/buffer-layout";
export class SplTokenSwapAccountsCoder {
    constructor(_idl) { }
    async encode(accountName, account) {
        switch (accountName) {
            case "swap": {
                const buffer = Buffer.alloc(324);
                const len = SWAP_LAYOUT.encode(account, buffer);
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
            case "swap": {
                return decodeSwapAccount(ix);
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    memcmp(accountName, _appendData) {
        switch (accountName) {
            case "swap": {
                return {
                    dataSize: 324,
                };
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    size(idlAccount) {
        switch (idlAccount.name) {
            case "swap": {
                return 324;
            }
            default: {
                throw new Error(`Invalid account name: ${idlAccount.name}`);
            }
        }
    }
}
function decodeSwapAccount(ix) {
    return SWAP_LAYOUT.decode(ix);
}
const SWAP_LAYOUT = B.struct([
    B.u8("version"),
    B.bool("isInitialized"),
    B.u8("bumpSeed"),
    B.publicKey("tokenProgramId"),
    B.publicKey("tokenA"),
    B.publicKey("tokenB"),
    B.publicKey("poolMint"),
    B.publicKey("tokenAMint"),
    B.publicKey("tokenBMint"),
    B.publicKey("poolFeeAccount"),
    B.struct([
        B.u64("tradeFeeNumerator"),
        B.u64("tradeFeeDenominator"),
        B.u64("ownerTradeFeeNumerator"),
        B.u64("ownerTradeFeeDenominator"),
        B.u64("ownerWithdrawFeeNumerator"),
        B.u64("ownerWithdrawFeeDenominator"),
        B.u64("hostFeeNumerator"),
        B.u64("hostFeeDenominator"),
    ], "fees"),
    B.struct([
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.struct([]), "constantProduct");
            U.addVariant(1, B.struct([]), "constantPrice");
            U.addVariant(2, B.struct([]), "stable");
            U.addVariant(3, B.struct([]), "offset");
            return U;
        })("curveType"),
        B.seq(B.u8(), 32, "calculator"),
    ], "swapCurve"),
]);
//# sourceMappingURL=accounts.js.map
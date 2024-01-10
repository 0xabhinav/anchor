// @ts-nocheck
import * as B from "@native-to-anchor/buffer-layout";
export class SplBinaryOptionAccountsCoder {
    constructor(_idl) { }
    async encode(accountName, account) {
        switch (accountName) {
            case "binaryOption": {
                const buffer = Buffer.alloc(202);
                const len = BINARY_OPTION_LAYOUT.encode(account, buffer);
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
            case "binaryOption": {
                return decodeBinaryOptionAccount(ix);
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    memcmp(accountName, _appendData) {
        switch (accountName) {
            case "binaryOption": {
                return {
                    dataSize: 202,
                };
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    size(idlAccount) {
        switch (idlAccount.name) {
            case "binaryOption": {
                return 202;
            }
            default: {
                throw new Error(`Invalid account name: ${idlAccount.name}`);
            }
        }
    }
}
function decodeBinaryOptionAccount(ix) {
    return BINARY_OPTION_LAYOUT.decode(ix);
}
const BINARY_OPTION_LAYOUT = B.struct([
    B.u8("decimals"),
    B.u64("circulation"),
    B.bool("settled"),
    B.publicKey("escrowMintAccountPubkey"),
    B.publicKey("escrowAccountPubkey"),
    B.publicKey("longMintAccountPubkey"),
    B.publicKey("shortMintAccountPubkey"),
    B.publicKey("owner"),
    B.publicKey("winningSidePubkey"),
]);
//# sourceMappingURL=accounts.js.map
// @ts-nocheck
import * as B from "@native-to-anchor/buffer-layout";
export class SplRecordAccountsCoder {
    constructor(_idl) { }
    async encode(accountName, account) {
        switch (accountName) {
            case "recordData": {
                const buffer = Buffer.alloc(41);
                const len = RECORD_DATA_LAYOUT.encode(account, buffer);
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
            case "recordData": {
                return decodeRecordDataAccount(ix);
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    memcmp(accountName, _appendData) {
        switch (accountName) {
            case "recordData": {
                return {
                    dataSize: 41,
                };
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    size(idlAccount) {
        switch (idlAccount.name) {
            case "recordData": {
                return 41;
            }
            default: {
                throw new Error(`Invalid account name: ${idlAccount.name}`);
            }
        }
    }
}
function decodeRecordDataAccount(ix) {
    return RECORD_DATA_LAYOUT.decode(ix);
}
const RECORD_DATA_LAYOUT = B.struct([
    B.u8("version"),
    B.publicKey("authority"),
    B.struct([B.seq(B.u8(), 8, "bytes")], "data"),
]);
//# sourceMappingURL=accounts.js.map
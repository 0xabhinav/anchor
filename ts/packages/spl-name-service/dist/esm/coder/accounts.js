// @ts-nocheck
import * as B from "@native-to-anchor/buffer-layout";
export class SplNameServiceAccountsCoder {
    constructor(_idl) { }
    async encode(accountName, account) {
        switch (accountName) {
            case "nameRecordHeader": {
                const buffer = Buffer.alloc(96);
                const len = NAME_RECORD_HEADER_LAYOUT.encode(account, buffer);
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
            case "nameRecordHeader": {
                return decodeNameRecordHeaderAccount(ix);
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    memcmp(accountName, _appendData) {
        switch (accountName) {
            case "nameRecordHeader": {
                return {
                    dataSize: 96,
                };
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    size(idlAccount) {
        switch (idlAccount.name) {
            case "nameRecordHeader": {
                return 96;
            }
            default: {
                throw new Error(`Invalid account name: ${idlAccount.name}`);
            }
        }
    }
}
function decodeNameRecordHeaderAccount(ix) {
    return NAME_RECORD_HEADER_LAYOUT.decode(ix);
}
const NAME_RECORD_HEADER_LAYOUT = B.struct([
    B.publicKey("parentName"),
    B.publicKey("owner"),
    B.publicKey("class"),
]);
//# sourceMappingURL=accounts.js.map
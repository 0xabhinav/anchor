export class SplMemoInstructionCoder {
    constructor(_idl) { }
    encode(ixName, ix) {
        switch (ixName) {
            case "addMemo": {
                return encodeAddMemo(ix);
            }
            default: {
                throw new Error(`Invalid instruction: ${ixName}`);
            }
        }
    }
    encodeState(_ixName, _ix) {
        throw new Error("SplMemo does not have state");
    }
}
function encodeAddMemo({ memo }) {
    return Buffer.from(memo);
}
//# sourceMappingURL=instructions.js.map
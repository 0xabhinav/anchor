export class SplMemoStateCoder {
    constructor(_idl) { }
    encode(_name, _account) {
        throw new Error("SplMemo does not have state");
    }
    decode(_ix) {
        throw new Error("SplMemo does not have state");
    }
}
//# sourceMappingURL=state.js.map
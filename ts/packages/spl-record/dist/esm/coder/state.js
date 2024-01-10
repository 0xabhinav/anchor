export class SplRecordStateCoder {
    constructor(_idl) { }
    encode(_name, _account) {
        throw new Error("SplRecord does not have state");
    }
    decode(_ix) {
        throw new Error("SplRecord does not have state");
    }
}
//# sourceMappingURL=state.js.map
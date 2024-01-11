export class SplStatelessAsksStateCoder {
    constructor(_idl) { }
    encode(_name, _account) {
        throw new Error("SplStatelessAsks does not have state");
    }
    decode(_ix) {
        throw new Error("SplStatelessAsks does not have state");
    }
}
//# sourceMappingURL=state.js.map
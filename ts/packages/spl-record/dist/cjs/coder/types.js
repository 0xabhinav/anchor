"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplRecordTypesCoder = void 0;
class SplRecordTypesCoder {
    constructor(_idl) { }
    encode(_name, _type) {
        throw new Error("SplRecord does not have user-defined types");
    }
    decode(_name, _typeData) {
        throw new Error("SplRecord does not have user-defined types");
    }
}
exports.SplRecordTypesCoder = SplRecordTypesCoder;
//# sourceMappingURL=types.js.map
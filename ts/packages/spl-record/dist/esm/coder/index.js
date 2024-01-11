import { SplRecordAccountsCoder } from "./accounts";
import { SplRecordEventsCoder } from "./events";
import { SplRecordInstructionCoder } from "./instructions";
import { SplRecordStateCoder } from "./state";
import { SplRecordTypesCoder } from "./types";
/**
 * Coder for SplRecord
 */
export class SplRecordCoder {
    constructor(idl) {
        this.accounts = new SplRecordAccountsCoder(idl);
        this.events = new SplRecordEventsCoder(idl);
        this.instruction = new SplRecordInstructionCoder(idl);
        this.state = new SplRecordStateCoder(idl);
        this.types = new SplRecordTypesCoder(idl);
    }
}
//# sourceMappingURL=index.js.map
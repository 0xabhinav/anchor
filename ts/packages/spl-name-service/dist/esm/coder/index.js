import { SplNameServiceAccountsCoder } from "./accounts";
import { SplNameServiceEventsCoder } from "./events";
import { SplNameServiceInstructionCoder } from "./instructions";
import { SplNameServiceStateCoder } from "./state";
import { SplNameServiceTypesCoder } from "./types";
/**
 * Coder for SplNameService
 */
export class SplNameServiceCoder {
    constructor(idl) {
        this.accounts = new SplNameServiceAccountsCoder(idl);
        this.events = new SplNameServiceEventsCoder(idl);
        this.instruction = new SplNameServiceInstructionCoder(idl);
        this.state = new SplNameServiceStateCoder(idl);
        this.types = new SplNameServiceTypesCoder(idl);
    }
}
//# sourceMappingURL=index.js.map
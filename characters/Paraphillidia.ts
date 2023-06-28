export class Paraphillidia {
    /**
     * Paraphillidia can be present or absent.
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false | null;

    /**
     * Paraphillidia length.
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null;

    /**
     * Creates an instance of Paraphillidia.
     */
    constructor() {
        this.present = null;
        this.length = null;
    }

    /**
     * Sets the length value, considering the value of `present`.
     *
     * @param value - The length value.
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    setLength(value: number | null): void {
        if (this.present === false && value !== null) {
            throw new Error("Cannot set length when present is false");
        }
        this.length = value;
    }
}

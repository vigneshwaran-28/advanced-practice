export class GapCasinoException extends Error {
     balance;
     status;

    constructor(params) {
        super(params.status);
        this.status = params.status;
        this.balance = params.balance;
    }
}

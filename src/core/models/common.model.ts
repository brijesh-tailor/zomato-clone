/** Notifications  model */
export class Countries {
    constructor(
        public countryId: string,
        public name: string,
        public isdCode: string,
        public alpha2Code: string,
        public alpha3Code: string,
        public isoCurrencyCode: string,
        public flagImgUrl: string
    ) { }
}

export class SignupForm {
    constructor(
        public username: string,
        public email: string,
    ) { }
}
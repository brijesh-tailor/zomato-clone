import axios from "axios";

const url: string = 'https://accounts.zomato.com/';

export const getCountryList = (): any => {
    // return axios.get(`${url}login/config`);
    let qwe;
    return qwe = {
        "status": "true",
        "message": "success",
        "allCountryCodes": [
            {
                "countryId": 1,
                "name": "India",
                "isdCode": "91",
                "alpha2Code": "IN",
                "alpha3Code": "IND",
                "isoCurrencyCode": "INR",
                "flagImgUrl": "https://b.zmtcdn.com/images/flags_z10/in.png"
            }
        ]
    }
};
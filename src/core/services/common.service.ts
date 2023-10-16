import axios from "axios";
import { getAuthData } from "./auth.service";

const url: string = 'https://accounts.zomato.com/';

export const getCountryList = (): any => {
    const authData = getAuthData();
    const config = {
        headers: {
            "Authorization": `Bearer ${authData}`,
            "Accept": "application/json"
        }
    };
    const url = "https://www.universal-tutorial.com/api/countries/";
    return axios.get(`${url}`, config);

    // let countries = [
    //     {
    //         "countryId": 1,
    //         "name": "India",
    //         "isdCode": "91",
    //         "alpha2Code": "IN",
    //         "alpha3Code": "IND",
    //         "isoCurrencyCode": "INR",
    //         "flagImgUrl": "https://b.zmtcdn.com/images/flags_z10/in.png"
    //     }, {
    //         "countryId": 14,
    //         "name": "Australia",
    //         "isdCode": "61",
    //         "alpha2Code": "AU",
    //         "alpha3Code": "AUS",
    //         "isoCurrencyCode": "AUD",
    //         "flagImgUrl": "https://b.zmtcdn.com/images/flags_z10/au.png"
    //     }, {
    //         "countryId": 190,
    //         "name": "Spain",
    //         "isdCode": "34",
    //         "alpha2Code": "ES",
    //         "alpha3Code": "ESP",
    //         "isoCurrencyCode": "EUR",
    //         "flagImgUrl": "https://b.zmtcdn.com/images/flags_z10/es.png"
    //     }
    // ]
    // return countries;
}
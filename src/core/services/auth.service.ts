import axios from "axios";

export const getAccessToken = (): any => {
    const config = {
        headers: {
            "Accept": "application/json",
            "api-token": "NgzU3qWNVZ64Mxupoo2XxyD_zz1CE0f9T-JLz731RrUXBl7hjiFThfo89_iKbys68rE",
            "user-email": "brijeshtfed@gmail.com"
        }
    };
    const url1 = "https://www.universal-tutorial.com/api/getaccesstoken";
    return axios.get(`${url1}`, config);
}

/** To set Access Token data */
export const setAuthData = (value: any): void => {
    if (value) {
        localStorage.setItem('auth_data', value.data.auth_token);
    }
};

/** To get Access Token data */
export const getAuthData = (): any | null => {
    const authData = localStorage.getItem('auth_data');
    if (!!authData) {
        return authData;
    }
    return null;
};
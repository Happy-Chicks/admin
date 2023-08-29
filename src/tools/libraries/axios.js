import axios from "axios";

const baseURL = process.env.BASE_URL;
// import { BASE_URL } from "@env";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// function to get the access token from

// export const getData = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem("userData");
//     // console.log(`This is the json data from async storage ${jsonValue}`);

//     const userData = jsonValue != null ? JSON.parse(jsonValue) : null;

//     const token = userData.token;
//     // console.log(`this is the token from async storage: ${token}`);

//     return token;
//   } catch (e) {
//     // error reading value
//   }
// };

// create axios object here
export const authAxios = axios.create({
  baseURL: `${baseURL}/api/v1/authenticate/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const salesAxios = axios.create({
  baseURL: `${baseURL}/api/v1/sales/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const priceListAxios = axios.create({
  baseURL: `${baseURL}/api/v1/crate-price/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const shedAxios = axios.create({
  baseURL: `${baseURL}/api/v1/sheds/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const shedRecordAxios = axios.create({
  baseURL: `${baseURL}/api/v1/shed-records/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const userAxios = axios.create({
  baseURL: `${baseURL}/api/v1/users/`,
  timeout: 1000,
  headers: {},
});

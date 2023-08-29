export const ENDPOINTS = {
  // Authentication
  LOGIN: "login",
  CREATE_USER: "create-user",
  CREATE_FARM_MANAGER: "create-farm-manager",
  UPDATE_PASSWORD: "update-password",

  // Sales
  UPDATE_SALE: "update-sale",
  RECORD_SALE: "record-sale",
  GET_ALL_SALES: "get-sales",
  GET_SALE: "get-sale",
  DELETE_SALE: "delete-sale",

  //Price List
  UPDATE_PRICE_BY_ID: "update-price",
  CREATE_PRICE: "create-price",
  GET_PRICE: "get-prices",
  GET_PRICE_BY_ID: "get-price",
  DELETE_PRICE: "delete-price",

  // sheds

  UPDATE_SHED: "update-shed",
  CREATE_SHED: "save-shed",
  GET_ALL_SHEDS: "get-sheds",
  GET_SHED: "get-shed",
  DELETE_SHED: "delete-shed",
  GET_SHED_BY_FARMER_ID: "get-shed/farmer-id",
  // orders

  // daily shed records
  SAVE_SHED_RECORD: "save-shed-record",
  GET_ALL_RECORDS: "get-shed-records",
  GET_RECORD: "get-shed-record",
  DELETE_RECORD: "delete-shed-record",
  GET_RECORDS_BY_SHED_ID: "get-records/shed-id",

  // farmers

  GET_FARMER: "farmers/get-farmer",
  GET_ALL_FARMERS: "farmers",
  GET_FARMER_BY_EMAIL: "farmers/get-farmer-by-email",

  // farm managers
  GET_FARM_MANAGER: "farm-managers/get-farm-manager",
  GET_ALL_FARM_MANAGERS: "farm-managers",
  GET_FARM_MANAGER_BY_EMAIL: "farm-managers/get-farm-manager-by-email",
};

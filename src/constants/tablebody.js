export const tableBody = {
  request: [
    "shedID",
    "farmerID",
    "collectionPeriod",
    "feedQuantity",
    "numberOfCrates",
    "numberOfEggPieces",
    "numberOfBrokenEggs ",
    "deadBirds",
  ],
  managerBody: [
    "id",
    "lastName",
    "otherNames",
    "email",
    "phoneNumber",
    "address",
    "role",
  ],
  farmerBody: [
    "id",
    "lastName",
    "otherNames",
    "email",
    "phoneNumber",
    "address",
    "role",
  ],
  shedBody: ["farmerID", "numberOfBirds", "dailyFeedQuantity"],
  orderBody: [
    "farmerID",
    "customerName",
    "numberOfCrates",
    "orderDate",
    "customerPhoneNumber",
  ],
  salesBody: [
    "farmerId",
    "customerName",
    "numberOfSmallCrates",
    "numberOfMediumCrates",
    "numberOfLargeCrates",
    "numberOfExtraLargeCrates",
    "numberOfJumboCrates",
    "salesDate",
    "customerPhoneNumber",
    "totalPrice",
  ],

  recordBody: [
    "shedID",
    "farmerID",
    "collectionPeriod",
    "feedQuantity",
    "numberOfCrates",
    "numberOfEggPieces",
    "numberOfBrokenEggs",
    "deadBirds",
  ],
};

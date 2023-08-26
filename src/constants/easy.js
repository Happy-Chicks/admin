export function getFirstKeyValuePair(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return { key, value: obj[key] };
    }
  }
  return null; // Return null if the object is empty
}

export function getKeyByValue(obj, targetValue) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === targetValue) {
      return key;
    }
  }
  return null; // Return null if the value is not found
}

// tenary className
export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const statusColor = (status) => {
  return status?.toLowerCase() === "completed"
    ? "text-green-600"
    : status?.toLowerCase() === "pending"
    ? "text-yellow-600"
    : "text-red-600";
};

export function objectsToArrayOfArrays(objects) {
  const result = objects?.map((obj) => Object.values(obj));
  return result;
}

export const filterRequests = (requests, status, all = "total") => {
  if (status === all.toLowerCase()) return requests;
  const result = requests?.filter(
    (req) => req?.status.toLowerCase() === status?.toLowerCase()
  );

  return result;
};

export const requestCount = (requests, status, all = "total") => {
  if (status === all.toLowerCase()) return requests.length + 1;
  const result = requests?.filter(
    (req) => req?.status.toLowerCase() === status?.toLowerCase()
  );
  return result.length + 1;
};

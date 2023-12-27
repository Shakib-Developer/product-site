import axios from "axios";
import { ErrorToast } from "./FormHelper";

//! ================== Create New Blog ===================
export const create_product__Request__API = async (reqBody) => {
  let URL = "/api/dashboard/product/create";

  try {
    const result = await axios.post(URL, reqBody);

    if (result.data.status === "Success") {
      return true;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Read All Blog ===================
export const read_all_product__Request__API = async () => {
  let URL = "/api/dashboard/product/read";

  try {
    const result = await axios.get(URL);

    if (result.data.status === "Success") {
      return result.data;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Read single Blog ===================
export const read_single_product__Request__API = async (id) => {
  let URL = `/api/dashboard/product/read-single?id=${id}`;

  try {
    const result = await axios.get(URL);

    if (result.data.status === "Success") {
      return result.data;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Update Blog ===================
export const update_product__Request__API = async ({
  title,
  imgCDN,
  des,
  id,
}) => {
  let reqBody = { title, imgCDN, des };

  let URL = `/api/dashboard/product/update?id=${id}`;
  console.log(URL);
  try {
    const result = await axios.post(URL, reqBody);

    console.log(result);
    if (result.data.status === "Success") {
      return true;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Delete Single Blog ===================
export const delete_product__Request__API = async (id) => {
  let URL = `/api/dashboard/product/delete?id=${id}`;
  try {
    const result = await axios.delete(URL);

    if (result.data.status === "Success") {
      return true;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

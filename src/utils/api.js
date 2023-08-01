import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyCrMFZfP3D6uQhFIWAxw9zyIzMcEKEVMx0",
    cx: "c40a54f6d4e1e41e0",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};

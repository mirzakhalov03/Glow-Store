import axios from "axios";

const instanceApi = axios.create({
    baseURL: "https://tpyympcmxdrijvtkobst.supabase.co",
    headers: {
        "Content-Type": "application/json",

    },
    timeout: 10000,
    withCredentials: true,
})
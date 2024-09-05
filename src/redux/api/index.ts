import { fetchBaseQuery, createApi, retry } from "@reduxjs/toolkit/query/react";


const baseQuery = async (args: any, api: any, extraOptions: any) => {
    const rawBaseQuery = fetchBaseQuery({
      baseUrl: 'https://makeup-api.herokuapp.com/api/v1',
      prepareHeaders: (headers) => {
        return headers;
      },
    });

    const response = await rawBaseQuery(args, api, extraOptions);
  
    if (response.error) {
      const { status } = response.error;
      if (status === 401 || status === 403) {

      }
    }
  
    return response;


}

const fetchBaseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });
  
  export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQueryWithRetry,
    tagTypes: ["PRODUCT", "CART"],
    endpoints: () => ({}),
});
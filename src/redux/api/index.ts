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


import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eetqcfpyziptmrzwftem.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVldHFjZnB5emlwdG1yendmdGVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4ODc4NTMsImV4cCI6MjA0MzQ2Mzg1M30.yL4A8waZ1JIXmBohwn17Uy7jH24UwVQKjOsAkvXmPag'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
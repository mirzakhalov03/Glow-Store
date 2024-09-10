import {api} from "./index";

const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<any, any>({
            query: () => ({
                url: "/products.json",
                method: "GET",
            }),
        }),
        getProductsByType: build.query<any, any>({
            query: (type) => ({
                url: `/products.json?product_type=${type}`,
                method: "GET",
            }),
        }),
        getSingleProduct: build.query<any, any>({
            query: (id) => ({
                url: `/products/${id}.json`,
                method: "GET",
            }),
        }),
        getProductsByBrand: build.query<any, any>({
            query: (brand) => ({
                url: `/products.json?brand=${brand}`,
                method: "GET",
            }),
        })
    }),
});

export const {useGetProductsQuery, useGetProductsByTypeQuery, useGetSingleProductQuery, useGetProductsByBrandQuery} = productApi






// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoNewsHeaders = {
//   'x-bingapis-sdk': 'true',
//   'x-rapidapi-key': 'b4c2144d6amshe265535bce1ec6ep1c0587jsn3e783c0d0671',
//   'x-rapidapi-host': 'newsnow.p.rapidapi.com',
// };

// const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// export const cryptoNewsApi = createApi({
//   reducerPath: 'cryptoNewsApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://newsnow.p.rapidapi.com/newsv2_top_news_cat' }),
//   endpoints: (builder) => ({
//     getCryptoNews: builder.query({
//       query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
//     }),
//   }),
// });

// export const { useGetCryptoNewsQuery } = cryptoNewsApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const cryptoNewsHeaders = {
  'content-type': 'application/json',
  'X-RapidAPI-Key': 'b4c2144d6amshe265535bce1ec6ep1c0587jsn3e783c0d0671',
  'X-RapidAPI-Host': 'newsnow.p.rapidapi.com',
};

const createRequest = (data) => ({
  url: 'https://newsnow.p.rapidapi.com/newsv2_top_news_cat',
  method: 'POST',
  headers: cryptoNewsHeaders,
  data,
});

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsnow.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => {
        const requestData = {
          category: newsCategory,
          location: '',
          language: 'en',
          page: 1,
        };
        return createRequest(requestData);
      },
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

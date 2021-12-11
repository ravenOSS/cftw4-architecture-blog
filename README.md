[![Netlify Status](https://api.netlify.com/api/v1/badges/9ee3292c-250f-4f88-9b75-6303a3a9d261/deploy-status)](https://app.netlify.com/sites/boring-boyd-96019d/deploys)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3060](http://localhost:3060) with your browser to see the result.

## JSON Parsing (Date Serialization Object Error)

Error: Error serializing `.allPostsData[0].date` returned from `getStaticProps` in "/".
Reason: `object` ("[object Date]") cannot be serialized as JSON.

This is an obscure error. When date comes back from blog post, Next.js attempts to turn it into a string (serializing) and complains.

What can be done here is manually stringify the allPostsData we get back from getStaticProps and then parse them back into json.

In Netlify-CMS, dates are stored as date objects and not date strings. This could be due to the improper use of Moment.js tokens.
Special method added to parse the data returned from GetStaticProps. Uses JSON.parse and JSON.stringify,
Solution from:
https://dev.to/dijonmusters/hosting-on-vercel-automatic-deploys-with-github-and-configuring-custom-domains-51ok
Thanks!

## Experimental: Develop CMS locally

Add this to config.yml:

# when using the default proxy server port

local_backend: true

Run:
npx netlify-cms-proxy-server

Check:
Can /admin be accessed on localhost

Test for version control

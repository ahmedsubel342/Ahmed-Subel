# ElitezMart — B2C FlatPromo (Demo)

This repository is a demo, GitHub-ready static site for a dropshipping / B2C storefront called **ElitezMart**.

## What's included
- `index.html` — main homepage (hero, features, products, deals, newsletter, cart demo)
- `elitezmart-style.css` — full responsive CSS
- `script.js` — slider, product rendering, cart (localStorage), demo checkout, PayPal init
- `assets/` — placeholder images (you should replace with real images)
- `README.md` — this file

## Payment notes
- This project includes **client-side demo hooks** for Stripe Checkout and PayPal Buttons.
- **You MUST** implement server endpoints for real Stripe/PayPal usage:
  - Stripe: `/create-checkout-session` -> create Checkout Session with secret key.
  - PayPal: server endpoints to create and capture orders using REST APIs.
- Replace `YOUR_PAYPAL_CLIENT_ID` in `index.html` with your PayPal sandbox client ID.
- Replace `pk_test_...` in `script.js` with your Stripe publishable key.

## How to use
1. Unzip and open `index.html` in a browser to preview the static frontend.
2. To test PayPal buttons, add your sandbox client id in the script tag in `index.html`.
3. To test Stripe Checkout, create a simple server (Node/Express) with `/create-checkout-session` as described in comments inside `script.js`.

## Deploy
- You can host this static site on GitHub Pages: create a repo and push these files, then enable Pages from the `main` branch.
- For Stripe/PayPal integration, deploy the server to a secure environment (Heroku, Render, Vercel functions, etc.) and update the fetch endpoint URLs.

## License
Use & modify freely for prototyping. Not production-ready — ensure server-side security before taking payments.

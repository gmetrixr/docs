---
id : ecom
title: Build XR Experiences on GMetri Platform
description: Link GMetri XR experiences to an e-commerce platform
hide_title: true
sidebar_label: E-Commerce Plugin
---

## GMetri E-Commerce Plugin

GMetri allows creation of 360° shopping environments that can be linked with any e-commerce platform. This is done by creating plugins that bridge the communication between the e-commerce platform and GMetri.

![Ecommerce Product](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/screenshots/z5/ecom_product.png#boxShadow)

GMetri has an e-commerce plugin that allows linking elements in any 360° scene to your SKUs. When the user then clicks on these elements, he is present with a Product Card like the above.

The values in this product card (like product description, photos) can be populated using the e-commerce plugin that would query your APIs to get all details and manage the user’s session.

![Ecommerce Cart Notification](https://s.vrgmetri.com/gb-web/portal-docs/assets/img/screenshots/z5/ecom_cart_notification.png#boxShadow)

We also show a cart on the top left corner that can start a checkout session on your e-commerce platform.

### Requirements

To create an ecommerce plugin, we need 3 things

#### User Identification Mechanism

When the user first visits the 360° store, how should we identify the user? 
This could be done via a query parameter, but needs to be pre decided and fixed before the plugin is created. Any additional parameters that are needed for any further API calls can also be forwarded using this method. 

Eg: `https://view.gmetri.com/v5/org-name/store?uid=<<user_identifier>>`

#### API Details

a. **Listing all products:** This is needed when we link elements on the scene with the SKU and variants on the e-commerce platform. There may be additional qualifiers like “category” or “region” that can be used as an input to this API, to filter the products that get sent.

b. **Getting details of one product:** This would be an API (or multiple APIs) that take the SKU id of the product as input and give all details of the product (including price) as the output. This is used to populate the product card. This would also include any APIs that are needed to get the stock/availability of products.

c. **Starting Cart Session and Cart APIs:** GMetri has the ability to maintain the cart session on its end in the UI itself. This can be communicated to the e-commerce platform when the actual checkout is started. However, if we need to sync cart items at realtime, we can do that using cart APIs that allow GMetri to:
  1. Add items to cart
  2. Remove items/change quantity from cart
  3. List cart/get Cart Length - this is used to specify the number label on the cart icon

d. **APIs to be called before redireciton to checkout:** In case there are APIs that can be called to pass the user’s cart’s state to the e-commerce platform, please let us know those too.

e. **Staging environment details if present:** Also the differences between staging and production environment.

#### Checkout Redirection Mechanism

For the actual checkout, GMetri will redirect the user to the usual checkout journey of the e-commerce platform. Details of this handoff need to be communicated here.
For websites, this would usually be the checkout or cart URL.
For Apps (both Android / iOS) this would be a deep-link, which takes you to the cart page of the  app.
The experience link should append the following optional params:
- `?platform=web` for website
- `?platform=msite` for mobile website (if needed)
- `?platform=android` for android app
- `?platform=ios` for iOS app

The checkout URL can be different for each of these platforms.
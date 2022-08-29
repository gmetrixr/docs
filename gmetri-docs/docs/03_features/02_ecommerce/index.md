---
---

<head>
  <link rel="canonical" href="https://docs.gmetri.com/metaverse/integrations/e-commerce-with-gmetri" />
</head>

:::warning DOCUMENTATION MOVED
Go to the new version of this page at https://docs.gmetri.com/metaverse/integrations/e-commerce-with-gmetri
:::

# GMetri E-Commerce Plugin 

GMetri allows creation of 360° shopping environments that can be linked with any e-commerce platform. This is done by creating plugins that bridge the communication 
between the e-commerce platform and GMetri.

 ![e-commerce-plugin](https://s.vrgmetri.com/image/w_512,q_90/gb-web/portal-docs/assets/img/screenshots/ecommpulgin.png)

 GMetri has an e-commerce plugin that allows linking elements in any 360° scene to your SKUs. When the user then clicks on these elements, he is present with a Product Card like the above.


 The values in this product card (like product description, photos) can be populated using the e-commerce plugin that would query your APIs to get all details and manage the user’s session.

 ![cart update](https://s.vrgmetri.com/image/w_512,q_90/gb-web/portal-docs/assets/img/screenshots/ecommplugin-cart.png)

 We also show a cart on the top left corner that can start a checkout session on your e-commerce platform.


## Requirements

To create an ecommerce plugin, we need 3 things

 ### 1. User Identification Mechanism

   When the user first visits the 360° store, how should we identify the user? 
This could be done via a query parameter, but needs to be pre decided and fixed before the plugin is created. Any additional parameters that are needed for any further API calls can also be forwarded using this method. 

Eg: https://view.gmetri.com/v5/org-name/store?uid=<<user_identifier>>


### 2. API Details

1. **Listing all products**. This is needed when we link elements on the scene with the SKU and variants on the e-commerce platform. There may be additional qualifiers like “category” or “region” that can be used as an input to this API, to filter the products that get sent.

2. **Getting details of one product**. This would be an API (or multiple APIs) that take the SKU id of the product as input and give all details of the product (including price) as the output. This is used to populate the product card. This would also include any APIs that are needed to get the stock/availability of products.

3. **Starting Cart Session and Cart APIs**. GMetri has the ability to maintain the cart session on its end in the UI itself. This can be communicated to the e-commerce platform when the actual checkout is started. However, if we need to sync cart items at realtime, we can do that using cart APIs that allow GMetri to:
   1. Add items to cart
   2. Remove items/change quantity from cart
   3. List cart/get Cart Length - this is used to specify the number label on the cart icon

4. **APIs to be called before redireciton to checkout**. In case there are APIs that can be called to pass the user’s cart’s state to the e-commerce platform, please let us know those too.

5. **Staging environment** details if present. Also the differences between staging and production environment.

### 3. Checkout Redirection Mechanism

For the actual checkout, GMetri will redirect the user to the usual checkout journey of the e-commerce platform. Details of this handoff need to be communicated here.
For websites, this would usually be the checkout or cart URL.
For Apps (both Android / iOS) this would be a **deep-link**, which takes you to the cart page of the app.

The experience link should append the following optional params
- **?platform=web** for website
- **?platform=msite** for mobile website (if needed)
- **?platform=android** for android app
- **?platform=ios** for iOS app
  
  The checkout URL can be different for each of these platforms.

## Integration within Apps

  Integration within apps will work by running the link generated above of an iframe(web) equivalent in the app.
  
  1. **Android - Chrome Custom Tabs** - Custom Tabs is a browser feature, introduced by Chrome, that is now supported by most major browsers on Android. It gives apps more control over their web experience, and makes transitions between native and web content more seamless without having to resort to a WebView.More documentation can be found [here](https://developer.chrome.com/docs/android/custom-tabs/overview/) 
   
   We have a small guide on integrating Chrome Custom tabs to run GMetri experiences with ease [here](https://docs.gmetri.com/Features/Publish/Embed/using-vr-experiences-within-android-apps/#implementing-chrome-custom-tabs-for-gmetri-experiences)

 2. **iOS** - There are 2 implementations that can be used namely **WKWebView** and **SFSafariViewController**. Both these implementations are similar to android’s chrome custom tabs implementation but have their own set of use-cases. We recommend using SFSafariViewController to run GMetri experiences within your app to get the full immersive experience. 
Documentation for both can be found here:

   - **WKWebView :** [WKWebView ](https://developer.apple.com/documentation/webkit/wkwebview)
   -  **SFSafariViewController :** [SFSafariViewController](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller)
    
  
  



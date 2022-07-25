---
title: Integrating Shopify Storefront within GMetri Experience
description: Integrating Shopify Storefront within GMetri Experience
hide_title: true
sidebar_position: 2 # float position is supported
sidebar_label: Shopify Integration
---

# Shopify Integration

This tutorial will demonstrate how to integrate a Shopify Storefront within a GMetri experience.

## Prerequisites
There are a few steps that are required to enable Shopify Storefront API access on your shopify account.

1. Login to you Shopify account using the admin account.
2. From your Shopify admin, click Settings > Apps and sales channels.
3. Click Develop apps.
4. Click `Create an app` button on the top right and enter a friendly name.
5. Select the app created in the previous step and click `API Credentials` tab.
6. Click API credentials.

### API credentials
On the API credentials page,
1. Click on `Configure Storefront API Scopes`
2. Check all options available and save. These permissions allow GMetri experiences to pull information about products and manage cart and checkout sessions. 
3. Now click on `Install app` button and accept the terms and conditions. 
4. Note down the API access key generated, this will be required later.

![](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/shopify_storefront_api_access.png#boxShadow)


### Domain name
Shopify creates a unique domain name for each of the stores created on their platform. The domain name is required in conjunction with the API credentials to enable a successful integration. 
1. From your Shopify admin, click Settings
2. Your domain name will be printed on the top left of the page. Note it down for later. 

![](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/shopify_domain_name.png#boxShadow)

### Getting the product SKU
To get a product's SKU
1. From your Shopify admin, click Products > Select a product
2. Note the URL in your browser window. The product SKU is the last part of the address like so:
   * If the URL in address bar is: `https://my-store.myshopify.com/admin/products/7309350764729`
   * Then the product SKU is `7309350764729`
3. Note the product SKU for later. 

## Integration with GMetri

:::info
The Shopify Plugin will be automatically enabled based on your access and organization subscription. If you do not see the option to select Shopify, consider upgrading your subscription.
:::

If you are the admin or a collaborator, then you can configure Shopify integration with GMetri. 
1. From you GMetri homepage, open the experience editor.
2. From within the editor, click Settings > E-Commerce > Select `Shopify` from the dropdown
3. Enter the Access token noted during Shopify API credentials configuration
4. Enter the domain name noted during Shopify domain name configuration
5. Check `Show Cart Icon` to enable showing a cart counter and checkout link to the shopify store from within a GMetri experience. 

![](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/shopify_ecommerce_config.png#boxShadow)

## Linking Products with interactions in the metaverse
To link shopify products to interactions inside the experience, you need to follow the below steps:
1. Click on `Add New Product` button
2. Select a scene from the `Scene Name` dropdown. This the scene where the integration will work. Integration can be done with multiple scenes within a single experience.
3. Select an element from the `Element Name` dropdown. 
4. Enter the Product SKU in the text field next. Ensure that the product SKU is correct. 

Above setup will internally create a set of rules to open and pull information for the relevant products from shopify storefront whenever an element is clicked. 
The resulting rules would read out like so: "When Laptop-Image is clicked, then show product with SKU"

## Testing the integration
1. From your GMetri editor, close the Settings page.
2. Click on `Play` icon on the top right of the page and open a preview link
3. Click on an element which was selected in the Ecommerce section. 
4. This should open up the product page with information from the shopify store, including pricing details, pictures and variants.
5. Try adding the product to cart, increase and decrease the quantity of purchase. 
6. Click on `Cart Icon` on the top left of the page to goto shopify store and start the payment process.

![](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/shopify_gucci_bag.png#boxShadow)
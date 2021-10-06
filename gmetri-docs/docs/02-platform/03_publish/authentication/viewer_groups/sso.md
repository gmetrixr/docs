---
hide_title: true
sidebar_label: SSO
---

# SSO

This option allows you select either `Google`, `Microsoft (Azure)` or `SAML` based login for viewers.

## Google and Microsoft Azure based SSO

When you use this, you have three options:

- Public - all people with valid (google or azure based on your selection) accounts are allowed to access your deployment.)

- Filter By domain - all people with valid google or azure based accounts on the domain that you have set are allowed to access your deployment.

- Filter By viewer list - all accounts google or azure based accounts in your viewer list are allowed to access your deployment.

![viewer group enterprise](https://sS.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/viewer_groups_enterprise.png.jpg#boxShadow/)

## SAML based SSO

This is a viewer group authentication mechanisms support for the [Security Assertion Markup Language](https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html).

### Identity Provider Setup

Any SAML identity provider (IdP) can be configured to be used for authentication of a viewer.

To enable this, head over to the `Viewer Group` page, then:

1. Select SSO as your `Login Method`.
2. Now select `SAML` from the `Provider` drop-down menu.
3. After this, you will be asked to provide your SAML IdP configuration.

You should see the config as follows:

![SAML viewer group](https://s.vrgmetri.com/image/q_80/gb-web/portal-docs/assets/img/screenshots/viewer_group_saml.png)

4. Enter your IdP's `entityId`, `SSO redicrection URL` and `X.509 signing certificate`.
5. Click the `Save` button to finally save your configuration.
6. To register GMetri as a service provider (SP) with your IdP, you will need the configuration details. You can get these details by clicking the `Download GMetri's SAML Metadata` button.

You can find sample metadata configuration [here](https://samltest.id/download/) under the `SAMLtest's IdP` section. This will give you an idea of what you need to paste in the boxes for the SAML config.


:::caution NOTE on pasting X.509 certificate
Please paste certificate *without* the `----BEGIN CERTIFICATE----` and `----END CERTIFICATE----` part.
:::

### Deployment Setup

Once you create a SAML viewer group, head to your deployment and set this viewer group as the authentication mechanism for that deployment.

### Viewer

- Once you open a viewer link for deployment with a SAML SSO based viewer group, you will see a pop-up with the IdP's login page.
- Post-IdP login process, you will be redirected back to `view.gmetri.com`.
- We use your `email address` sent to us by the `IdP` as the primary identifier for the viewer session.

![SAML viewer IdP login](https://s.vrgmetri.com/image/q_80/gb-web/portal-docs/assets/img/screenshots/viewer_group_saml_viewer.png)

### SAML configuration

- Name Identifier format: `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified`
- In IdP `SAMLResponse` we look for the following attributes:

| Friendly name | Name      | NAMEFORMAT |
| :------------ | :-------- | :--------- |
| Email         | `email`/`mail`| `urn:oasis:names:tc:SAML:2.0:attrname-format:uri` |
| Display Name   | `displayname` / `urn:oid:2.16.840.1.113730.3.1.241` | `urn:oasis:names:tc:SAML:2.0:attrname-format:uri` |

:::caution NOTE
SAML authentication will not be successful unless the `IdP` returns your `email` in its SAML response.
:::
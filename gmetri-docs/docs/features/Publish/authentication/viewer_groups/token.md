---
hide_title: true
sidebar_label: Token
---

# Token

This option allows to generate automatic login tokens to login the viewers. A great way to use this feature is to autogenrate the login tokens via an API and create limited time login links.

To generate a token, create a new viewer group and select the `token` login method.
When you select this, you will be shown a `signing key`, copy this signing key. This will be used to generate the login tokens.

To generate a login token, we create a Jwt token. This login token will be appended to the experience link. 

The final url will look like this: 

`<deployment-link>?token=<generate-jwt-token>`

An example url:

`https://view.gmetri.com/v4/game/safehands_v2?token=34fhdf7asbfdsa09in2m1od.09u0dfa8nfdjajkbfe8uih32rjn.908ufdbsahbjfd9sabjhfdu` 

## Creating a Jwt token for your experience:

JSON Web Token (Jwt) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
A typical Jwt consists of three parts separated by dots (`.`), which are header, payload and signature. Therefore, a JWT typically looks like the following.
`xxxxx.yyyyy.zzzzz`. More information about Jwts can be found [here](https://jwt.io/introduction/).

### Jwt Payload
This information is required to correctly identify a viewer on GMetri experiences. The payload for the JWT is shown below (the optional fields can be set as per requirement):

```javascript
{ 
  "identifier" (required): "John001",
  "first_name" (optional): "John",
  "last_name" (optional): "Doe",
  "phone_num" (optional): "+1 000 000 000"
}

```
**`identifier`** is the unique key by which you identify your viewers.

### Creating Jwt tokens on the web
We recommend using npm package **`jsonwebtoken`** to generate jwt tokens on the web (both on server and browser)

An example of generating a Jwt token in `node.js`:
```javascript
const jwt = require('jsonwebtoken');

function generateJwt() {
  const payload = {
    identifier: 'John001', // A unique identifier for your user
    first_name: 'John'
  };
  const apiSecretkey = "<your api secret key>";
  const token = jwt.sign(payload, apiSecretkey);
  return token;
}
```

### Creating Jwt tokens in a java app

```java
  import java.security.Key;
  import io.jsonwebtoken.Jwts;
  import io.jsonwebtoken.security.Keys;
  
  String createJwt(String url, String identifier, String apiSecret) {
    JSONObject obj = new JSONObject();
    obj.put("identifier", identifier);
    Key key = Keys.hmacShaKeyFor(apiSecret.getBytes());
    String jwt = Jwts.builder().setPayload(obj.toString()).signWith(key).compact();
    return url + "?token=" + jwt;
  }
  
  // url is the link from deployment section sssss
  String finalUrl = createJwt(url, <unique identifier>, <your api secret key>);
```

### Creating Jwt tokens in an android app
To run GMetri experiences inside android apps, we recommend an implementation of Chrome Custom Tabs API. 
Detailed information on how to setup an android experience with Chrome Custom Tabs can be found in this [experience](https://github.com/gmetrixr/chrome-custom-tabs-jwt/)

In your android experience, add the required dependencies for Chrome Custom Tabs and Jwt. Following is an example of gradle build dependencies:
```java
dependencies {
    implementation fileTree(dir: 'libs', include: ['*.jar'])
    implementation 'com.android.support:appcompat-v7:26.1.0'
    implementation 'com.android.support:customtabs:26.1.0'
    api 'io.jsonwebtoken:jjwt-api:0.11.0'
    runtimeOnly 'io.jsonwebtoken:jjwt-impl:0.11.0'
    runtimeOnly('io.jsonwebtoken:jjwt-orgjson:0.11.0') {
        exclude group: 'org.json', module: 'json' //provided by Android natively
    }
}
``` 

Information on how to install dependencies for other build systems are in the links below:

1. [Chrome custom tabs](https://developer.chrome.com/multidevice/android/customtabs/)
1. [JWT](https://github.com/jwtk/jjwt/)

From this [experience](https://github.com/gmetrixr/chrome-custom-tabs-jwt/) , copy two files: `ChromeCustomTabsJwt.java` and `ServiceConnectionCallback.java` into your android experience. These files together provide the interface for chrome custom tabs to run GMetri experiences.

The className `ChromeCustomTabsJwt.java` implements two public methods:

  1. `initialize(String viewerIdentifier, String apiKey, String url, Context context)`
  2. `launch()`

Arguments:
    
  1. **viewerIdentifier** - This is a JSON string containing information for the viewer
  1. **apiKey** - A unique key generated for GMetri experiences.
  1. **url** - Url of the experience
  1. **context** - Context of your activity (`this`)
  
An example implementation of the above classes:
```java
  ChromeCustomTabsJwt chromeCustomTabs = new ChromeCustomTabsJwt();
  JSONObject obj = new JSONObject();
  try {
    obj.put("identifier", "test@example.com");
  } catch (JSONException e) {
    e.printStackTrace();
  }

  String apiKey = "your_secret_api_key";
  String url = "url_to_open";
  chromeCustomTabs.initialize(obj.toString(), apiKey, url, this);
  chromeCustomTabs.launch();
```

 To add more fields to viewerIdentifier JSON object refer to the [payload](#jwt-payload) section.

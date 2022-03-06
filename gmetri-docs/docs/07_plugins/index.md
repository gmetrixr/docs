---
hide_table_of_contents: false
---

# GMetri Plugin Ecosystem

Plugins are third-party scripts or applications that extend the functionality of GMetri Editor or Viewer. They allow users to customize their experiences or create more efficient workflows.

> Plugins are supposed to extend functionalities that are not already available on the GMetri Platform.
> If you haven't explored the platform yet, head [here](https://portal.gmetri.com/signup) to signup. Go explore!  

Like GMetri Editor and Viewer, plugins are powered by web technologies. You'll need a basic understanding of these technologies to develop and take advantage of the Plugin ecosystem.

Plugins interact with GMetri via dedicated **Plugin APIs**. The API reference and the accompanying documentation has all the information you need to build plugins. 

## Plugin Access
The Plugin API supports for **read** and **write** operations, allowing developers to **view**, **create** and **edit** experiences.

To use the Plugin API(s), you will need an **API token**. To get an API Token, follow the steps down [here](./api_token)

For the ease of understanding, we've broken the documentation down into two different sections.
We will first go over the usage of **REST APIs** and then about the usage of the **GMetri Player**.

### Plugin APIs
GMetri exposes a defined set of **REST APIs** which will allow you to **create**, **view** and **edit** experiences. 
Any changes done via the API interface will be visible immediately on the GMetri Platform as well. 
For example, creating a new experience via REST APIs will also show this newly created experience on platform experiences page.

The REST APIs are broken down into 2 different functions:
* **Experience** - This contains APIs for creating, viewing and modifying experiences. Detailed documentation is available [here](./rest_api/experience)
* **File Manager** - This contains APIs for uploading and managing files (**image/video/audio/3d**). Detailed documentation is available [here](./rest_api/filemanager)

### GMetri Player
GMetri exposes it's **viewer** as a standalone player which can be added to any application via javascript. 
**GMetri Viewer** is a full fledged **Metaverse** application on the web. It allows you to run experiences created using the Plugin API. 

Detailed documentation is available [here](./player)    


### Examples
We have a few examples ready to get you started using Plugin API [here](./05_examples/00_intro.md). 
# docusaurus-docs

## Notes

* Use pnpm, not yarn.
* Runs well on linux, not tested on Mac/Windows.
* To Start using the repo, check out the code locally, and type `sd` (Start Docker). This starts a docker container and places you inside it.
> Note: you can start multiple terminals and type `sd`. You will get connected to the same container.
* Run everything beyond this point inside the docker container.
* To stop the container: Exit the docker container using `Ctrl+d`, and then `std` (STop Docker)

## One Time Initial Docusaurus Setup

> https://docusaurus.io/docs/next/installation#scaffold-project-website

```
npx @docusaurus/init@latest init gmetri-docs classic
cd gmetri-docs
rm -rf yarn.lock node_modules
p i
```

* Add following to start script in gmetri-docs/package.json: `docusaurus start -p 8001 -h 0.0.0.0`

## After Checking out project

```bash
./sd #To get inside docker container, everything below is in the container
cd gmetri-docs
p i
p start #to start watch mode
p build #to build website
p deploy #to deploy website
```

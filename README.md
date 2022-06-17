# Svelte Application

This application is built using Svelte kit. It showcases some of the functionalities from svelte and svelte kit like slots, stores, event forwarding and other.
Note that you will need to have Node.js installed.

## Running Locally

```
npm install
npm run dev
````
Usually it would run on localhost:3000, but its updated to localhost:9000.
Now navigate to http://localhost:9000. You should see your app running. Edit a component file in src, save it, and reload the page to see your changes.

## Json Server

For fetching Diagnosis data here, Json server is used.

```
npm install -g json-server
```

can be used to install json server.
Add a db.json file and add below Structured json data.

```
"diagnosis": [{ 
	"id": 1, 
	"title": "give diagnosis title", 
	"diagImage": "give the image url", 
	"description": "describe the diagnosis" 
	}]
```

Run it using the command 

```
json-server --watch db.json
```

Json data will be available in http://localhost:3000/diagnosis



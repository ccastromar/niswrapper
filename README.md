# http NIS Wrapper app

This is a demo app built with Node.js to wrap http NIS calls. 
It should be deployed with an https server (nginx) serving as a proxy to Node.js.
The index page is available in three languages (spanish, english and russian).

This is a [diagram](https://github.com/ccastromar/niswrapper/blob/master/app-architecture.png) of app architecture with Nginx, Node.js, MongoDB and NIS.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

[Node.js](https://nodejs.org/es/download/) to run the app

### Installing

Clone this repository 

```
git clone https://github.com/ccastromar/niswrapper.git
```

Execute npm install 

```
npm install
```

## Running the app

Execute the app

```
node app.js 
```

## Deployment

When Node.js is running then open a browser at http://localhost:8082
In real case scenario it should be deployed on https.

# Documentation

This a demo app built with Node.js to show how to wrapp NIS http requests within Node.js and Nginx in an https server.


## Built With 

* [VisualCode](https://code.visualstudio.com/) - The editor

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/ccastromar/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to me.

## Versioning

For the versions available, see the [tags on this repository](https://github.com/ccastromar/niswrapper/tags). 

## Authors

* **Carlos Castro Martos** - *Initial work* - [ccastromar](https://github.com/ccastromar)

See also the list of [contributors](https://github.com/ccastromar/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [NEM Foundation](https://nem.io)

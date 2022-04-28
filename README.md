# Conway's Game of Life

A basic implementation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

## Prerequisites

* You have a Linux or OSX machine. Windows should be supported but has not been tested.
* You have installed a recent version of [Docker](https://www.docker.com/).

## Quick Start

You can build the library for development using...

```
docker run -it --rm -p 8080:80 -v "$PWD/src::/usr/share/nginx/html/:ro" nginx:alpine
```

Then navigate to http://localhost:8080 in your preferred browser.

## License

Licensed under [MIT](https://choosealicense.com/licenses/mit/).

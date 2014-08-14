## Oversight.io

Bringing into sight the work of the United States government's oversight community.

A small website (in progress!) at [oversight.io](https://oversight.io).

### Getting started

#### Prerequisites

It's an [Express 4.x app](http://expressjs.com) in [Node](http://nodejs.org/) (JavaScript). It uses [Elasticsearch](http://elasticsearch.org/) as a search engine. Install all those things.

#### Configuring

A sample configuration file exists in `config/`. Copy it to
`config/config.json` and fill in values specific to your system.

#### Initializing the data

1. Run `bundle install && rake -l ./tasks/elasticsearch.rake elasticsearch:init`
2. Run `git submodule update --init` to load all IG reports into `data/`.
3. Run `node tasks/inspectors.js`

#### Running the App

```bash
$ node app.json
```

### License

All code original to this project is released as free, open source software under the [General Public License, Version 3](http://www.gnu.org/licenses/gpl-3.0.txt).

All prose original to this project is released under a <a href="http://creativecommons.org/licenses/by/4.0/">CC-BY 4.0</a> license.

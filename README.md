# ees-announcements-scraper
[![NPM](https://nodei.co/npm/ees-announcements-scraper.png?compact=true)](https://nodei.co/npm/ees-announcements-scraper/)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/5e996492449e404d9cbec0ceaa80f718)](https://www.codacy.com/gh/yannisalexiou/ees-announcements-scraper/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=yannisalexiou/ees-announcements-scraper&amp;utm_campaign=Badge_Grade)
[![npm version](https://badge.fury.io/js/ees-announcements-scraper.svg)](https://badge.fury.io/js/ees-announcements-scraper)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

[![NPM Publish](https://github.com/yannisalexiou/ees-announcements-scraper/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/yannisalexiou/ees-announcements-scraper/actions/workflows/npm-publish.yml)

Scraper that gets the announcements from EES postgraduate programme of NTUA.

## Simple Description
A Node.js package that scraps the [EES site](http://mycourses.ntua.gr/courses/PSTGR1083/) and retrieve the announcements of the programme.
This package is quite useful for thesis work or other academic projects.

## Usage

### Install
First install the package using npm:
```properties
npm install --save ees-announcements-scraper
```

Then, require the package and use it like so:
```javascript
const eesScraper = require('ees-announcements-scraper');

var eesAnnouncements = eesScraper.getAnnouncements();

eesAnnouncements.then(function (results) {
  console.log("eesAnnouncements", results);
});
```

## Functions Documentation
### getAnnouncements
Returns all announcements as an array of objects with the below details:
* title
* date
* text
* htmlText

## License
GNU GPLv3
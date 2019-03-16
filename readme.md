# getYoutubeSubscriber
![](https://img.shields.io/github/languages/top/adamsiekierski/getYoutubeSubscriber.svg) ![](https://img.shields.io/github/package-json/dependency-version/adamsiekierski/getYoutubeSubscriber/axios.svg) ![](https://img.shields.io/npm/l/getyoutubesubscriber.svg)

Quickly get number of subscribers of youtube account. Don't need to get an API key, just implement and it just works

### Usage
```javascript

const getYoutubeSubscriber = require('getyoutubesubscriber')

getYoutubeSubscriber('{ Here place channel ID }').then((data) => {
   console.log(data) // log subscriber count 
});

```
It's an asynchronous function, so it doesn't block other processes.

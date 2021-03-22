---
title: "NextJS basics"
description: "traditional post"
date: "2021-03-02"
public: false
---

### NextJS basic install

```bash
npm install react react-dom next
```
Simply add a script in your package.json : "dev": "next"
By default, NextJS will launch a custom webpack dev server on port 3000

### the pages folder

Note that the pages folder contains React components, each mapped to a specific route, that of the component's filename.

### Use Typescript or not

Note that a lot of setup is necessary to make TS and NextJS together. For simple apps, you might not need to use TypeScript

### Build a docker image out of a NextJS app

This requires a "dev": "next" entry in your package.json scripts

```Dockerfile
FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "run", "dev"]
```

Add a .dockerignore file in your app folder, 
```
node_modules
.next
```

### Configure NextJS 

Note that you'll need to create a next.config.js file.

Here is an example (configure NextJS to improve the dev server, when running inside docker)

```javascript
// next.config.js file
module.exports = {
    webpackDevMiddleware: config => {
        config.watchOptions.poll = 300;
        return config;
    }
}
```
### NextJS and Global CSS

create a file named _app.js in the pages folder. 

```javascript
// _app.js file
// example for bootstrap css-framework
import 'bootstrap/dist/css/bootstrap.css';
import Header from 'Header'

const AppComponent = ({Component, pageProps}) => {
    return (
        <div>
            <Header />
            <Component {...pageProps}>
        </div>
    )
};

export default AppComponent;
```
This way, we can define our own app component, instead of the default app component NextJS uses to wrap our "page" components.


### NextJS links

For links, NextJS provides a component

```javascript
import Link from 'next/link'
// inside your jsx
<Link href="/"><a>follow the link</a></Link>
```

### NextJS router

To navigate, inside the browser, between page, NextJS provides a router component :

```javascript
import Router from 'next/router'

// inside your component's logic
Router.push('/mainpage');
```

### NextJS MyComponent.getInitialProps(context)

getInitialProps is the way to define a function, 
which NextJS will call to fetch data, before rendering our component.

This call happens either on the server (hard refresh, link from another domain)
or inside the browser (if our component is rendered via link, or via route redirection, while we are already inside the app)

The fetched data must be returned, and once complete, it will be passed to the component via the props.

```javascript
// my_component.js file
const MyComponent = (data) => {
    // use fetched data
}

MyComponent.getInitialProps = async (context) => {
    // context could be written {req, res}
    
    if(typeof window === 'undefined') {
        // fetch data from the server
        return data
    }
    else {
        // fetch data form the browser
        return data
    }
}

export default MyComponent;
```

But wait, NextJS api is not perfect :

When using getInitialProps from the App component (_app.js file)
1. you are provided with a different context than from a normal "page" component ({req, res})
You'll the equivalent, on the ctx property of this appContext.

2. the getInitialProps inside your "pages" component is not automatically called anymore.

Here is an example of the uncomfortable side of NextJS:

```javascript
// _app.js file
// see details above, just modify data parameter
// const AppComponent = ({ Component, pageProps, data })
// ...

AppComponent.getInitialProps = async appContext => {
    // fetch data for all pages
    const {data} = await axios.get('/api/bla/bla');

    // fetch data for a page where getInitialProps is not automatically called anymore.
    let pageProps = {}
    if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    }
    return {pageProps, data}
}
```
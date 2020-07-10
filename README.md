# Caasy SDK Javascript

A thin Javascript wrapper for the Caasy API.

## Install

Install the SDK with `npm i --save @caasy/sdk-js` and import it with the `import` or `require` keyword.

```javascript
const caasy = require('@caasy/sdk-js');

// or

import caasy from '@caasy/sdk-js';
```

## Configuration

Before you use the SDK, it needs to be initialized with the `init` method.

```javascript
caasy.init({ siteId: '<site ID>' });
```

## Usage

Now, you can get started and conveniently request public data such as published blog posts from your Caasy instance.

```javascript
const allBlogPosts = await caasy.posts.getAll();
```

## Documentation

Full documentation will be available soon.
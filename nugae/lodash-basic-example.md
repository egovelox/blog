---
title: "Lodash basic"
description: "traditional post"
date: "2021-03-17"
public: false
---

```javascript
const numbers = [
  [10, 5],
  [17, 2],
  [34, 1],
  [60, -5]
];

const sorted = _.sortBy(numbers, (row) => row[1])

const mapped = _.map(sorted, row => row[1])

// or more concisely
_.chain(numbers)
	.sortBy((row) => row[1])
	.map((row) => row[1])
	.value();

```
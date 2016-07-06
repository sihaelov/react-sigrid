[![Build Status](https://travis-ci.org/sihaelov/react-sigrid.svg?branch=master)](https://travis-ci.org/sihaelov/react-sigrid)

# React (Si)mple (grid)

A lightweight, responsive simple grid component for React.

##[Demo](https://sihaelov.github.io/react-sigrid/)
[https://sihaelov.github.io/react-sigrid/](https://sihaelov.github.io/react-sigrid/)

## Installation

```js
npm install react-sigrid
```

## Usage

A part of Sigrid is to build using `<Col />` which are inside of `<Row />`

```js

import {Row, Col} from 'react-sigrid'

<Row>
    <Col small={12} medium={9} large={7}></Col>
    <Col small={12} medium={3} large={5}></Col>
</Row>
```

You can offset a column as you wish.

```js
import {Row, Col} from 'react-sigrid'

<Row>
    <Col medium={3} mediumOffset={9} large={5} largeOffset={7}></Col>
</Row>
```

## Screen Sizes

             | Mobile Devices (<= 600px) | Tablet Devices (<= 992px) | Desktop Devices (> 992px)
------------ | --------------------------|---------------------------|--------------------------
Prefix       | small                     | medium                    | large
Number of Columns | 12                   | 12                        | 12


## Props

Name         | Type | Description
-------------|------|------------ 
children     |node  | Can be used to render elements inside the Column.
className    |string| The css class name of the column.


#### Columns

Name   | Type |
-------|------| 
small  |number|
medium |number|
large  |number|


#### Offset

Name         | Type 
-------------|------
smallOffset  |number
mediumOffset |number
largeOffset  |number

## License

MIT

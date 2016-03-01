### Original Source 

This is an meteor package wrapper for 'https://github.com/marlun78/number-to-words'.

# Number To Words
Contains some util methods for converting numbers into words, ordinal words and
ordinal numbers.


### Install
`meteor add jagzviruz:number-to-words`


### API

#### `toOrdinal(number)`
Converts an integer into a string with an ordinal postfix.
If number is decimal, the decimals will be removed.
```js
numberToWords.toOrdinal(21); // => “21st”
```

#### `toWords(number)`
Converts an integer into words.
If number is decimal, the decimals will be removed.
```js
numberToWords.toWords(13); // => “thirteen”

// Decimal numbers:
numberToWords.toWords(2.9); // => “two”

// Negative numbers:
numberToWords.toWords(-3); // => “minus three”

// Large numbers:
numberToWords.toWords(9007199254740992); // => “nine quadrillion, seven trillion, one hundred ninety-nine billion, two hundred fifty-four million, seven hundred forty thousand, nine hundred ninety-two”
```

#### `toWordsOrdinal(number)`
Converts a number into ordinal words.
If number is decimal, the decimals will be removed.
```js
numberToWords.toWordsOrdinal(21); // => “twenty-first”
```


### Contributions, Comments and Bugs
Contributions, comments and/or bug reports are much appreciated. Open a pull request or add comments on the
[issues page](https://github.com/jagzviruz/number-to-words/issues). Thanks!
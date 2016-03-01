Package.describe({
  name: 'jagzviruz:number-to-words',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'It contains some util methods for converting numbers into words, ordinal words and ordinal numbers.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jagzviruz/number-to-words',
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addFiles('numberToWords.js');
});

Package.onTest(function(api) {
  api.use('jagzviruz:number-to-words');
  
});

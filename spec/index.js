var CustomReporter = require('./reporter')
var Jasmine = require('jasmine')
var jasmine = new Jasmine()

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [
    'spec.js',
    'triangle_spec.js',
    'fizzbuzz_spec.js',
    'chessboard_spec.js'
  ],
  helpers: [
    'environment.js',
    'answers/index.js',
    'answers/triangle.js',
    'answers/chessboard.js',
    'answers/fizzbuzz.js'
  ]
});

jasmine.addReporter(CustomReporter)

jasmine.execute()
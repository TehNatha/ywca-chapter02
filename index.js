var CustomReporter = require('./spec/reporter')
var Jasmine = require('jasmine')
var jasmine = new Jasmine()

jasmine.loadConfig({
    spec_dir: 'node_modules/ywca-chapter02/spec/',
    spec_files: [
        'spec.js',
        'triangle_spec.js',
        'fizzbuzz_spec.js',
        'chessboard_spec.js'
    ],
    helpers: [
        'environment.js',
        '../../../chapter02/index.js',
        '../../../chapter02/triangle.js',
        '../../../chapter02/chessboard.js',
        '../../../chapter02/fizzbuzz.js'
    ]
});

jasmine.addReporter(CustomReporter)

jasmine.execute()
var Jasmine = require('jasmine')
var jasmine = new Jasmine()

console.log(__dirname)
console.log(process.cwd())

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

jasmine.execute()
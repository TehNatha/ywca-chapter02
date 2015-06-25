'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  paths: function () {
    this.destinationRoot('chapter01');
  },

  writing: {
    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      )
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      )
      this.fs.copy(
        this.templatePath('_README.md'),
        this.destinationPath('README.md')
      )
      this.fs.copy(
        this.templatePath('_triangle.md'),
        this.destinationPath('triangle.md')
      )
      this.fs.copy(
        this.templatePath('_fizzbuzz.md'),
        this.destinationPath('fizzbuzz.md')
      )
      this.fs.copy(
        this.templatePath('_chessboard.md'),
        this.destinationPath('chessboard.md')
      )
      this.fs.copy(
        this.templatePath('_index.js'),
        this.destinationPath('index.js')
      )
      this.fs.copy(
        this.templatePath('_triangle.js'),
        this.destinationPath('triangle.js')
      )
      this.fs.copy(
        this.templatePath('_fizzbuzz.js'),
        this.destinationPath('fizzbuzz.js')
      )
      this.fs.copy(
        this.templatePath('_chessboard.js'),
        this.destinationPath('chessboard.js')
      )

    }
  }
});

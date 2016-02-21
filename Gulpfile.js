var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var argv = require('yargs').argv;
var rename = require('gulp-rename');
var eventStream = require('event-stream');
var template = require('gulp-template');

var pathFromBase = path.join.bind(null, __dirname);
var pathFromServer = pathFromBase.bind(null, 'server');

var toTitleCase = function(str) { return ([str[0].toUpperCase()].concat(str.slice(1)).join('')) };

gulp.task('make-apis', function() {
  var destination = pathFromServer("api");
  var generator = pathFromServer('generators', 'api', '{{name}}.routes.js');
  return generateFromModels(destination, generator);
});

var generateFromModels = function(destination, fromGenerator) {
  var force = 'force' in argv;
  var start = pathFromServer("models");

  if (force)
    console.info("You're using --force, I hope you know what you're doing.");

  return gulp.src(path.join(start, '*.js'))
    .pipe(eventStream.map(function (data, cb) {
      var fileName = data.path.replace(start + '\\', '');

      if (fs.existsSync(path.join(destination, fileName)) && !force) {
        cb(fileName + " already exists, use --force to override", null);
      } else {
        var modelName = fileName.replace(/(\..+)/, '');

        return gulp.src(fromGenerator)
          .pipe(template({ name: modelName }))
          .pipe(rename(function(path) { path.basename = path.basename.replace('{{name}}', modelName); }))
          .pipe(gulp.dest(destination))
          .on('end', () => cb(null, data));
      }
    }));
}

gulp.task('make-services', function() {
  var destination = pathFromServer("services");
  var generator = pathFromServer('generators', 'services', '*.js');

  return generateFromModels(destination, generator);
});

gulp.task('bundle-api', function() {
  var models = [];
  var apiPath = pathFromServer('api');
  var searchPath = path.join(apiPath, '*.js');

  return gulp.src(searchPath)
    .pipe(eventStream.map(function (data, cb) {
      if (!/index/.test(data.path)) {
        console.log("Found route:", data.path);
        var fileName = data.path.replace(apiPath + '\\', '');
        models.push(fileName.replace(/(\..+)/, ''));
      }
      cb(null, data);
    })).on('end', function() {
      var destination = pathFromServer('api');

      return gulp.src(pathFromServer('generators', 'api', 'index.js'))
        .pipe(template({ models: models }))
        .pipe(gulp.dest(destination));
    });
});

gulp.task('default', [ 'bundle-api' ]);

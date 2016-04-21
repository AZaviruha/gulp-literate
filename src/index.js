var Folder      = require('literate-programming-lib');
var PluginError = require('gulp-util').PluginError;
var through     = require('through2');

var PLUGIN_NAME = 'gulp-literate';

module.exports = function() {
	var folder = new Folder();
	var gcd    = folder.gcd;

    return through.obj(function(file, encoding, next) {
        if (file.isNull()) {
            // nothing to do
            return next(null, file);
        }

		gcd.on('error', function(err) {
			console.log('error', err);
		});

		gcd.on('file ready', function(text) {
			if (file.isStream()) {
				file.contents = file.contents.pipe(text);
				return next(null, file);
			} else if (file.isBuffer()) {
				file.contents = new Buffer(text, encoding);
				return next(null, file);
			}
		}.bind(this));

		if (file.isStream()) {
			// folder.newdoc('temp', file.contents.read()); TODO: check
			throw new Error(PLUGIN_NAME + ' does not support streams');
		} else if (file.isBuffer()) {
			folder.newdoc('temp', file.contents.toString());
		}
    });
};

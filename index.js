/**
 * Created by Josue on 1/7/16.
 */

var gutil = require('gulp-util');
var path = require('path');
var through = require('through2');


function partialize(options) {


	var subfolder = options.subfolder || '';
	return through.obj(function transform(file, enc, callback) {

		var self = this;
		var filePath = file.path.replace(file.cwd, '.');
		var splitted = filePath.split(path.sep);
		if (subfolder) {

			var subPos = splitted.indexOf(subfolder);

			if (subPos > -1) {
				splitted.splice(subPos, 1);
			}
		}
		// Delete file name;
		var filename = splitted.pop();

		var folder_name = splitted.pop();
		self.push(new gutil.File({
			path: path.join(folder_name, filename),
			contents: file.contents
		}));

		callback();
	});

}

module.exports = partialize;


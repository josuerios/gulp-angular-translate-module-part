/**
 * Created by Josue on 1/7/16.
 */
(function () {
	'use strict';


	var del = require('del');
	var gulp = require('gulp');
	var parti = require('./index');

	function partialize() {
		return gulp.src('./test/**/*.json')
			.pipe(parti({subfolder: 'i18n'}))
			.pipe(gulp.dest('./i18n'));
	}

	gulp.task('default', partialize);


})();

# gulp-literate

Simple gulp plugin for [literate-programming-lib](https://github.com/jostylr/literate-programming-lib)

## Usage

```javascript
var literate = require('gulp-literate');

gulp.task('build', function () {
	return gulp.src(PATH.src)
		.pipe(literate())
		.pipe(babel({
			presets: ['es2015', 'stage-0'],
			plugins: ['transform-es2015-modules-commonjs']
		}))
		.pipe(gulp.dest(PATH.dest));
});
```


## License

[MIT-LICENSE](https://github.com/azaviruha/gulp-literate/blob/master/LICENSE)

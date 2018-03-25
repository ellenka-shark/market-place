const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const spritesmith = require('gulp.spritesmith');
const merge = require('merge-stream');
const tinypng = require('gulp-tinypng');
const del = require('del');
const runSequence = require('run-sequence');

// gulp.task('hello',function (){
// 	console.log('hello world');
// });

gulp.task('autoprefixer', function(){
	gulp.src('src/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
});

gulp.task('sprite', function(){
	var spriteData = gulp.src('src/sprite/*.png').pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: 'sprite.css',
		imgPath: '../img/sprite.png'
	}));
	var imgStream = spriteData.img
		.pipe(gulp.dest('app/img/'));
	var cssStream = spriteData.css
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('app/css/'));
	return merge(imgStreem, cssStreem);
});

gulp.task('tinypng', function(){
	return gulp.src([
		   'src/img/**/*.jpg',
		   'src/img/**/*.png'
		])
		.pipe(tinypng('Anr1TMUGo_dj8T3yUFTeZbpx1l4OBc9N'))
		.pipe(gulp.dest('app/img'));
});

gulp.task('del', function(){
	return del([
			'src/img/**/*.jpg',
			'src/img/**/*.png'],
			{force: true})
			.then(paths => {
				console.log('Deleted: ', paths.join('\n'));
			});
});

gulp.task('minify', function(){
	runSequence('tinypng', 'del');
});

gulp.task('watch', ['autoprefixer'], function(){
	gulp.watch('src/css/**/*.css', ['autoprefixer']);
	gulp.watch('src/sprite/*.png', ['sprite']);
});

gulp.task('default', ['watch']);

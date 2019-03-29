var gulp = require('gulp'),					// Підключаемо Gulp
	less = require('gulp-less'),			// Підключаемо Less пакет
	browserSync = require('browser-sync');	// Підключаємо Browser Sync
	

// gulp.task('mytask', function() {
// 	console.log('Привіт, я таск!');
// });

// gulp.task('mytask', function () {
// 	return gulp.src('source-files')		// Вибірка вихідних файлів для обробки плагіном
// 		.pipe(plugin())					// Виклик Gulp плагіна для обробки файла
// 		.pipe(gulp.dest('folder'))		// Вивід результуючого файла в папку призначення (dest - пункт призначення)
// })

// gulp.task('less', function () {
// 	return gulp.src('app/less/main.less')		// Вибірка вихідних файлів для обробки плагіном
// 		.pipe(less())							// Виклик Gulp плагіна для обробки файла
// 		.pipe(gulp.dest('app/css'))				// Вивід результуючого файла в папку призначення (dest - пункт призначення)
// })

// gulp.task('less', function(){
// 	return gulp.src('app/less/**/*.less')	// Беремо всі less файли з папки less і дочірніх, якщо такі будуть
// 		.pipe(less())
// 		.pipe(gulp.dest('app/css'))
// });

// gulp.task('less', function() {						// Створюємо таск "less"
// 	return gulp.src('app/less/**/*.less')			// Беремо всі less файли з папки less і дочірніх, якщо є
// 		.pipe(less())								// Перетворюємо Less в CSS за допомогою gulp-less
// 		.pipe(gulp.dest('app/css'))					// Вивантажуємо результат в папку app/css
// 		.pipe(browserSync.reload({stream: true}))	// Оновлюємо CSS на сторінці при зміні
// });

gulp.task('less', function() {					// Створюємо таск "less"
	return gulp.src('app/less/**/*.less')		// Беремо всі less файли з папки less і дочірніх, якщо є
		.pipe(less())							// Перетворюємо Less в CSS за допомогою gulp-less
		.pipe(gulp.dest('app/css'))				// Вивантажуємо результат в папку app/css
		.pipe(browserSync.reload({stream: true})) // Оновлюємо CSS на сторінці при зміні
});

gulp.task('scripts', function() {
	return gulp.src([													// Беремо всі необхідні бібліотеки у вигляді масиву
			'app/libs/jquery/dist/jquery.min.js',						// Беремо jQuery
			'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'	// Беремо Magnific Popup
		])
		.pipe(concat('libs.min.js'))									// Збираємо їх до купи у новому файлі libs.min.js
		.pipe(uglify())													// Стискаємо JS файл
		.pipe(gulp.dest('app/js'));										// Вивантажуємо в папку app/js
});

gulp.task('css-libs', ['less'], function() {
	return gulp.src('app/css/libs.css')		// Вибираємо файл для мініфікації
		.pipe(cssnano())					// Стискаємо
		.pipe(rename({suffix: '.min'}))		// Додаємо суфікс .min
		.pipe(gulp.dest('app/css'));		// Вивантажуємо в папку app/css
});

gulp.task('browser-sync', function() {	// Створюємо таск browser-sync
	browserSync({						// Виконуємо browser Sync
		server: {						// Визначаємо параметри сервера
			baseDir: 'app'				// Директорія для сервера - app
		},
		// Відключаємо повідомлення зовнішнього ресурсу
		notify: false
	});
});

// gulp.task('watch', function() {
// 	gulp.watch('app/less/**/*.less', ['less']); // Нагляд за less файлами, де через кому вказується масив тасків, що будуть виконуватись
// 	// Нагляд за іншими типами файлів
// });

// gulp.task('watch', ['browser-sync', 'less'], function() {
// 	// Нагляд за less файлами
// 	gulp.watch('app/less/**/*.less', ['less']);
// 	// Нагляд за іншими типами файлів
// });

gulp.task('clean', function() {
	return del.sync('dist');					// Видаляємо папку dist перед збіркою
});

gulp.task('clear', function() {
	return cache.clearAll();					// Будемо прописувати виключно вручну при необхідності очистки кешу
});

// gulp.task('img', function() {
// 	return gulp.src('app/img/**/*')	// Беремо всі зображения з app
// 		.pipe(imagemin({			// Стискаємо їх з найкращими налаштуваннями
// 			interlaced: true,
// 			progressive: true,
// 			svgoPlugins: [{removeViewBox: false}],
// 			use: [pngquant()]
// 		}))
// 		.pipe(gulp.dest('dist/img')); // Вивантажуємо на продакшен
// });

gulp.task('sprite', function () {
	var spriteData = gulp.src('app/img/sprite/*.png').pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: 'sprite.css'
	}));
	return spriteData.pipe(gulp.dest('app/img/sprite'));
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*') // Беремо всі зображения з app
		.pipe(cache(imagemin({		// Стискаємо їх з найкращими налаштуваннями з врахуванням кешування
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img')); // Вивантажуємо на продакшен
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts', 'sprite'], function() {
	gulp.watch('app/less/**/*.less', ['less']);			// Нагляд за less файлами у папці less
	gulp.watch('app/*.html', browserSync.reload);		// Нагляд за HTML файлами у корені проекта
	gulp.watch('app/js/**/*.js', browserSync.reload);	// Нагляд за JS файлами у папці js
});

gulp.task('default', ['watch']);

gulp.task('build', ['clean', 'img', 'less', 'scripts'], function() {

	var buildCss = gulp.src([					// Переносимо CSS стилі в продакшен
		'app/css/main.css',
		'app/css/libs.min.css'
		])
	.pipe(gulp.dest('dist/css'))

	var buildFonts = gulp.src('app/fonts/**/*')	// Переносимо шрифти в продакшен
	.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src('app/js/**/*')		// Переносимо скріпти в продакшен
	.pipe(gulp.dest('dist/js'))

	var buildHtml = gulp.src('app/*.html')		// Переносимо HTML в продакшен
	.pipe(gulp.dest('dist'));

});
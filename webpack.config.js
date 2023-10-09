const path = require('path');

module.exports = {
  entry: './src/script.js',  // Ваш главный входной файл
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),  // Папка для собранного бандла
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Расширение файлов, которые будут обрабатываться
        use: [
          'style-loader',  // Создает стили из строк внутри файлов
          'css-loader',    // Преобразует CSS в модуль JavaScript
          'sass-loader'    // Компилирует Sass/SCSS в CSS
        ]
      },
    ],
  },
};
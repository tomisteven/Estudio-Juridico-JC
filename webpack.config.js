const path = require('path');

module.exports = {
  entry: './src/index.js', // Archivo de entrada principal de tu aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    filename: 'bundle.min.js', // Nombre del archivo de salida minificado
  },
  mode: 'production', // Modo de producción para habilitar la minificación

    module: {
        rules: [
            {
                test: /\.js$/, // Busca todos los archivos con extensión .js
                exclude: /node_modules/, // Ignora la carpeta node_modules
                use: {
                    loader: 'babel-loader', // Utiliza el loader de Babel
                    options: {
                        presets: ['@babel/preset-react'] // Utiliza los presets recomendados para React
                    }
                }
            },
            {
                test: /\.css$/, // Busca todos los archivos con extensión .css
                use: ['style-loader', 'css-loader'] // Utiliza los loaders correspondientes
            },
            {
                test: /\.(png|svg|jpg|gif|webp)$/, // Busca todos los archivos con extensión de imagen
                use: ['file-loader'] // Utiliza el loader de archivos
            }
        ]
    }
};

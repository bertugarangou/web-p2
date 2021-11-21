# web-p2
´"scripts": {
    "build": "npm run delete && npm run deletefolder && npm run createfolder && npm run minifier && npm run copymedia && npm run copyfont && npm run cssmini && npm run cssmini-normalize && npm run jsmini2 && npm run jsmini1 && npm run checklinks",
    "start": "node app.js",
    "deletefolder": "Rmdir /S/Q .\\dist",
    "copyfont": "xcopy /i/s/r/h/y .\\src\\webfont\\ .\\dist\\webfont",
    "createfolder": "mkdir .\\dist\\js\\pages",
    "delete": "del /s/q dist",
    "checklinks": "npx check-html-links dist",
    "cssmini": "html-minifier --input-dir .\\src\\css\\pages --output-dir dist\\css\\pages --file-ext css --remove-comments --collapse-whitespace --minify-js true --minify-css true",
    "cssmini-normalize": "html-minifier --input-dir src\\css --output-dir dist\\css --file-ext css --remove-comments --collapse-whitespace --minify-js true --minify-css true",
    "jsmini1": "uglifyjs .\\src\\js\\pages\\index.js -o .\\dist\\js\\pages\\index.js",
    "jsmini2":"uglifyjs .\\src\\js\\pages\\form.js -o .\\dist\\js\\pages\\form.js",
    "minifier": "html-minifier --input-dir src --output-dir dist --file-ext html --remove-comments --collapse-whitespace --minify-js true --minify-css true",
    "copymedia": "xcopy /i/s/r/h/y .\\src\\media\\ .\\dist\\media"
  },´

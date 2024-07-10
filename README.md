# siparis_uygulamasi
In self-service restaurants, the order numbers are entered manually and with this application shows them on the screen as prepared.</br>

Note: Your computer must have node and npm packages.</br>
## Firstly open a terminal in project file and run this command
-npm init -y</br>
-npx electron-packager . myapp --platform=win32 --arch=x64 --out=dist</br>
-npm install electron-packager --save-dev</br>
-npm run package-win</br>

Note: package.json file must be include this part</br>
"main": "src/main.js",</br>
"scripts": {</br>
    "start": "electron .",</br>
    "package-win": "electron-packager . siparis-uygulamasi --platform=win32 --arch=x64 --out=dist --overwrite"</br>
}</br>

## After that run this commands

-npm start</br>

In project files these command create a dist file and include exe file. </br>
You can easily start application with siparis-uygulamasi.exe

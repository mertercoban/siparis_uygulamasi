# siparis_uygulamasi
In self-service restaurants, the order numbers are entered manually and with this application shows them on the screen as prepared.

Note: Your computer must have node and npm packages.
## Fisrtly open a terminal in project file and run this command
-npm start

Note: package.json file must be include this part
"scripts": {
    "start": "electron .",
    "package-win": "electron-packager . siparis-uygulamasi --platform=win32 --arch=x64 --out=dist --overwrite"
}

## After that open a terminal in project file and run this commands
-npm install electron-packager --save-dev
-npm run package-win

In project files these command create a dist file and include exe file. 
You can easily start application with siparis-uygulamasi.exe

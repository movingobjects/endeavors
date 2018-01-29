#!/usr/bin/env bash

# Vars
APP_TITLE="Endeavors"
APP_PLATFORM="win32"
APP_ARCH="x64"
PLATFORM_NAME="Windows"
ZIP_FILENAME="$(date +%Y-%m-%d)-endeavors-win.zip"

# Start
echo "Packaging '$APP_TITLE' for $PLATFORM_NAME..."
echo "NOTE: This must be run using Wine application or it won't work"
echo

# Build source
echo "Building source..."
rm -rf app/build/*
webpack --config config/webpack.electron.prod.js

# Package Electron App
echo "Packaging Electron app..."
electron-packager . "$APP_TITLE" --out=packages --overwrite --platform=$APP_PLATFORM --arch=$APP_ARCH

# Zip it up
echo "Creating package zip file..."
cd packages
zip -r "$ZIP_FILENAME" "$APP_TITLE-$APP_PLATFORM-$APP_ARCH"
rm -rf "$APP_TITLE-$APP_PLATFORM-$APP_ARCH"
cd ..

# Complete
echo
echo "Package ready: 'packages/$ZIP_FILENAME'"
echo

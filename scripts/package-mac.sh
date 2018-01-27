#!/usr/bin/env bash

# Vars
APP_TITLE="Endeavors"
APP_PLATFORM="darwin"
APP_ARCH="x64"
PLATFORM_NAME="macOS"
ICON_PATH="app/src/icons/app-icon.icns"
ZIP_FILENAME="$(date +%Y-%m-%d)-endeavors-mac.zip"

# Start
echo "Packaging '$APP_TITLE' for $PLATFORM_NAME..."

# Build source
echo "Building source..."
rm -rf app/build/*
webpack --config config/webpack.electron.prod.js

# Package Electron App
echo "Packaging Electron app..."
electron-packager . "$APP_TITLE" --out=packages --overwrite --platform=$APP_PLATFORM --arch=$APP_ARCH --icon=$ICON_PATH

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

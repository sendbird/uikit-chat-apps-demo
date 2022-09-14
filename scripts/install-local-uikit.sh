echo "working";
# change this to be where you have the UIKit source code. You will neen to build that code with npm run build.
UIKIT_LOCATION=/Users/jamesrobertson/Code/sendbird-uikit-react
rm -fr node_modules
npm install
APP_LOCATION=$(pwd)
echo $APP_LOCATION
rm -fr node_modules/@sendbird/uikit-react/*
cd ${UIKIT_LOCATION}
rm -fr dist
npm run build
cp -R dist/* ${APP_LOCATION}/node_modules/@sendbird/uikit-react/
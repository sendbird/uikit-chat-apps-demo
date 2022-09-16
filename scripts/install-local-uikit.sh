if [ $# -eq 0 ]
  then
    echo "Please suply location of UIKit as first argument"
fi
UIKIT_LOCATION=$1
rm -fr node_modules
npm install
APP_LOCATION=$(pwd)
echo $APP_LOCATION
rm -fr node_modules/@sendbird/uikit-react/*
cd ${UIKIT_LOCATION}
git pull origin uikit-apps
rm -fr dist
npm run build
cp -R dist/* ${APP_LOCATION}/node_modules/@sendbird/uikit-react/
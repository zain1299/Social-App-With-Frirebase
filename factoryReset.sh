echo **************** cleaning gradlew ******************
cd android && ./gradlew clean
cd ..

watchman watch-del-all
rm -rf /tmp/metro-*


echo **************** deleting node_modules ******************
rm -rf node_modules yarn.lock package-lock.json

echo **************** downloading node_modules ******************
yarn install

echo **************** cache clean ******************
sudo npm cache clean -f

echo **************** react-native link ******************
sudo npx react-native link

echo **************** react-native run-android ******************
npx react-native run-android

echo **************** run server ******************
sudo yarn start --reset-cache
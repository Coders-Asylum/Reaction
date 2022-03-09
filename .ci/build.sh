#!bin/sh

echo "Building Apps started"

# build employee info app
echo "Building Employee Info App"

cd ./employee-info
npm run build

ls -l

cd ..

# building sample app
echo "Building sample app"
cd ./sample
npm run build
cd ..
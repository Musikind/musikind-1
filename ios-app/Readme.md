# Musikind 

Here are steps to setup the project. 
## Setup Project
Launch terminal and open Project/ios-app in terminal using 

    cd <project root>/ios-app

## Add npm depandency 
On terminal type 

    npm install
Above command will install node depandency. 

## Add Platform 
One need to add platform to run the project. Use following steps to setup ios platform using terminal

    cd <project root>/ios-app

Now type    

    ionic cordova platform add ios

followed by  `ionic serve`


## Adding splash to iOS Project
Once platform has been created, it's splash image needs to update. For the convienence all the splash with json file is copied to `ios-app/splash-resources/` this needs to copy to `<project root>/ios-app/platform/ios/musikind-ios-app/Images.xcassets/LaunchImage.launchimage` in order to set splash. This can be done using following terminal command     

    cp -a ios-app/splash-resources/ ios-app/platforms/ios/musikind-ios-app/Images.xcassets/LaunchImage.launchimage/

Now run the project by double clicking on `/ios-app/platform/ios/musikind-ios-app.xcworkspace`

In Xcode select different device tablet emulator and see app running. 

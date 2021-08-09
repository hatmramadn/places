# How to run the app

1. Clone the project

```
git clone https://github.com/hatmramadn/places.git
```

2. Install dependencies

```
cd places

# Using yarn
yarn install

# Using npm
npm install
```
3. Run the app

```
# Using yarn
yarn ios
yarn android

# Using npm
npm run ios
npm run android
```
# Application plan and code structure
Application is following react native boiler plate structure. All of the code will be placed in a  `src`  folder and all of the dependencies will be placed in  `package.json`  file.

# Application API 
Repo https://github.com/hatmramadn/places-api
Live https://places-lean-node.herokuapp.com

## Contents of "src" folder
src folder contains the core code of the app. it is going to follow the following convention

-   `assets`  this folder is going to contian all of the assets of the application which are primarily images and videos in the app.
    
-   `components`  this contains the generic components in the application. such as
    
    -   buttons
    -   headers
    -   Inputs
    -   and any associated screens components like Place component.
    
    and all of the content that is generically being used in the app will be placed here.
    
-   `config`  During the startup and at some other places, the application may require some configuration functions such as setting default headers, etc. 
    
-   `screens`  All of the application screens are going to be placed here as per the app flow. the authentication screens will be placed in the  `auth`  folder, etc.
    
-   `navigation`  this folder contains app navigators
    
-   `utils`  this folder contains utility functions

-   `constants`  this folder contains all app constant like colors, images, routeNames
    
-   `App.js`  This is the application's root file from where, the application is going to start.

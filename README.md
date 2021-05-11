# MOBILTELEFONER

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Start Unit test 

```
npm run test -- --collectCoverage
```

### Project (Route URLs)

````
http://localhost:8080/#/
- This route will lead you to the landing page

http://localhost:8080/#/phones
- This route will redirect to List of brand page

http://localhost:8080/#/phones/apple
- This route will redirect to individual brand phone list

http://localhost:8080/#/404
- This route will redirect to 404 Page
````

### Features

- Sorting with name [ASC/ DESC]
- Vue-router
- Vuetify
- webpack
- Vuex
- ES6
- sass
- Unit test

## Accomplishment Task

#### JS
- Add button which sorts phones or phone brands alphabetically
- Add filtering for phones or phone brands by any parameters (displayName, price etc.). On page load use url query parameters to get filters 
   (?brand=Doro) (brand detail route)`
- Add favorite button which save phone or phone brand in memory. Saved selections should be marked even after website reload
- Plug in any state management tool (vuex)

#### Styling and HTML
- Animation added
- Use custom font
- sass methodology
- Vuetify library to make it more seo friendly

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run eslint -- --fix
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
```

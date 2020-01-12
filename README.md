# todo-list

## Project setup
- Create a file and name it src/plugins/firebase-config.js
- The file's content should look something like:
```
const firebaseConfig = {
  apiKey: "AIzaSyC7xs8WrY7H7LeXloyJcPSiMYIdayU89lU",
  authDomain: "todo-list-vue-app.firebaseapp.com",
  databaseURL: "https://todo-list-vue-app.firebaseio.com",
  projectId: "todo-list-vue-app",
  storageBucket: "todo-list-vue-app.appspot.com",
  messagingSenderId: "22218030617",
  appId: "1:22218030617:web:9240995fe6fc6840"
};

export default firebaseConfig;
```

- Then run:
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


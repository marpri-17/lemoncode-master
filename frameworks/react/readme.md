# React final exercise

Based on [basic list demo app](https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/04-frameworks/01-react/04-basic-app/03-list) from lemoncode.

### React basic

Minimun requeriments:

- "Lemoncode" organization members will be display by default after login page.
- Github view must have a text input and a button for change organization name and fetch members.
- During navigation between list and detail, input must save last value.

A basic implementation of this requeriments can be found at `react_basic` folder. Input value it's saved at local storage who manage data retrieve at list component. It also implements _pods_ base arquitecture.

###### How to run

Download source code and go to folder root with cmd command `cd react_basic` and install dependencies with `npm install`. Run it with `npm start`.

### React advanced

Based on react basic exercise, folder `react_advanced` contains same react application with some improvements:

- Added support for _sass_, _react material components_, _use-debounce_ for manage delayed text filtered searchs.
- Added a context to manage last saved value at text input. Local storage will be used for save and display last value used. If it is the first time, "lemoncode" should be display.
- Added second scene for display material list of Rick & Morty series character's. Text input does not have search button, it will be automatically filter the server results using input value independently if it's parcial or complete match, and using `use-debounce`. Results are paginated.
- Rick & Morty character's name value will be saved if we navigate to detail and get back to list using `React context` utilities

###### How to run

Download source code and go to folder root with cmd command `cd react_advanced` and install dependencies with `npm install`. Run it with `npm start`.

> :key: User / password: `admin / test`

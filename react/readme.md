# React and redux:

Angular vs react vs VueJS:

Large app like bank - Angular, since its a framework.
Strong developer, felxibility, creative - React Js (lib)
Freindly and easy for junior devs - Vue Js (lib)

React:  

ditrubution of components:  
atom -> molecule -> organisam -> template -> page  

one way flow (rendering).  
virutual DOM.  
Large Eco system ()  

Build first app:

```
npx create-react-app my-app
cd my-app
npm start
```

## class vs functional component


## Hooks vs Classes


## mounting
- constructor()
- ComponentWillMount()
- Render()
- ComponentDidMount()

## updating

- ComponentWillReciveProps()
- ShouldComponentUpdate()
- ComponentWillUpdate()
- render()
- ComponentDidUpdate()

## unmounting

- ComponentWillUnmount()

props
children
state

## Hooks:

 const [stateVar, setStateVar] = useState()
useEffect(() => {}, [])

## redux

- Good for managing large state.
- useful for sharing between containers.
- pridictable state management three principal
    - single source of truth.
    - state is readonly.
    - Changes using pure functions.
- action->reducer->store->make changes

Flux pattern

action->dispatcher->store->view

Redux toolkit

## Lib for react:
- Ramda (functional programme)
- lodash (utility)
- glamorous (css)
- styled component (css)
- css modules (css)

- Gatsby (static web site)
- nextjs (server side rendering)
- material UI (component)
- semantic UI (component)

- Reselect (selector)
- redux-saga (redux thung like, asnyc)
- immutablejs (state in imutable)

## Module bundler:
- parcel (zero config)
- webpack
- rollup.js (tree shake)

## github pages:

https://github.com/gitname/react-gh-pages

npm i --save-dev gh-pages

add homepage: http://{username}.github.io/{repo-name}

script command:

predeploy: "npm run build"
deploy: "gh-pages -d build"

then run:
npm run deploy

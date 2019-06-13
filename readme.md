# How to Run this App
  * Clone repository.
  * Run `npm install` or `yarn install`.
  * See the package.json for scripts.
  * Run `npm test` or `yarn test`.
  * Serve `index.html` using `live-server` or similar!

# Requirements
We need `node` & `npm`. VSCode's `eslint` extension is recommended. Command line commands are run inside the project folder. This guide uses npm but should work the same using yarn.

# Objectives
  * Learn `promise.finally()`.
  * Learn `Promise.all()`.
  * Learn `POST`, `PUT`, `DELETE`.
  * Learn about preflight requests and `CORS`.
  * Learn to organize endpoints in `Postman`.
  * Learn `ref`s in `React`.

# Steps
  * Fix the `fetchPerson` request.
  * Show our `GET` in action in Chrome Devtools Network tab.
  * Show how to see different details of the request on the Network Tab.
  * Teach `promise.finally()` and clean up `setPerson` and `setError`.
  * Teach `Promise.all()` and use it to fetch two people. (Stretch?)
  * Implement `setPeople` so we concatenate the two people to `this.state.people`.
  * Show each new endpoint on `mockable.io`.
  * Make each new endpoint work on `Postman`.
  * Implement `postNewPerson`, `putPerson`, `deletePerson`.
  * Dry code.
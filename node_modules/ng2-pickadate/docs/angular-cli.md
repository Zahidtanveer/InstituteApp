
# Angular CLI Configuration
`Angular-CLI` is a CLI for making Angular 2 applications. In order to integrate `ng2-pickadate` into a CLI project we must install the ng2-pickadate and it's dependencies using NPM and bind them to the NgModule..

Due to the change of the build system from SystemJS to Webpack, you have to use the latest version of angular-cli. Please [follow the steps](https://github.com/angular/angular-cli/wiki/Upgrading-from-Beta.10-to-Beta.14) given by the angular-cli team.

## Installation
`npm install ng2-pickadate --save`

## Module-Binding
The PickadateModule must be placed in an Angular 2-AppModule; afterwards it can be used with the `<ng2-pickadate>` -tag.

```js
import { PickadateModule } from 'ng2-pickadate/ng2-pickadate';

@NgModule({
    imports: [
        ...
        PickadateModule
    ],
    ...
})
export class AppModule {
}

```
### JQuery
If jQuery is not defined provide it using:

```js
window['$'] = require('jquery/dist/jquery');
```
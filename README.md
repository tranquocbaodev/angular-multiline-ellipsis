
# Angular Ellipsis

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

A simple lightweight library for [Angular][angular] which removes excess text and add ellipsis symbol to end of text before text overflows container.

This is a simple library for [Angular][angular], implemented in the [Angular Package Format v6.0](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit#heading=h.k0mh3o8u5hx).


## Install

`npm i angular2-multiline-ellipsis --save`

`app.module.ts`
```ts
import { MultilineEllipsisModule } from 'angular2-multiline-ellipsis';

@NgModule({
  imports: [
    MultilineEllipsisModule
  ]
})
export class AppModule { }
```


## Example

`app.component.html`

```html
<p class="foo" appEllipsis>
  ...
</p>
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Making Commits

This repo uses [Commitizen CLI][commitizen] and [Conventional Changelog][conventional-changelog] to create commits and generate changelogs. Instead of running `git commit` run `git cz` and follow the prompts. Changelogs will then be generated when creating new releases by running `npm run release`.

## Making Releases

Run `npm run release` to create a new release. This will use [Standard Version][standard-version] to create a new release. [Standard Version][standard-version] will generate / update the changelog based on commits generated using [Commitizen CLI][commitizen], update the version number following semantic versioning rules and then commit and tag the commit for the release. Simply run `git push --follow-tags origin master`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

[angular]: https://angular.io/
[commitizen]:http://commitizen.github.io/cz-cli/
[commitizen-badge]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[conventional-changelog]:https://github.com/conventional-changelog/conventional-changelog
[standard-version]:https://github.com/conventional-changelog/standard-version

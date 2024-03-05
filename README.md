[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/nI5FEF1W)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=14076200)
# MyFirstAngularProject

This project will be generated with [Angular CLI](https://github.com/angular/angular-cli).

## Steps

### Setup your machine for Angular development
> [!NOTE]
> **These steps are not needed on a lab PC - you ONLY need them on your own machine/laptop**  
> **Skip to [Create your Angular project](#create_project) if you are on a lab PC**

1. Install Git from https://git-scm.com/downloads
2. You should also install a GUI client for Git from https://git-scm.com/downloads/guis  
   2.1. GitHub Desktop https://desktop.github.com/  
   2.2. Git extensions https://gitextensions.github.io/  
   2.3. TortoiseGit https://tortoisegit.org/  
3. Install Visual Studio Code from https://code.visualstudio.com/download
4. Install the LTS version of Node from https://nodejs.org
5. Upgrade NPM  
 - On Windows start a CMD (Command Prompt) with Run as Administrator  
 ```shell
 powershell Set-ExecutionPolicy Unrestricted -Scope CurrentUser –Force
 npm install --global --omit=dev npm-windows-upgrade
 npm-windows-upgrade --npm-version latest
 ```  
 - On *nix (macOS, Linux)
 ```shell
 sudo npm install -g npm@latest
 ```
6. Install the Angular CLI globally  
 - On Windows start a CMD (Command Prompt) with Run as Administrator (you can reuse the one you already have)
 ```shell
 npm install -g @angular/cli
 ```
 - On *nix (macOS, Linux)
 ```shell
 sudo npm install -g @angular/cli
 ```
### <a name="create_project">Create your Angular project</a>
Open a shell prompt (CMD on Windows / shell on *nix - macOS, Linux) and navigate to a directory where you have rights to create directories.  
Here you can create your project by issuing the following command:
```shell
ng new MyFirstAngularProject
```
You should answer **Y** at the following prompt to choose Angular routing:
```shell
? Would you like to add Angular routing? (y/N)
```
Because for Ionic we will be using **SCSS**, you should select SCSS as the stylesheet format at the following prompt - using UP/DOWN arrows and pressing ENTER:
```shell
? Which stylesheet format would you like to use?
  CSS
> SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less   [ http://lesscss.org                                             ]
```
Wait until the initial project is configured and the necessary packages are downloaded and installed in the project.  
Change the current directory to your project directory.
```shell
cd MyFirstAngularProject
```
#### Prepare your project to checkout the github assignment on top of the newly created project
Remove the .git directory so that you could checkout the assignment from github and be able to track your project on github
- On Windows if using CMD (Command Prompt)
```shell
rmdir /Q /S .git
```
- On Windows if using PowerShell
```shell
rm -recurse -force .git
```
- On *nix (macOS, Linux)
```shell
rm -rf .git
```
#### Checkout the github assignment on top of the newly created project
Following commands need to be executed in the shell from the project directory. After the last command you will have the **LICENSE** and **README.md** file from the assignment, togehter with some starter project files that will owerrwrite the existing files.
> Initialize the local repo
```shell
git init
```
> Set the online repo
```shell
git remote add origin <your-git-repo-URL>
```
> Get the data from the online repo
```shell
git fetch
```
> Reset the local repo so that it will allow existing files
```shell
git reset --mixed origin/main
```
> Rename the "master" branch to "main" as this is the name we are using on github.
```shell
git branch -m main
```
> Setup the local "main" branch to track "origin/main" from the github repo
```shell
git branch --set-upstream-to=origin/main main
```
> Checkout the files from the github repo and owerwrite any local files with the same name as in the online repo
```shell
git checkout -- .
```
#### Add all the files from the newly created project and commit to the github repository's main branch
Following commands need to be executed in the shell from the project directory.
> Add all the local files that are not tracked to the repo
```shell
git add --all
```
> Commit all the changes
```shell
git commit -m "My first commit"
```
> Upload the changes to the online repo
```shell
git push origin main
```
#### Continue to work on your project
> [!NOTE]
> Now your project is linked to your assignment and any modifications can be tracked and versioned

In this simple project we will explore the basics of Angular, covering the following concepts:
- Creating components
- Communication with components (input/output parameters)
- Using forms
- Routing and Navigation
- Retrieving data from an API using HttpClient

The application will have:
- a main page
- a page to calculate the sum of two numbers - using a form
- a page that will show the list of countries - with data retrieved from an API

**Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.**

### Clean your project
First let's empty the `src/app/app.component.html` file, leaving only the line with `<router-outlet></router-outlet>`  

From the assignment repo you also received a un updated `src/index.html` containing the link to the Google Material Icons styles and a `src/styles.scss` file with some CSS classes defined for you.

Whenever we create a new component using the `ng generate component <component_name>` command, this will also include those components in module's `declarations` array of the `src/app/app.module.ts` file, so we will not have to do that manually.

### Create a component that will be displayed as a header of the application
Let's create a new component that will be used to show our application's title and a menu.
```shell
ng generate component components/top-bar
```
### Create a component to calculate the sum of two numbers
Let's create a new component that will be used to calculate the sum of 2 numbers using a from.
```shell
ng generate component components/calc
```
### Create a component to show the list of countries
Let's create a new component that will be used to display information about the countries from all over the world..
```shell
ng generate component components/country-list
```
### Add the new components to your routing
> [!NOTE]
> If you are using **NgModule**
In `src/app/app-routing.module.ts` import the new components that will be used as navigation targets and add them to the `routes` array:
```ts
// Other code
import { CalcComponent } from './components/calc/calc.component';
import { CountryListComponent } from './components/country-list/country-list.component';

const routes: Routes = [
  { path: 'calc', component: CalcComponent },
  { path: 'country-list', component: CountryListComponent },
];
// Other code
```
If you want to *Lazy Load* these *feature components* then please consult https://angular.io/guide/lazy-loading-ngmodules

> [!NOTE]
> If you are using **Standalone**  
In `src/app/app-routes.ts` lazy load the new components that will be used as navigation targets and add them to the `routes` array:
```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'calc',
        loadComponent: () => import('./components/calc/calc.component')
            .then(m => m.CalcComponent)
    },
    {
        path: 'country-list',
        loadComponent: () => import('./components/country-list/country-list.component')
            .then(m => m.CountryListComponent)
    },
];
```

**Allways save all the modified files!!!**

Now for example you can navigate to http://localhost:4200/calc to display the new Calculate component.

### Update the modules that we will be using in our app
> [!IMPORTANT]
> If you are using **Standalone** then you will **need** to import the required modules in each **Standalone component** there is no **global** `app.module.ts`
> So the code below is **ONLY** for **NgModule** based projects

To be able to implement the required functionality we will need some additional modules:
- FormsModule
- ReactiveFormsModule
- HttpClientModule

So for this we will need to update the `src/app/app.module.ts` file by including the modules and declaring them in the `imports` array:
```ts
// Other imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  // Other elements
  imports: [
    // Other imports
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // Other elements
})
// Other code
```
### Now let's implement the TopBar component
Here we will show our application title and some links to our components/pages

> [!TIP]
> For **Standalone** components you need to add **RouterModule** to the **imports** array in the `@Component` section in `src/app/components/top-bar/top-bar.components.ts` and import it.

Update `src/app/top-bar/the top-bar.component.html` replacing the existing code with the following:
```html
<a [routerLink]="['/']">
    <h1>My First Angular App</h1>
</a>

<a class="button" routerLink="calc"><em class="material-icons">calculate</em>Calculate</a>
<a class="button" routerLink="country-list"><em class="material-icons">flag</em>Countries</a>
```

Now let's include this component in our application. Replace the content of `app.component.html` with the following code:
```html
<app-top-bar></app-top-bar>
<router-outlet></router-outlet>
```
> [!TIP]
> For **Standalone** components you need to add **TopBarComponent** to the **imports** array in the `@Component` section in `src/app/app.component.ts-bar.components.ts` and import it.

The `<app-top-bar></app-top-bar>` is how we specify that we want our component to be included in that place.

### Next let's implement the calculation component
Here we will be using a Form to allow the user to input the 2 numbers to be summed.  
So we need 2 input fields, a result field and a button to generate the sum.

One possible implementation is the following:  
Replace the code in `src/app/components/calc/calc.component.html` with:
```html
<form [formGroup]="calcForm" (ngSubmit)="onSubmit()">
    <div class="number">
        <label for="number1">
            Number 1
        </label>
        <input id="number1" type="number" formControlName="number1">
    </div>
    <div class="number">
        <label for="number2">
            Number 2
        </label>
        <input id="number2" type="number" formControlName="number2">
    </div>
    <div class="number">
        <label for="result">
            Result
        </label>
        <label>{{result}}</label>
    </div>  
    <button class="button" type="submit">Calculate</button>
</form>
```
Replace the code in `src/app/components/calc/calc.component.ts` with:
```ts
// Other code
export class CalcComponent {

  calcForm = this.formBuilder.group({
    number1: '',
    number2: '',
  });
  result: number = 0;

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    const number1 = Number(this.calcForm.get('number1')?.value);
    const number2 = Number(this.calcForm.get('number2')?.value);
    this.result = number1 + number2;
  }
}
```
**You will need to import `FormBuilder` from `@angular/forms`**  
> [!TIP]
> For **Standalone** component you need to add **FormsModule** and **ReactiveFormsModule** to the **imports** array in the `@Component` section in `src/app/components/calc/calc.components.ts` and import them.

Now try out the calculation functionality.

### Next let's implement the component to show the list of countries from an API
Here we will be using an API to get details about the countries from all over the world. The API we will be using is https://restcountries.com/.  
Actually we will be using just a subset of the available fields to minimize the data that is transferred over the internet: https://restcountries.com/v3.1/all?fields=name,flags,region,subregion,population,area,capital,currencies  
Please take a look at the output in a browser. You can take the output and fomat it using https://jsonformatter.org/ so that you have a better understanding of the objects.

Also, you can use https://app.quicktype.io/?l=ts to convert the JSON result into TypeScript types/interfaces.

### Next step is to define a **model** object or *interface* to the objects that are returned by the API.
```shell
ng generate interface models/country
```
Please update the `src/app/models/country.ts` file with the correct fields and define other interfaces as needed.  
**For the `name` field keep only the `common` and the `official` fields.**

### Define a new component to display the information about a country
Because we will have a list of countries shown in our application, it makes sense to have a special component that will know how to display the information about a country.  
So let's create one:
```shell
ng generate component components/country
```

We will use this component to show the official name and the flag of the country. For this we will send a country instance as a **country** parameter to the component.  
The component will expose an event (an output) so that we can react if someone clicks on a specific country. The event will emit the country object so that when we handle the event we receive that instance for processing.

One example implementation is the following:
Replace the code in `src/app/components/country/country.component.html` with:
```html
<div *ngIf="country" (click)="show()">
    <h3>{{country.name.official}}</h3>
    <!-- Please include other elements like the flag -->
</div>
```
Replace the code in `src/app/components/country/country.component.ts` with:
```ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from 'src/app/models/country';

// Other code
export class CountryComponent {
  @Input() country?: Country;
  @Output() onclick = new EventEmitter<Country>();

  show() {
    this.onclick.emit(this.country);
  }
}
```
> [!TIP]
> For **Standalone** component you need to add **NgIf** directive to the **imports** array in the `@Component` section in `src/app/components/contry/country.components.ts` and import it.

### Now let's display the list of countries
For this we will implement the `CountryListComponent`.
An example implementation would be the following:
Replace the code in `src/app/components/country-list/country-list.component.html` with:
```html
<app-country *ngFor="let country of countries" [country]="country" (onclick)="showDetails($event)"></app-country>
```
Replace the code in `src/app/components/country-list/country-list.component.ts` with:
> [!IMPORTANT]
> **Keep the code marked with // Other code - basically the @Component part AS IS** 
```html
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country';

// Other code
export class CountryListComponent implements OnInit {
  countriesUrl = "https://restcountries.com/v3.1/all";
  countries: Country[];

  constructor(private http: HttpClient) {
    this.countries = [];
  }

  ngOnInit(): void {
    this.getCountries().subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl)
  }
  
  showDetails(country: Country) {
    alert(country.name.official);
  }
}
```
> [!TIP]
> For **Standalone** component you need to add **NgFor** directive, the **CountryComponent** and the **HttpClientModule** to the **imports** array in the `@Component` section in `src/app/components/contry-list/country-list.components.ts` and import them.

This is a simplified implementation, just to show how you can access an API. The recommended way to do this is by using an Angular **service**.

So the next step would be to refactor this example and implement an Angular service to extract the interaction with the API to that service. **This is left as an exercise to you.**

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

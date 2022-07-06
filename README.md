## Laiye Chatbot

Provides an interface to a Laiye Chatbot instance from a Mendix application.

## Features

-   Creates an interface from your Mendix application to a Laiye Chatbot instance.
-   Allows you to pass custom variables and values across to the Chatbot instance

## Usage

-   Add widget to any layout that you want to provide a Chatbot instance through
-   Copy the token from the 'Integration' tab of the appropriate 'Laiye Widget' user channel,
    https://app.mindsay.com/channels?tab=client, and specify that in the Mendix widget
-   Define any custom variables you want to pass to the chatbot (**note:** variable names cannot include dashes).
    Variables can be one of two types:
    -   Expression: a value that is derived from an expression
    -   Attribute: a value that is derived from a String attribute

## Issues, suggestions and feature requests

https://github.com/lindski/aq-mx-laiyechatbot/issues

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing
   `npm -v`, execute: `npm install --legacy-peer-deps`.
2. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

# Project Starter

This is my starter template for Express-based web applications.

Rather than start from scratch every time that I want to build a new project, I decided to buy the bullet once and build the basic infrastructure that I can later build on top of.

This is the basic structure of the application template:

```text
.
├── README.md
├── app.js
├── bin
│   └── www
├── db.js
├── package-lock.json
├── package.json
├── public
│   ├── css
│   │   └── style.css
│   ├── images
│   └── javascripts
├── routes
│   ├── auth.js
│   ├── blog.js
│   ├── index.js
│   └── users.js
├── var
│   └── db
│       ├── projects.db
│       └── sessions.db
└── views
    ├── base.html
    ├── home.html
    ├── login.html
    └── signup.html
```

## What it does

The starter includes:

* A full local login system using [Passport.js](https://www.passportjs.org/) local strategies
  * Sign up
  * Log in
  * Log out
* A sample application using [SQLite](https://www.sqlite.org/index.html) and the [sqlite3](https://www.npmjs.com/package/sqlite3) Node Library
* Nunjucks templating

## TODO

There are a few things that are left to do before I call the template ready. I might get around them or I may not.

* Add one or more Passport log in strategies (thinking Google and GitHub)
  * May skip them because they require association with accounts in the respective systems so they would only be good for me.
* Flash messages with [connect flash](https://www.npmjs.com/package/connect-flash)

# Clubz

Mobile friendly club single page demo applications. Includes validation.

## Build

### Development

To run first start the server:

```
cd server
dotnet run
```

Then start the front end:

```
cd web
npm run install
npm run dev

```

You can then browse to `http://localhost:5173/` and run the project.

### Production

To build the front end for production so it is part of the .NET project do the following:jj

```
cd web
npm run build
npm run dev

```

## Debugging

### Front end

The easiest way to debug the front end is to use Chrome's dev tools. It is then possible to set breakpoints on the TypeScript files and use the debbugger accordingly.

![Debugging](debbugging.jpg "Debugging")

### Back End

To debug the back end just use your normal tools (Visual Studio, Rider etc).

## Bugs

Bugs / missing features.

1. Sometimes when a club is deleted it isn't immediately removed from the table display.
2. The page title doesn't update.
3. The pager isn't enabled. It is included to make the buttons align properly!

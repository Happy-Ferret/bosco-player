### Bosco Player ###

Gtk application written with TypeScript

Right now, this is just a gui shell that displays autovala values

I started out using CoffeeScript. But the rich type information available in Gir calls out for Typescript.

### build

I use vscode. ctrl-b to build, f5 to run

or 'tsc' to build from command line
### install

this doesn't use the autogen style install recomended by gnome.
it's a typescript app, and has a custom install script.

```
git clone git@github.com:darkoverlordofdata/bosco-player.git
cd bosco-player
npm install
tsc 
./install
```
#### gjs issues
@see http://stackoverflow.com/questions/18947442/what-is-imported-using-the-gjs-imports-statement

unfortunately, this is mostly missing or undefined:

const _ = imports.gettext.gettext

imports.ui.* -> /usr/share/cinnamon/js/ui/*
imports.misc.* -> /usr/share/cinnamon/js/misc/*
imports.[cairo, dbus, format, gettext, jsUnit, lang, promise, signals] -> /usr/share/gjs-1.0/


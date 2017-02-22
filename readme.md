### Bosco Player ###

Gtk application written with CoffeeScript

right now, just a gui shell that displays autovala values


Bosco Player will? 
* manage component definitions (entitas.json)
* organize assets and update the resource xml - look at grrr.js
* edit .desktop file
* select icon
* start in debugger
* rebuild autovala
* rebuild code


Future?
* profile while running the game (see ts version of entitas)
* manage entity definitions
* adjust pool sizes
* scripting

### build

I use vscode. ctrl-b to build, f5 to run
or...

If I can use coffeescript, I can use es6!
but coffeescript is shebang friendly, and es6 translation is not.

```
tsc -p ./jsconfig.json
```

### install

this doesn't use the autogen style install recomended by gnome.
it's a coffeescript app, and uses a Cakefile for installation.

```
npm install -g coffeescript
git clone git@github.com:darkoverlordofdata/bosco-player.git
cd bosco-player
npm install
tsc -p ./jsconfig.json
./install
```

### gjs + coffeescript + tsc

compile coffeescript to javascript, then
use tsc to ensure es5 compatible and packege up with dependencies.

Cakefile to manage installation

The result is sort of like a webpack or browserify bundle.
Uses amd compatible module definitions.


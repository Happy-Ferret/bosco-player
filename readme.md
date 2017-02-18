### Bosco Player ###

Bosco Player should provide a gui to 
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

### gjs - inheriting gobject
Prefer composition over inheritance.

We could use Lang.Class to proxy Gtk framework objects
I think this makes the code less clear, due to the non-standard inheritance syntax
I also don't like inheriting big framework objects, especially poorly documented ones.
You end up overriding or colliding with properties & methods, and javascipt doesn't warn you.
This leads to unexpected behavior and brittle base class.
Using composition also allows me to use my own class hierarchy scheme for my classes. 

One place I will use Lang.Class, because it's the only solution, is for glade files.

### gjs + coffeescript + tsc

compile coffeescript to javascript, then
use tsc to ensure es5 compatible and packege up with dependencies.

The result is sort of like a webpack or browserify bundle.
Uses amd compatible module definitions.


The downside - gjs is linux only.
But I would have to do dev on windows for that to matter...


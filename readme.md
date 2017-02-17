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



### gjs + coffeescript + tsc

compile coffeescript to javascript, then
use tsc to ensure es5 compatible and packege up with dependencies.

The result is sort of like a webpack or browserify bundle.
Uses amd compatible module definitions.


The downside - gjs is linux only.
But I would have to do dev on windows for that to matter...


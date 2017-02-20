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


### where is autogen?
it's all gnu to me. I like npm, and their tools are more js specific anyway.
Since I'm cleaning this up with coffeescript, I will switch to a Cakefile.


### gjs + coffeescript + tsc

compile coffeescript to javascript, then
use tsc to ensure es5 compatible and packege up with dependencies.

Cakefile to manage installation

The result is sort of like a webpack or browserify bundle.
Uses amd compatible module definitions.


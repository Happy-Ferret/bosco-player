### Bosco Player ###

Gtk application written with TypeScript
Coffeescript works also, but for a complex desktop app, 
type checking is a plus Right now, this is just a gui shell 
that displays autovala values


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


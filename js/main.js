var GLib, player;

GLib = imports.gi.GLib;

import Player from 'Player';

player = new Player();

player.application.run(ARGV);

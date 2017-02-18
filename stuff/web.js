#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const WebKit = imports.gi.WebKit;

const Lang = imports.lang;

const WebBrowser = new Lang.Class({
	Name: 'WebBrowser',
	Extends: Gtk.Application,

	// Create the application itself
	_init: function() {
		this.parent({ 
			application_id: 'org.example.WebBrowser' });

		// this._homeUrl = "https://darkoverlordofdata.com/katra/run/?basic=hp2k&program=STTR1";
        // this._homeUrl = "https://darkoverlordofdata.com/entitas-ts/example.html";
        this._homeUrl = "https://darkoverlordofdata.com/spaceship-warrior-ts/";

		// Connect 'activate' and 'startup' signals to the callback functions
		this.connect('activate', Lang.bind(this, this._onActivate));
    	this.connect('startup', Lang.bind(this, this._onStartup));
    },

    // Callback function for 'activate' signal 
     _onActivate: function() {
     	// Present window when active
        this._window.present();

        // Grab focus to the Url Bar when active
        this._urlBar.grab_focus();

        // Load the default home page when active
        this._webView.open(this._homeUrl);
    },

    // Callback function for 'startup' signal
    _onStartup: function() {
    	// Build the UI
        this._buildUI();

        // Connect the UI signals
        this._connectSignals();
    },

     // Build the application's UI
    _buildUI: function() {
        // Create the application window
        this._window = new Gtk.ApplicationWindow({
            application: this,
            window_position: Gtk.WindowPosition.CENTER,
            default_height: 768,
            default_width: 1024,
            border_width: 0,
            title: "WebKit Sample"});

        // Create the application toolbar
        let toolbar = new Gtk.Toolbar();

        // Create the browser buttons (Back, Forward and Reload)
        this._backButton = new Gtk.ToolButton({ stock_id: Gtk.STOCK_GO_BACK });
        this._forwardButton = new Gtk.ToolButton({ stock_id: Gtk.STOCK_GO_FORWARD });   
        this._reloadButton = new Gtk.ToolButton({ stock_id: Gtk.STOCK_REFRESH });

        // Create the Url Bar
        this._urlBar = new Gtk.Entry();

        // Place the url bar in a ToolItem to add it to the Toolbar
        let urlbar = new Gtk.ToolItem({ child: this._urlBar });
        urlbar.set_expand(true);

        // Add browser buttons to the toolbar
        // toolbar.add(this._backButton);
        // toolbar.add(this._forwardButton);
        // toolbar.add(urlbar);
        // toolbar.add(this._reloadButton);

        // Create the WebKit WebView, our window to the web
        this._webView = new WebKit.WebView();

        // Create a scrolled window to embed the WebView
        let scrolledWindow = new Gtk.ScrolledWindow ({
        	hscrollbar_policy: Gtk.PolicyType.AUTOMATIC,
        	vscrollbar_policy: Gtk.PolicyType.AUTOMATIC });
        scrolledWindow.add(this._webView);

        // Create a box to organize everything in
        let box = new Gtk.Box({
            orientation: Gtk.Orientation.VERTICAL,
        	homogeneous: false,
        	spacing: 0 });

        // Pack toolbar and scrolled window to the box
        box.pack_start(toolbar, false, true, 0);
        box.pack_start(scrolledWindow, true, true, 0);

        // Add the box to the window
        this._window.add(box);

        // Show the window and all child widgets
        this._window.show_all();
    },

    _connectSignals: function() {
    	// When an URL is entered, call web_view to open it
    	this._urlBar.connect('activate', Lang.bind(this, 
    		function() {
    			this._webView.open(this._urlBar.text);
    		}));

    	// Change the Window title when a new page is loaded
    	this._webView.connect('title-changed', Lang.bind(this, 
    		function(source, frame, title) {
    			this._window.set_title(title);
   			}));

    	// Update the url bar and buttons when a new page is loaded
    	this._webView.connect('load-committed', Lang.bind(this, 
    		function(source, frame) {
    			this._urlBar.text = frame.get_uri ();
    			this._updateButtons();
    		}));

    	// When the back button is clicked, go back
    	this._backButton.connect('clicked', Lang.bind(this,
    		function() {
    			this._webView.go_back();
    		}));

    	// When the forward button is clicked, go forward
    	this._forwardButton.connect('clicked', Lang.bind(this,
    		function() {
    			this._webView.go_forward();
    		}));

    	// When the realod button is clicked, reload
    	this._reloadButton.connect('clicked', Lang.bind(this,
    		function() {
    			this._webView.reload();
    		}));
    },

    _updateButtons: function() {
    	// Set back button and forward button sensitive if it's possible to go 
    	// back or forward respectively
    	this._backButton.sensitive = this._webView.can_go_back();
    	this._forwardButton.sensitive = this._webView.can_go_forward();
    }
});

// Run the application
let app = new WebBrowser ();
app.run (ARGV);
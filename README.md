# Font viewer

This is a free webapp that you run locally on your machine (server script included) to see a list of all your fonts, for sampling, comparison and selection.

If you are interested to see how this app works and looks, there's an [online version](http://mcdlr.com/font-viewer/) with only a list of default OS X fonts.

The idea is that you can actually see all your installed fonts by downloading Apple Font Tool Suite and running a script so the webapp can make use of that list (instructions below)


## Features

* Lists all installed fonts’ family names and sample text (using the font)
* Sample text can be modified
* Sample text can be reset with a provided list of pangrams in different languages
* List of family fonts can be filtered by a search query
* Title of font family can be hidden so you can concentrate just on the sample text
* Favourite fonts can be selected and then compared to each other
* A single font’s characters, different font size sample text and links can be displayed

A simple example workflow of choosing a font for a logo would be as follows:

1. Write name as sample text
2. Scroll and check that name in different typographies
3. Favourite any typography you deem appropriate
4. Compare chosen favourites, discard less appropriate, select the best

If you want to see an online version with a generic list of fonts, check http://mcdlr.com/font-viewer/


## Requirements

Install [Apple Font Tool Suite](https://developer.apple.com/fonts/) (Only available for OS X)


## Getting your own font list and running the app

First, you must get the project files. If you know how to use git, you know what to do. Alternatively, you can [Download the project as a ZIP file](https://github.com/DrummerHead/font-viewer/archive/master.zip).

The project comes with a list of fonts generally installed by default in OS X. To get the list of your installed fonts access the project’s root folder on your [terminal](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line) (if you open the terminal, type `cd ` (space after cd), drag&drop the folder to the terminal and press enter you are set) and type:

```
ruby get_fonts.rb
```

You only need to do this once, or every time you want to update the font list if you have installed new fonts.

After this, to run the localhost server, type:

```
ruby servo.rb
```

Go to your preferred browser and access http://localhost:8080/font-viewer/

The terminal window will be running the server until you close it; for this press `control + c` and then you can close the terminal window if you want.


## What about Linux and Windows?

If you know of other command line tools available to get a list of the installed fonts, I will be more than happy to integrate that into the project. [Get in contact](http://drummerhead.me/) or [create a Github Issue](https://github.com/DrummerHead/font-viewer/issues).

This all started as an intrigue of the browser's capabilities to render OS installed fonts, and if the possibility existed to create a webapp to show installed fonts. Clearly a webapp is not the most suited platform for font management and display, but at least this one is free and open; and it has features that I felt other apps needed.

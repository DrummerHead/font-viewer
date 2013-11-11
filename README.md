# Font viewer

This webapp has the following features:

* Lists all installed fonts’ family names and sample text (using the font)
* Sample text can be modified
* List of family fonts can be filtered by a search query
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

The project comes with a list of fonts generally installed by default in OS X. To get the list of your installed fonts access the project’s root folder on your [terminal](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line) (if you open the terminal, type `cd `, drag&drop the folder to the terminal and press enter you are set) and type:

```
ruby get_fonts.rb
```

You only need to do this once, or every time you want to update the font list if you have installed new fonts.

After this, to run the localhost server, type:

```
ruby servo.rb
```

Go to your preferred browser and access http://localhost:8080/font-viewer/


## What about Linux and Windows?

If you know of other command line tools available to get a list of the installed fonts, I will be more than happy to integrate that into the project. [Get in contact](http://drummerhead.me/) or [create a Github Issue](https://github.com/DrummerHead/font-viewer/issues).

This all started as an intrigue of the browser's capabilities to render OS installed fonts, and if the possibility existed to create a webapp to show installed fonts. Clearly a webapp is not the most suited platform for font management and display, but at least this one is free and open; and it has features that I felt other apps needed.

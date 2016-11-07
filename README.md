# Font viewer

This is an Open Source app you run locally to see a list of all your fonts; for sampling, comparison and selection.

If you are interested to see how this app looks, there's an [online version](http://mcdlr.com/font-viewer/) with only a list of default OS X fonts.


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


## Getting your own font list and running the app

Clone the project (or clone your own fork) and

```
npm install
./get_fonts
./servo
```

You only need to run `./get_fonts` once, and after installing new fonts (to update the list).

On Linux, you also may need to install the `libfontconfig-dev` package, for example:

```
sudo apt-get install libfontconfig-dev
```

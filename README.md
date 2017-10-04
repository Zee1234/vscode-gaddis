# gaddis-language-definitions README

This extension provides some basic language support for the Gaddis Pseudolanguage from the book "Starting Out with Programming Logic and Design" by Tony Gaddis. The author of this extension makes no remarks on their approval, or lack thereof, of this Pseudolanguage. These project was done as a learning experience and to help a friend.

## Features

* Syntax highlighting. There are flaws, and at this point, I've no idea how to fix them. It's significantly better than nothing, at least. I will gladly accept assistance in finishing up this project.
* Automatic tabination (indent on If/For/Do/While/etc, dedent on End/Until).
* The ability to add (or remove) line numbers in-file at a command. Open the command palette, type `Gaddis`, and select the command. Do note, no checking is done, and it does rough cuts. It will remove portions of your code if you "Remove Numbers" without numbers present, and you can "Add Numbers" multiple times (does not break "Remove Numbers"). Also breaks if you have more than 99,999 lines ( D: WAI ).

## Known Issues

* Same-line keywords do not style properly (for example, `If x Then`, `If` is properly styled, `Then` is not).
* Strings do not style at all.
* `Do/While` loops do not indent properly.
* Some things that could be colored are not currently (`+/-*`, etc, numbers, booleans... the list goes on).

## Future Goals

* Fix the known issues
* Fix unknown issues
* Implement static analysis or similar
* Transpile to an actual language (or otherwise transform this from a Pseudolanguage to a real language)
* Probibility of completion alone: Non-zero

## Release Notes

### 0.1.0

Initial release
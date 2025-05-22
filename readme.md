# Change Lea's Words

Simple CrossCode mod to change or replace Lea's words with your own, just for fun.

Spoiler alert for Lea's words.

This only replaces Lea's words, and will not replace those words when other characters (such as Sergey) say them. In addition it only replaces the words when they appear in dialogue boxes and not in other places.

Tested in the English version, but not thoroughly.

## Installation

1. From GitHub, click on the green _Code_ button and then click _Download ZIP_.
1. Extract the contents in `<CrossCode installation folder>/assets/mods/`.
1. Load the mod using [CCLoader](https://github.com/CCDirectLink/CCLoader).

## Instructions

Open `plugin.js` and edit the words in the `replacements` variable. For example, to make Lea say "Hello" instead of "Hi", edit the file like this:
```js
const replacements = {
    hi: "Hello",
    // Other words ...
}

// Rest of the file
```

## TODOs

TODOs:
- Add mod icon.
- Load words and replacements from a JSON file?
- Replace words in other locations.
- Replace [nods], [shakes head]?

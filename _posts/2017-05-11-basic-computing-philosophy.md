---
layout: post
title:  "Basic Computing Philosophy"
description: "Understanding filesystems and processing concepts."
author: Brent Schneider
date:   2017-05-12 00:17:55 -0500
categories: Typography
masthead: 'masthead.jpg'
---

## File system

A file system is a series of folders inside of other folders with files inside the folders.

{% include img.html src="dolls.jpg" type="" caption="It's dolls all the way down..." %}

Think of it like a Russian doll. With messages (files) contained in certain levels of the doll.  It's virtual boxes inside boxes.

### Using the file system

{% include img.html src="salvia-doll.jpg" type="pull-left" caption="Look at that shit, that's a head fuck" %}

It's as simple as creating new folders and moving documents and files into a logical order. You goal is to keep the information organized.

#### Finder

{% include img.html src="gui.png" type="pull-right" caption="File structure to hold albums" %}

In mac this is Finder. This is what a series of folders (directories) look like inside of each other. Finder is a **GUI** for **Graphical User Interface**, because it uses graphics and pictures to display meaning.

#### Terminal

You can also use the Terminal to do the same thing. We will be using terminal for most of our tasks. Terminal is a text interface or **CLI** for **Command Line Interface** because it uses text on the Command Line.

```bash
Music
├── Artists
│   └── Albums
│       └── Songs
└── Compilations
    └── Titles

5 directories, 0 files
```

##### Path

This is the **path** to the `song` directory: `Music/Artists/Albums/Songs/`

## Processing & I/O (input/ output)

The entire principle of computers is taking output and making it the input of something else.

It's easy to think about this like guitar effect pedals.

{% include img.html src="pedals.png" type="pull-both" caption="a bit of the old in and out" %}

in this diagram:  

1.  someone plays the guitar
2.  the guitar outputs into the tuner
3.  the tuner outputs to wah
4.  wah outputs to compressor

etc...

1.  Think of the guitar as your keyboard and mouse.  
2.  The pedals as the software on your computer.
3.  The amp is your display

Also note that you don't play the pedals directly. You  change their settings, but the guitar is your interface.

## Automation

The last principle is automating actions to they happen on their own. This way you don't need to set up the guitar pedals every single time and they will always be in the right order.

It's best practice to try to automate everything you find yourself doing over and over on a computer. This is where computers shine.

### Programs

Applications or programs are series of tasks that run in a specific order.

1.  They take input
2.  Input processed through a series of modules (guitar pedals).
3.  Output printed on the screen (sound through the guitar amp)

---
layout: post
title:  "> The Command Line"
description: "A quick guide to understanding working on the command line (especially for OSX)"
author: Brent Schneider
date:   2017-05-12 00:40:55 -0500
categories: Terminal
masthead: 'masthead.jpg'
---

## Table of contents

1.  [Summary](#summary)
2.  [iTerm2](#iterm2)
    1.  [Hotkeys](#basic-terminal-hotkeys)
    2.  [Custom settings](#custom-settings)
    3.  [iterm2 shortcuts](#cool-iterm2-shortcuts)
3.  [Shell Prompt](#shell-prompt)
4.  [shells and configuration](#shells-and-configuration)
    1.  [zsh (z shell)](#zsh-z-shell)
    2.  [oh my zsh](#oh-my-zsh)
    3.  [.zsrch file](#default-zsrch-file)
    4.  [syntax highlighting](#syntax-highlighting)
    5.  [oh my zsh tips and tricks](#oh-my-zsh-tips-and-tricks)
5.  [brew](#brew)

## Summary

In the modern world most development is through the terminal. I'm not 100% sure why. People could create apps with interfaces to do this. My guess is, that once you get used to it, it's actually easier.

Terminal is a different way to use your computer. Instead of pointing and clicking you type what you want. On mac you have a built in terminal located in `/Applications/Utilities/Terminal.app`. _look up [file paths](<>), if you don't know what this means. ex . (Folder/Folder/file.txt)_

We won't be using the built in mac terminal, we will start with a better more improved one.

## iTerm2

Download and install iTerm2 here.

<https://www.iterm2.com>

Download and install my default settings here.

### Basic Terminal Hotkeys

to test these write a line of random text in the terminal and test out each of these key commands.

-   `ctrl + a` -  jump to beginning of the line
-   `ctrl + e` -  jump to end of the line
-   `ctrl + u` -  clear the current line

### Custom Settings

I'll upload custom settings soon...

### Cool iTerm2 shortcuts

-   `cmd+shift+h` - show paste history
-   `cmd+/` - show cursor if you're lost working on more than one pane
-   `cmd+options+e` - search all tabs (mac expose style)
-   `cmd+;` - autocomplete type from previous commands
-   `cmd+d` - split window vertical
-   `cmd+shift+d` - split window horizontal

## Shell prompt

The shell prompt is the line of text right before the blinking cursor.

`$` _indicates the shell prompt in writing_ - **If you copy and paste, DO NOT copy the dollar sign ($) from the examples. Copy the text after it.**

## Shells and configuration

The shell is the program that interprets your input. The shell is by default configured to bash. We want to change the default shell to zsh.

### zsh (Z shell)

Zsh is more modern and a lot more extensible. We'll still use bash at times, not for general purposes.

To check your current shell:

    $ echo $SHELL

If it's not set to zsh, do so by entering:

    $ chsh -s /usr/bin/zsh

### Oh my zsh

Oh my zsh is a custom configuration to the zsh shell.

#### Read about oh my zsh here:

<https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH>

Install oh my zsh by entering into terminal:

    $ sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

Zsh configured through the .zshrc file

`.zshrc` is the zsh config file. to edit type `zshconfig`

### Syntax Highlighting

Add syntax highlighting to commands you have not send yet with _zsh-syntax-highlighting_. This will allow you to see colored versons of your commands to visually proof them for errors while you type.

    $ git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

### Oh My ZSH tips and tricks

[oh-my-zsh cheatsheet](https://github.com/robbyrussell/oh-my-zsh/wiki/Cheatsheet)

1.  You don't have to type `cd` to change directories
2.  Type `..` to go back 1 directory, `...` to go back 2 etc.
3.  Type `reload` to reload the `.zshrc` file
4.  `update` updates Atom/Node/ZSH/Brew in one command

## Mac OSX Package manager

Brew is a terminal package manager is like the app store or google play store for terminal. It downloads and installs programs for you to use. Brew is the best mac terminal package manager. Install brew by running:

    $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

To install a program that you don't have, type:

    $ brew install <program name>

You can read more about it here:

<https://brew.sh>

## Install first brew package for ZSH

Install **thefuck**. Corrects mistyped terminal commands so that you don't have to type the whole thing over.

    $ brew install thefuck

1.  tap `esc` twice and it will show you corrections.
2.  typing `fuck` will send the corrected commands

Read more about it here: <https://github.com/nvbn/thefuck>

### Install `trash`

    $ brew install trash

### Other useful programs

    $ brew install tree youtube-dl speedtest-cli wget nmap links

let's you move items to the trash instead of having to brutally `rm -rf` non-empty folders to delete them.

## Basic Terminal Command Reference

Terminal commands such as `ls`, `cd` are programs that exist in the terminal. They often don't have a visual interface. But they're apps all the same like the ones you use on your phone.

### RTFM (Read The Fucking Manual)

`man <program name>`
read the manual pages. Hit `q` to escape the manual pages

_The manual pages look fucked up at first, but it's important to learn how to read them. Keep looking at them with any about commands_

### `d` - directory stack

`d` - Shows the stack of last used directories
`1` - Typing a number (ex. 1,2,3,4,5) goes to that directory

### `ls`

`ls`= list
	lists directories

`ls -a`
lists directories + files starting with a dot (.hidden)

`ls -l`
lists all contents of a directory in long format

`ls -t`
lists and orders files and directories by time last modified

`ls -alt`
combines all above options

\* **(-a, -l, and -t are options)**
`pwd` print working directory

### `cd`

_change directory <argument>_

`cd ..`
		navigates up one directory

`cd ../../`
navigates up 2 directories

`cd ../../<filename>`
		navigates up 2 directories and into <filename>

#### Using `z` to efficiently change to directories you've used before

After you have `cd`ed around for a while try using `z` to move back to a directory.

`z des[tab]` brings up `/Users/Brent/Files/Design/`.

`z` command paired with `d` will allow you too navigate non linearly through the filesystem.

### Making directories and files

`mkdir` -make new directory

`take path/to/directory` - Makes a new directory in the defined path and moves into it

`tab` - Makes a new tab from the current directory

`touch`
	create new file within directory

`pico`
	enter text edit to create new file from within iTerm

`cp`
	copy

`cp *<name>`
	selects all files in the working directory

`cp *<origin> <destination>`
		copies all files (origin) into another directory (destination)

`mv`
move file (rename)

`mv <file> <directory>`
moves file into directory

`mv <filenameA.txt> <filenameB.txt>`
changes the filename from a to b

`rm`
remove a file

`rm -r`
remove recursive:
removes a directory and all its child directories

`rm -rf`
force recursive removes directory

### Other navigation

`top`
	shows all programs running/ cpu

`q`
	escapes from list

`clear`
	clears screen

`CONTOL + C`
	cancel running command

### Finding files and folders

`whereis`
	finds program ex. whereis perl > user/bin/perl

### Finding Filds

`grep`
	ex. `grep -textsearch <filename>`
	sort through long files or dir for specific word or character

`cat`
	displays the contents of a text file

`find`
    ex. `find ~/ -iname "filename.txt"`
        `find` finds `~/` in location `"filename.txt"` filename
or...
`“*...*”` _wild card_ finds a series of characters within other characters

### The Grepping and the Piping

Using a pipe is a way of taking the output of one command and putting into the input of another command.

Let's install two short programs

    brew install cowsay fortune

`cowsay` will print a cow speaking

`cowsay "wtf is this shit"`

prints

            __________________
            < wtf is this shit >
            ------------------
            	       \   ^__^
            		\  (oo)\_______
            		   (__)\       )\/\
            			||----w |
            			||     ||

Now lets try out fortune

`fortune` will print a small text fortune for you.

`$ fortune`

    "Microwave oven?  Whaddya mean, it's a microwave oven?  I've been watching
    Channel 4 on the thing for two weeks."

Now let's make the cow tell us a fortune.  

take the output of `fortune` and make it the input of `cowsay` by using a pipe.

`$ fortune | cowsay`

now we have a fortune telling cow.

There's all sorts of other animals you can make talk too. They are located in `cowfiles`. `man cowsay` and see if you can get a stoned turkey to list your current directory contents. paste the answer over my image.

    ___________________________________
    / Atom CSS-Dev-Tools CSS-Formatting \
    | CSS-Layout Git HTML-Content       |
    | HTML-Interactive HTML-Structure   |
    | Javascript Javascript-Debugging   |
    | Markdown README.md                |
    | Responsive-Progressive SASS       |
    | Task-Runners-Bundlers Terminal    |
    \ Typography                        /
    -----------------------------------
     \                                  ,+*^^*+___+++_
      \                           ,*^^^^              )
       \                       _+*                     ^**+_
        \                    +^       _ _++*+_+++_,         )
    		    _+^^*+_    (     ,+*^ ^          \+_        )
    			{       )  (    ,(    ,_+--+--,      ^)      ^\
    		   { (@)    } f   ,(  ,+-^ __*_*_  ^^\_   ^\       )
    		  {:;-/    (_+*-+^^^^^+*+*<_ _++_)_    )    )      /
    		 ( /  (    (        ,___    ^*+_+* )   <    <      \
    		  U _/     )    *--<  ) ^\-----++__)   )    )       )
    		   (      )  _(^)^^))  )  )\^^^^^))^*+/    /       /
    		 (      /  (_))_^)) )  )  ))^^^^^))^^^)__/     +^^
    		(     ,/    (^))^))  )  ) ))^^^^^^^))^^)       _)
    		 *+__+*       (_))^)  ) ) ))^^^^^^))^^^^^)____*^
    		 \             \_)^)_)) ))^^^^^^^^^^))^^^^)
    		  (_             ^\__^^^^^^^^^^^^))^^^^^^^)
    			^\___            ^\__^^^^^^))^^^^^^^^)\\
    				 ^^^^^\uuu/^^\uuu/^^^^\^\^\^\^\^\^\^\
    					___) >____) >___   ^\_\_\_\_\_\_\)
    				   ^^^//\\_^^//\\_^       ^(\_\_\_\)
    					 ^^^ ^^ ^^^ ^

## SSH to a remote computer

`$ ssh name@ipaddress`

### Setting up ssh keys

<https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2>

## Transfer a file with SCP

**local machine**

`$ scp path/file.txt username@hostname:/var/www/file.txt`

    -P for portnumber
    -r copy whole directories

**local file and destination file can also be reversed to download**
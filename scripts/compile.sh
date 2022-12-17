#! /bin/zsh

# https://unix.stackexchange.com/a/115431
root=${0:A:h:h}

src="$root/assets/scss"
dest="$root/assets/css"

sass \
    "$src/style-base.scss":"$dest/base.css" \
    "$src/style-japanese.scss":"$dest/japanese.css" \
    "$src/style-music.scss":"$dest/music.css"

During my final semester at BYU I decided to take a cross-country skiing class. Because I often took pictures during that, I thought it would be a cool idea to build a website to contain all the pictures of our trips. I didn't stop there however: I extended the idea to be a generic site that others could easily mirror to host their own albums in addition to this one. Ultimately I wanted to build an admin site so others could easily upload and manage their own albums and then share a static link of their creations. However, I had to settle on a simpler solution with the hopes of eventually building in this functionality. The class ended early, but I still decided to build it. After building it I realized that all of my pictures of the class weren't actually that good and so I decided to host a random collection of photos taken from my other blog posts.

Each album features a framed photo with a configurable background.

<center> <img src="require('assets/images/projects/custom_album/album_overview.png')" style="max-width: 600;" /> </center>

There's also a bunch of fun little buttons to press including thumbs-up/thumbs-down for photo rating.

<center> <img src="require('assets/images/projects/custom_album/album_toolbar.png')" style="max-width: 600;" /> </center>

You can also look at a short description about a photo

<center> <img src="require('assets/images/projects/custom_album/album_details.png')" style="max-width: 600;" /> </center>

Or perhaps you just want to chat with other people in a public chatroom.

<center> <img src="require('assets/images/projects/custom_album/album_chat.png')" style="max-width: 600;" /> </center>

Rather than my normal React build, I created this project using vanilla HTML and CSS. I used JQuery to patch in the Firebase connections and transitions. The Firebase rules were rather easy to make but are pretty restrictive given that the whole table has public read/write access. I had to write some pretty tough validations to make sure that the tables wouldn't be taken advantage of.

A working example can be found at http://album.scottcrossen.com

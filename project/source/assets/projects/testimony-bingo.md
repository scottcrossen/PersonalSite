<h2>Original Version</h2>

As a very simple project to practice my skills at coding python, I decided to make a simple HTTP Server that serves out a game of Bingo. It was built around the http.server class pre-supplied in the python3 libraries. The HTTP Server processes a request and dishes out a very basic table element in html. The purpose of this project was not to show that I can make a front-end app or pretty JQuery elements but rather to show that I can also make basic socket and HTTP servers. The Interface is very crude. Below are some screenshots with the bingo-board word set that can be used for an LDS Testimony Meeting:

<center> <img src="require('assets/images/projects/testimony_bingo/testimony_bingo_2.png')" style="width: 300; height: 259;" /> <img src="require('assets/images/projects/testimony_bingo/testimony_bingo_4.png')" style="width: 300; height: 220;" /> </center>

I hosted the service on an AWS t2.micro instance which my brother and I maintain. I hosted it there until I decided that this wasn't my best work and that I probably shouldn't show it off until I can create a better front-end in JavaScript. A special thanks goes to Amazon's Web Services for providing a free tier of products and discounts for students like me. Though I don't use AWS for much more than isolated server instances, I think the cluster services offered there are pretty cool.

<h2>Update</h2>

I finally got around to making a good GUI for the user. I designed the html in bootstrap, Jquery, and HTML5.

<center> <img src="require('assets/images/projects/testimony_bingo/testimony_bingo_5.png')" style="width: 640; height: 129;" /> </center>

Because I used JQuery and Bootstrap, I made it dynamically resize itself to fit best on different screen sizes. Here's what it looks like on a desktop:

<center> <img src="require('assets/images/projects/testimony_bingo/testimony_bingo_6.png')" style="width: 300; height: 283;" /> </center>

For mobile screens the words get put below the bingo board:

<center> <img src="require('assets/images/projects/testimony_bingo/testimony_bingo_7.png')" style="width: 242; height: 300;" /> <img src="require('assets/images/projects/testimony_bingo/testimony_bingo_8.png')" style="width: 300; height: 186;" /> </center>

<h2>Another Update</h2>

For this update I re-designed the application for use with a NodeJS framework called Express. I added authentication abilities using a module called Passport. I also made a dynamic leaderboard using Google's web platform called Firebase.

Here are pictures of the authentication portion of the application. Users cannot view the main game unless they first login or signup. Users are also given the option to change their preferences after logging in.

<center> <img src="require('assets/images/projects/testimony_bingo/bingo_auth_1.png')" style="width: 287; height: 300;" /> <img src="require('assets/images/projects/testimony_bingo/bingo_auth_4.png')" style="width: 300; height: 289;" /> <img src="require('assets/images/projects/testimony_bingo/bingo_auth_2.png')" style="width: 257; height: 300;" /> </center>

After logging in a user can push the bingo button and the Firebase database will be updated with the user's updated score (given a correct bingo). This scoreboard is displayed in a modal when the appropriate button is pressed.

<center> <img src="require('assets/images/projects/testimony_bingo/bingo_auth_3.png')" style="width: 289; height: 300;" /> </center>

Though it's not the full version of the game with a scoreboard and authentication, feel free to play the simplified game.

The list of bingo phrases can be found at the GitHub repository for the game. The simplified version has a repository located at https://github.com/scottcrossen/TestimonyBingo and the renovated version has a repository located at https://github.com/scottcrossen/TestimonyBingoDynamic

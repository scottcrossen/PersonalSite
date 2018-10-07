This was a relatively simple project that Google's material.io.  It was a simple trivia-engine that my brother and I made for group games. It consisted of a frontend and a backend. I wrote the frontend.

Users would choose a name for the round:

<center> <img src="require('assets/images/projects/trivia_buzzer/trivia_buzz.png')" style="max-width: 600;" /> </center>

And confirm their selection:

<center> <img src="require('assets/images/projects/trivia_buzzer/trivia_signin_1.png')" style="max-width: 600;" /> </center>

Once everyone was signed-in the moderator would then start asking questions. When a player knows the answer they can push the buzzer button which stops the moderator's question so they can respond. This action make a chime sound on the moderator's view.

<center> <img src="require('assets/images/projects/trivia_buzzer/trivia_signin_2.png')" style="max-width: 600;" /> </center>

If they get it right their score on the scoreboard increases:

<center> <img src="require('assets/images/projects/trivia_buzzer/trivia_board.png')" style="max-width: 600;" /> </center>

It was written in vanilla JavaScript, SCSS, and HTML with material components. All scripts and styles we're embedded into a single .html file with the help of webpack.

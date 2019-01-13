This project was "four" a class assignment. I worked with a partner (Steve Curtis) and we built a two-player version of the classic game *Connect Four*. We built it to be played over automated http requests to a Node server built on a Mongo database. The front-end (which Steve mostly made) was built on JQuery and Bootstrap.

The game is initiated by displaying an input-modal. The user provides his/her name and session ID and a game is created in the database.

<center> <img src="require('assets/images/projects/connect_four/connect_four_modal_1.png')" style="max-width: 637;" /> </center>

The app then allows for users to select columns during their turn to move.

<center> <img src="require('assets/images/projects/connect_four/connect_four_board_1.png')" style="max-width: 741;" /> </center>

Whenever the board is updated a function is called to check whether the game-over condition is met. The winner is sent to a congratulatory page and the loser is sent to a page that displays a message appropriate for losers.

<center> <img src="require('assets/images/projects/connect_four/connect_four_lose.png')" style="max-width: 385;" /> </center>

I don't know how long this project will be hosted but in the meantime feel free to play it with your friends!

The code for the whole app can be found at the pertinent GitHub repository: https://github.com/scottcrossen/ConnectFour

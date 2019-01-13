For this project I created a web-version of the classic *Tic Tac Toe* using the same engine that I built Connect Four with. Like *Connect Four*, we built it to be played over automated http requests to a Node server built on a Mongo database. The front-end (which my partner Scott Mckenzie made) was built on JQuery and Bootstrap.

<center> <img src="require('assets/images/projects/tic_tac_toe/tic_tac_toe_6.png')" style="max-width: 640;" /> </center>

The game is initiated by displaying an input-modal. The user provides his/her name and session ID and a game is created in the database. Additionally, the user is allowed to choose how large of a tic-tac-toe board he/she would like to play on.

<center> <img src="require('assets/images/projects/tic_tac_toe/tic_tac_toe_modal_1.png')" style="max-width: 665;" /> </center>

Whenever the board is updated a function is called to check whether the game-over condition is met. The winner is sent to a congratulatory page and the loser is sent to a page that displays a message appropriate for losers.

<center> <img src="require('assets/images/projects/tic_tac_toe/tic_tac_toe_7.png')" style="max-width: 640;" /> </center>

The code for the whole app can be found at the pertinent GitHub repository: https://github.com/scottcrossen/ConnectFour

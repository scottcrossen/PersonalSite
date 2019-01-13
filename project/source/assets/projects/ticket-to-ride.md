For one of my classes I got to write an android app for the classic board game
*Ticket To Ride*. I unfortunately had to write it in Java (I prefer Scala or
even Kotlin). Some of the design patterns I was forced to use were not at
all desirable in production systems, but I still wrote some unique code to accomplish
various tasks.

For example, Instead of a typical REST API, I used Java's serialization features
to implement a bastardization of the command pattern. It was easy to use, but probably
wasn't the most secure.

I also wrote a database that used the idea of saving deltas
executed on top of state instead of saving the state itself. It wasn't exactly great
for stateless APIs but I had to use it for the class so I wrote it in anyway.

I did, however, write a pretty involved plugin loader. In this particular case,
the server would accept different kinds of persistent storage provided through plugins
packaged as java jars.
I wrote one for Mongo and SQLite. Third party plugins could also
be written for any type of database language that implemented a provided interface
and would be loaded the same way. The plugin loader was robust enough to sort
through jars attached at runtime and load the appropriate interface classes
without the need for hard-coded paths or manifests.

Another piece of code that was rather interesting to write was
the authentication part of the project. It would have been easier to write in Scala using
implicit json conversion, but in Java it was a bit more difficult. What made it harder was that the
appropriate libraries for secure sealing / signing weren't included in the normal Java
libraries. After a whole lot of hacking, I finally built auth tokens that didn't require
storage in server state and could be sealed/unsealed using a supplied key only available
on the server and thus couldn't be hacked. Most people in the class just built tokens that
consisted of a random sequence given to the client and that sequence's privilege stored in
server state which would be queried whenever a request was made. This
method was far more superior (and much more standard).

As for the GUI, the login screen allowed for the server to be specified and login information to
be submitted.

<center> <img src="require('assets/images/projects/ticket_to_ride/ticket_to_ride_login.png')" style="max-width: 400;" /> </center>

The available games would then be listed on login. If the user exited the app while last playing the game,
the app would bring up the user's current game instead. Because of the server architecture, multiple games
could be hosted on the server and up to five people could be in any game at a time.

<center> <img src="require('assets/images/projects/ticket_to_ride/ticket_to_ride_game_list.png')" style="max-width: 400;" /> </center>

The game would start and users would then select their initial cards

<center> <img src="require('assets/images/projects/ticket_to_ride/ticket_to_ride_choose_dest_2.png')" style="max-width: 400;" /> <img src="require('assets/images/projects/ticket_to_ride/ticket_to_ride_choose_dest_1.png')" style="max-width: 400;" /> </center>

The game had a map that users could select routes on if they had the required cards.

<center> <img src="require('assets/images/projects/ticket_to_ride/ticket_to_ride_map.png')" style="max-width: 400;" /> </center>

Droor options were available for game info, player info, game history, and other player info.

<center> <img src="require('assets/images/projects/ticket_to_ride/ticket_to_ride_game_info.png')" style="max-width: 400;" /> <img src="require('assets/images/projects/ticket_to_ride/ticket_to_ride_player_info.png')" style="max-width: 400;" /> <img src="require('assets/images/projects/ticket_to_ride/ticket_to_ride_history.png')" style="max-width: 400;" /> <img src="require('assets/images/projects/ticket_to_ride/ticket_to_ride_other_players.png')" style="max-width: 400;" /> </center>

The game had a state poller to update all clients when their was new information from the server.
Because of this it was also easy to implement a chat screen.

<center> <img src="require('assets/images/projects/ticket_to_ride/ticket_to_ride_chat.png')" style="max-width: 400;" /> </center>

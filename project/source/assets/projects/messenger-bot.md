I frequently get ideas for projects to see how quickly I can code them up. This is one of those ideas. The problem with the "fast and burn" style is that the finished product doesn't have the best code health.

A bit of background: I use messenger with my coworkers and friends. Messenger has a "reaction" feature that is used to individually respond to messages with emojis. I like to do this as it makes my chatrooms more positive environments. I also sometimes do it to tease people. One day I had the idea to write a bot that does these reactions for me. This project was the result.

The bot looks like a normal person in a conversation -- it's separate from my messenger profile. Whenever someone texts it, it looks up the sender's name in a table and responds with the correct emoji it finds there (the table is hard-coded before runtime). If it can't find an entry it defaults to the thumbs-up emoji.

It of course gives me the heart-eyes emoji everytime:

<center> <img src="require('assets/images/projects/messenger_bot/messenger_bot_1.png')" style="max-width: 600;" /> </center>

It was written in vanilla JavaScript with no dependencies.

The original code was written in ~10 lines of code. I had to significantly increase this to handle failures and edge cases. The original version took me 30 minutes to write and the complete version took me ~20 hours in total.

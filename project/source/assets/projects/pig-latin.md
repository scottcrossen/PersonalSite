It started out to be just a pig Latin translator written in AngularJS. It would take an input, translate it, and inject it back into the html via Angular directive. That was too easy though so I made a quick and dirty NodeJS API that would dish out messages and allow for users to also post their own messages. The service itself will actually allow for any messages to be posted, but the front-end client always translates them into pig Latin before they're posted.

The client itself actually has two Angular controllers on it. One handles requests made to the angular "modal" (a pop-up type of thing). This controller takes a name and assigns a pig-name to the user. Usually these pigs are from popular literature such as Orwell's "Animal Farm" or Card's "Speaker for the Dead". Below is a picture of that modal.

<center> <img src="require('assets/images/projects/pig_latin/pig_latin_modal.png')" style="width: 646; height: 282;" /> </center>

The second controller handles most of the work. It takes an input and translate it into pig latin. It then displays it on the screen and posts it to the service for others to see.

<center> <img src="require('assets/images/projects/pig_latin/pig_latin_2.png')" style="width: 485; height: 531;" /> </center>

It also updates the message board and changes the background pigs every now and then.

<center> <img src="require('assets/images/projects/pig_latin/pig_latin_1.png')" style="width: 640; height: 291;" /> </center>

Feel free to post whatever you like! The message board will only hold a certain amount of messages before it recycles them.

The code for both the service and client-side app can be found at the pertinent GitHub repository: https://github.com/scottcrossen/PigLatinTranslator

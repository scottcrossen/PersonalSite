For this project I collaborated with my brother Mark Crossen to create an app that opens his garage doors and gate. He lives in Palo Alto / Menlo Park and this app allows any authenticated user with the correct permissions to open his garage doors and gate from anywhere on the Internet!

The project is composed of three parts:

1. A backend service to authenticate users (via Google's OAuth), manage permissions, and parse the HTML for the site. It uses Ruby's Sinatra gem to do most of the work and is currently hosted in a container on Google cloud.
2. The second part is a basic frontend written in HTML/CSS/JQUERY. Because this was such a small project, all of the Javascript was written in-line on the HTML. The JQuery was used as an easy way to add effects to the buttons and to make the HTTP post actions.
3. The final part is the integration with the actual hardware so that the doors can open and close. This happens on a Raspberry Pi that's rigged up crudely to the door controllers in my brothers basement. Only the backend is allowed to speak with this directly.

There's a few reasons why my brother and I decided on this architecture: We wanted a secure system but we didn't want to manage TLS certificates for the Rasberrry Pi. Without unveiling the details, this architecture was able to achieve that and give us certain other assurances that we needed.

Here's a picture of what an authenticated user would see if they had all the permissions. Some users are only allowed to see the gate button and cannot access the garage buttons. A convenience field is included for anyone with garage access to give others gate access.

<center> <img src="require('assets/images/projects/garage/garage_buttons.png')" style="max-width: 600;" /> </center>

If a user isn't authenticated they are asked to login via Google. Since anyone can login with Google this doesn't guarantee the permissions to access the site: Only people who's email has been white-listed can use the site in full.

<center> <img src="require('assets/images/projects/garage/garage_login.png')" style="max-width: 600;" /> </center>

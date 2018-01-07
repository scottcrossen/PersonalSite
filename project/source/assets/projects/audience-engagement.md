For this project I collaborated with a team of others including a UX developer.
The goal was to create a project that teachers could use to ask their class questions
on the spot.

I designed the architecture for this project and wrote 98% of the code. I needed
something that was easily scalable and would support instantaneous and easy client-side
updating whenever state changed for a given class session. Naturally I turned to Google's
Firebase.

The client was a built as a web app so any device could access it. I used react,
react-redux, and react-router libraries for javascript.
I also used a custom library that built redux bindings into firebase calls so that
all state could be handled centrally. I of course used common javascript additions
like babel and flow. I packaged it all using a webpack bundler and hosted it on s3
under the domain http://class.scottcrossen.com   It's not finished yet, but the student
functionality all works.

The student login screen is shown below.

<center> <img src="require('assets/images/projects/audience_engagement/audience_engagement_login_1.png')" style="width: 360; height: auto;" /> </center>

students can answer questions that will automatically appear on their screen when
the professor is ready.

<center> <img src="require('assets/images/projects/audience_engagement/audience_engagement_answers_1.png')" style="width: 360; height: auto;" /> </center>

The professor can edit lessons and questions and navigate live sessions.

<center> <img src="require('assets/images/projects/audience_engagement/audience_engagement_lesson_1.png')" style="width: 600; height: auto;" /> </center>

Questions have an easy edit interface.

<center> <img src="require('assets/images/projects/audience_engagement/audience_engagement_question_edit.png')" style="width: 600; height: auto;" /> </center>

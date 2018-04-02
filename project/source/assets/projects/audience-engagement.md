This project was initially started as a class project, but was hardly even started because of the unique dynamic that groups have at the University level that causes nothing to get done.

Then, for the first ever 24-hr Hackathon at BYU, I chose to build out the app and enter it into the associated competition. Some of the wireframing and demoing had been done beforehand, but for the most part the whole project was created during the hackathon. In the end, the project was rated as the best by the panel of Googlers that were in attendance. I won some cool prizes because of that such as a Google Home and a Google Chromecast.

While initially designing the app, I collaborated with a team of others including a UX developer to create the initial design and feel of the app using tools like "Invision". The goal was to create a project that teachers could use to ask their class questions on the spot.

In the end, I designed the architecture for this project and wrote 98% of the code. I needed something that was easily scalable and would support instantaneous and easy client-side updating whenever state changed for a given class session. Naturally I turned to Google's Firebase.

The client was a built as a web app so any device could access it. I used react, react-redux, and react-router libraries for javascript. I also used a custom library that built redux bindings into firebase calls so that all state could be handled centrally. I of course used common javascript additions like babel and flow. I developed the app in a small docker cluster, but when it was finished I packaged it all using a webpack bundler and hosted it on s3 under the domain http://class.scottcrossen.com. After learning that Google is a much better provider, I migrated all my applications to Google cloud and Google domains. I also started tracking it on Google analytics. It seems to be fairly finished at this point, but there is one bug I know of that has to deal with editing lessons in the teacher view.

The student login screen is shown below.

<center> <img src="require('assets/images/projects/audience_engagement/audience_engagement_login_1.png')" style="width: 360; height: auto;" /> </center>

Students can answer questions that will automatically appear on their screen when
the professor is ready.

<center> <img src="require('assets/images/projects/audience_engagement/audience_engagement_answers_1.png')" style="width: 360; height: auto;" /> </center>

The professor can edit lessons and questions and navigate live sessions.

<center> <img src="require('assets/images/projects/audience_engagement/audience_engagement_lesson_1.png')" style="width: 600; height: auto;" /> </center>

Questions have an easy edit interface.

<center> <img src="require('assets/images/projects/audience_engagement/audience_engagement_question_edit.png')" style="width: 600; height: auto;" /> </center>

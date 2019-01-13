For one of my courses this semester my lab partner and I decided to implement a solution to experimentally measure relative p-polarized intensity values reflected from the surface of common materials at any arbitrary angle and from that calculate Brewster's angle and the index of refraction for that material.

<center> <img src="require('assets/images/projects/brewsters_angle/brewsters_angle_work.jpg')" style="max-width: 640;" /> </center>

(Yes my name-tag is wrong in this picture. I was wearing my friend's tag at that time.) By way of information, "Brewster's Angle" describes the angle of incident light at which 0 p-polarized light is reflected. "p-polarized" refers to light polarization (like vertical/horizontal) that is on the plane of reflection. For this project we should see that as we change the angle from 0-degrees (normal incidence) to 90 degrees (oblique incidence) the percent of p-polarized light we get back will decrease and then increase much like the following picture:

<center> <img src="require('assets/images/projects/brewsters_angle/brewsters_angle_data_1.jpg')" style="max-width: 360;" /> </center>

We started our project by deriving the model equation that we should be able to fit our data with:

<center> <img src="require('assets/images/projects/brewsters_angle/brewsters_angle_equation.png')" style="max-width: 640;" /> </center>

We then devised a system to accurately measure relative light intensity while ignoring background noise and harmful effects. We decided to use a cheap laser pulsed with a function generator connected to a diode. The reference from the lock-in could then be fed to a lock-in amplifier that could use that reference signal to accurately measure only the light hitting the detector (in this case a photo-diode) that was modulated at that reference frequency.

<center> <img src="require('assets/images/projects/brewsters_angle/brewsters_angle_5.jpg')" style="max-width: 400;" /> <img src="require('assets/images/projects/brewsters_angle/brewsters_angle_laser.jpg')" style="max-width: 300;" /> <img src="require('assets/images/projects/brewsters_angle/brewsters_angle_8.jpg')" style="max-width: 300;" /> </center>

After finishing the method to collect the relative intensity of the light we needed a method to vary the angle of incidence of our laser on the sample. Because our budget was small, we bought two cheap stepper-motors and fashioned little arms which we could mount optics on. We decided to go with stepper motors rather than servo motors because of cost and the fact that we could keep track of what angle the motor was at.

<center> <img src="require('assets/images/projects/brewsters_angle/brewsters_angle_3.jpg')" style="max-width: 400;" /> <img src="require('assets/images/projects/brewsters_angle/brewsters_angle_4.jpg')" style="max-width: 400;" /> </center>

The next thing we did was create the software UI and motor controllers. We needed a way to orchestrate the whole process that our experiment required. This involved moving the stepper motors and then collecting the data off the lock-in amplifier. We wanted a simple GUI that would be versatile in the data input methods. We decided to go with a LabVIEW front end and a Arduino (coded in C) backend to control the stepper motors. The LabVIEW code included software to setup the instrumentation before each scan. The software would then communicate with an Arduino via NI-DAQ digital output and the Arduino would control the stepper motors by use of an h-bridge. The Lock-in amplifier was interfaced with using a supplied VISA/GPIB cable. The information was then read into a xml file and the data analyzed using Mathematica.

<center> <img src="require('assets/images/projects/brewsters_angle/arduino_program_1.png')" style="max-width: 500;" /> </center>

<center> <img src="require('assets/images/projects/brewsters_angle/brewsters_angle_labview_1.jpg')" style="max-width: 300;" /> <img src="require('assets/images/projects/brewsters_angle/hackathon_2.jpg')" style="max-width: 300;" /> </center>

I coded most of the software involved with this project during a "Hackathon" put on by the BYU computer science club titled "ACM". This was in-part sponsored by companies like Goldman-Sachs, Qualtrics, and Microsoft. Thanks to their sponsorship I won a pair of nice headphones.

<center> <img src="require('assets/images/projects/brewsters_angle/hackathon_1.jpg')" style="max-width: 300;" /> </center>

We only had time to collect data for one sample which was an optical prism of unknown index. We fitted our data to our model and found the index to be about 1.43 plus/minus .007 . This corresponds to a Brewster's angle of about 55 degrees.

<center> <img src="require('assets/images/projects/brewsters_angle/brewsters_angle_data_3.jpg')" style="max-width: 406;" /> <img src="require('assets/images/projects/brewsters_angle/brewsters_angle_data_2.jpg')" style="max-width: 406;" /> </center>

A huge thanks to Ryan Doel for helping me with this project. He's probably the best lab partner ever.

<center> <img src="require('assets/images/projects/brewsters_angle/brewsters_angle_1.jpg')" style="max-width: 450;" /> </center>

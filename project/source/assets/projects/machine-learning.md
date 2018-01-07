These past 4 months I implemented from scratch a variety of common machine
learning algorithms in Scala. I used code provided by my
class that was written in Java. Because of this, Not all of the code could be
written immutably, but most of it was.

I wrote algorithms for the perceptron, multi-layer perceptron / neural net with
backpropagation, decision tree, nearest-neighbor (knn), and clustering (kmeans).

For a final project, I combined what I learned and built a machine that would
take as input a sound file of an animal noise and then would classify which
species and family the sound file was generated from. My team and I tried a bunch of
different algorithms provided on common machine learning frameworks such as Weka, but what
ended up being the best was a convolutional neural net. These are normally used
in image recognition and so the reduction of sound files to image files was very
involved.

To accomplish this, I used my physics knowledge
and applied fourier analysis to the sound data. My team and I collected a data
set of a few thousand sound files which we then processed using an FFT algorithm
to transform the temporal sound to a frequency-based image file. Below is
an example of transforming the temporal sound (left) to it's frequency
spectrum (right).

<center> <img src="require('assets/images/projects/machine_learning/temporal_spectrum_1.png')" style="width: auto; height: 30vh;" /> <img src="require('assets/images/projects/machine_learning/fourier_spectrum_1.png')" style="width: auto; height: 30vh;" /> </center>

We then trained the algorithms on this new image data and tested it. We got a final accuracy
in the high 40% -- which may not seem like much, but choosing the correct species out of
hundreds was actually quite the feat. It was also hard to get a good accuracy because
of all the noise in the sound files. The fourier analysis had a lot of noise which
confused the algorithm. The baseline accuracy for a random classifier was 3% so 40%
was a great improvement.

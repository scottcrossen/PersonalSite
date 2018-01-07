I created this project as part of an exercise to learn OpenMP: the famous parallelizing
library for C and Fortran.

I started with code from [this link](https://gist.github.com/andrejbauer/7919569) on GitHub.
From there, I added OMP compilation flags and directives and also made it safe for use
with OMP by making temporary data structures instead of file writing statements.

I tested with 8, 4, 2, and 1 threads and found a speed-up as expected.

Here is one of the outputs of the program run with the command  
```./mandelbrot 0.27085 0.27100 0.004640 0.004810 1000 8192 pic.ppm```

<center> <img src="require('assets/images/projects/mandelbrot/mandelbrot_1.png')" /> </center>

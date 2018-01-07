This project was a simple proxy server implemented in C. The majority of this project
involved low-level header processing and handling. I threaded it using the pthreads
library in C.

As part of the threading, there was one master thread that would spin off the requisite
thread pool in addition to a thread for logging. After this happened, the master thread would
enter into a loop to enqueue connection requests made to the listening port. When a connection
was found, the master thread would push the file descriptor onto a queue which would then
be handled dynamically by the thread pool. A similar thing would happen whenever the
program needed to log output, though in this case there was only one worker thread.

One higher functionality that I built into the program was the ability for it to cache
proxy queries into an lru queue. As part of an earlier project, I built three different
types of queues: a Linked list queue, an array queue, and a memory mapped queue.
Each used a generic void\* pointer type. For this project I simply used the linked list queue
from before and casted data types to void\* with wrapper functions to handle enhanced functionality.

The end result was a threaded caching proxy server.

<center> <img src="require('assets/images/projects/proxy/proxy_diagram.png')" /> </center>

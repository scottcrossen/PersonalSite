This entry is kindof unorthodox in that it isn't about just one project but rather a series of projects that I completed as part of one of my courses. Normally I don't write about class projects, but I really enjoyed doing all of these projects so i made an exception.

While writing this I was trying to think of what pictures I could show, but I eventually gave up because most of these topics are abstract enough that the only pictures I could show are of terminals and computer consoles which would be boring.

So here's just some of the cool "hacking" things I've done recently:

1. I generated fake passwords and Unix shadow files and then cracked all the passwords using advanced password cracking software. I also took advantage of my machine's GPU which made it a lot quicker.
2. I also performed some "buffer overflow" / "stack smashing" procedures on vulnerable code that I was given. I used gdb (the linux debugger) to analyze the stack and disassembled code so that I could find the vulnerabilities.
3. After being given a piece of software that required authentication via a CD key I changed just enough hex code to bypass the proper routine and give myself full access.
4. I also extended a MAC (message authentication code) on a 'secure' message so that my own content could be appended without any party detecting the intrusion.


I did some other cool general-security things like actually implementing standards such as AES, Diffie-Hellman, and RSA. I wrote most of these in either Javascript or Go. I also used industry standard protocols like PGP to send encrypted messages back and forth with my classmates.

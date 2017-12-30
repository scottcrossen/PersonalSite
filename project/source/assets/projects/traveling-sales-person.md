The "traveling sales person" problem involves charting a course for a sales person to travel between different cities. Paths between cities have a characteristic distance and the goal of the problem is to reach all cities while minimizing the overall path distance.

For a school project I had the opportunity to design an algorithm that solves this problem. I did it many different ways but all of which I implemented in C#. The first method I implemented was a branch-and-bound algorithm that would score possible routes based on an estimated lower-bound to their solution. It would prune those possible paths that were obviously not near the correct solution. Given enough time this algorithm could find the optimal path that solves the problem.

I also implemented a much faster greedy method to solve for a near-perfect solution in polynomial time. The basic idea of this algorithm was to add each point to the partial-solution one at a time. The algorithm would add each point according to whatever one had the minimal cost to add.

<center> <img src="require('assets/images/projects/traveling_sales_person/tsp_custom_4.png')" style="width: 300; height: 298;" /> <img src="require('assets/images/projects/traveling_sales_person/tsp_custom_3.png')" style="width: 293; height: 300;" /> <img src="require('assets/images/projects/traveling_sales_person/tsp_custom_5.png')" style="width: 298; height: 300;" /> </center>

I ran the algorithm for a few points and also a large amount of points and each time it finished within a few seconds.

<center> <img src="require('assets/images/projects/traveling_sales_person/tsp_1.png')" style="width: 300; height: 259;" /> <img src="require('assets/images/projects/traveling_sales_person/tsp_2.png')" style="width: 300; height: 258;" /> </center>

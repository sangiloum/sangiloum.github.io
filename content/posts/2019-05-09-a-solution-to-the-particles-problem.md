---
title: "A solution to the Particles Problem"
slug: a-solution-to-the-particles-problem
featured_image: /legacy/2019/05/points2.png
featured_image_source: featured_media
categories:
  - math
---
[Prof. Yuval Peres](https://yuvalperes.com/) posted the [following very interesting problem on his blog](https://yuvalperes.com/Math-Expo/2019/05/09/hello-world/).  


{{< picture src="legacy/2019/05/points2.png" alt="" preserve_original="true" >}}


Suppose there are n particles in the unit square. Initially one particle is awake and all others are sleeping. Each awake particle moves in the unit square at speed 1 in a direction you prescribe and wakes up any sleeping particle it encounters. The particles that are awake move simultaneously.

***Question:* Show that you can wake up all the particles by time 10.**



If you want to enjoy the problem, then please do not read below.



## An easy solution

Here is an easy solution to show that we can wake up all the particles in time \(4\sqrt{5}\), less than **8.95**.

(I discussed with [Sang June Lee](https://sites.google.com/site/sjlee242/) and [Dong Yeap Kang](https://mathsci.kaist.ac.kr/~dykang/).) The idea is to partition the unit square into 4 cells, say A, B, C, D in the counterclockwise order, each of which is a square of the half size. Here is a rough sketch. (I didn’t bother to write the base case or other degenerate cases having some empty cells.)

**Proof Sketch:** *The first awake particle P visits each nonempty cell to wake at least one and return to the initial cell. That requires P to move at most ​\(\sqrt{5}/2\cdot 4\). By the induction hypothesis, each cell can be cleared in time \(4\sqrt{5}/2\)​ because each cell has the half size and so it takes half the time to wake all the particles. This means that the total time to wake all the particles is at most \(4\sqrt{5}\)​.*

## A slightly faster solution

Of course there must be better strategies for P to wake one particle in each nonempty cell quickly. Here is what we came up with, which shows that one can wake up all the particles in time \(2\sqrt{5}+2\), less than **6.48**.

**Proof Sketch:***By symmetry, we may assume that A contains P initially.*

*Case 1: Suppose that A has another point Q other than P. Then P first moves to Q and then proceeds to a point in B and then a point in C. The point Q will move to a point in D and return to another point in A if there are. Then every nonempty cell will have at least one awake particle, in time \(\frac{\sqrt{2}}{2}+2 \frac{\sqrt{5}}{2}=\sqrt{5}+\sqrt{2}/2<\sqrt{5}+1\), as P and Q will move in parallel.*

*Case 2: Suppose that P is the unique point in A. Then P visits B, C and D. This requires P to travel at most \(\sqrt{5}+1\)​. (Of course, this requires a geometric proof. )*

*So, after time \(\sqrt{5}+1\) ​, each nonempty cell has at least one awake particle and it takes another ​\(\sqrt{5}+1\) time to clear every cell by the induction hypothesis. So the total time to wake all is at most ​\(2\sqrt{5}+2\).*

## Remark

In the above proof, we use a simple inequality like this: Let P, Q, R, S be a point in A, B, C, D respectively. Then \(PQ+QR+RS\le \sqrt{5}+1\). To see this, we may assume that P, S are on the top border of the unit square. We may also assume that P or Q is on the left border. By flipping the x-coordinates of P and Q, we may assume that Q is on the left border. Then we may assume that P is the middle point of the top border. Then by symmetry we may assume that P=S. We may assume that Q or R is on the bottom border. By symmetry we may say that Q is at the left bottom corner. Then it must be an easy exercise to show that PQ+QR+RS is maximized when R is the right bottom corner. However, I believe that this can be improved because when P is close to S, then P can visit in the opposite order, P, S, R, Q.  

**Question:** What would be the best upper bound?

---
title: "Dynamic survey on rank-width"
permalink: /2013/dynamic-survey-on-rank-width/
description: Migrated from legacy IBS WordPress.
canonical_url: https://sangiloum.github.io/2013/dynamic-survey-on-rank-width/
categories:
  - math
---
Note added on Jan. 2019: An improved version of this article has been published as a [journal paper in Discrete Applied Mathematics](https://doi.org/10.1016/j.dam.2016.08.006).  

# Dynamic survey on rank-width and related width parameters of graphs

### Sang-il Oum

### Aug 19, 2013

<div class="p">

 

</div>

This is an incomplete on-going survey on rank-width and its related parameters. I intend to expand it slowly.  
By no means, this will be complete.  
Please feel free to leave comments or give me suggestions.

<div class="p">

 

</div>

## 1  Definitions

Rank-width was introduced by Oum and Seymour \[[35](#OS2004)\].  
Clique-width is defined and investigated first by Courcelle and Olariu \[[5](#CO2000)\] published in 2000, but the operations for clique-width has been introduced by Courcelle, Engelfriet, and Rozenberg \[[4](#CER1993)\] in 1993.  
NLC-width was introduced by Wanke \[[40](#Wanke1994)\] in 1994.  
Boolean-width was introduced by Bui-Xuan, Telle, and Vatshelle \[[2](#BTV2011)\].

<div class="p">

 

</div>

## 2  Well-quasi-ordering

Oum \[[31](#Oum2004a)\] proved that graphs of bounded rank-width are well-quasi-ordered under taking pivot-minors.  
This result has been generalized to

1.  skew-symmetric or symmetric matrices over a fixed finite field  
    by Oum \[[34](#Oum2006b)\],
    <div class="p">
     
    </div>
2.  σ-symmetric matrices over a fixed finite field by Kante \[[20](#Kante2012)\].
    <div class="p">
     
    </div>

<div class="p">

 

</div>

## 3  Forbidden vertex-minors

Oum \[[29](#Oum2004)\] showed that if a graph has rank-width *k*, then so is its vertex-minor.  
This, together with the well-quasi-ordering theorem \[[31](#Oum2004a)\] implies that  
for each *k*, there exists a list of finitely many graphs such that a graph has rank-width at most *k* if and only if none of its vertex-minors is isomorphic to a graph in the list.

<div class="p">

 

</div>

Oum \[[29](#Oum2004)\] showed that for each *k*, the forbidden vertex-minor for rank-width at most *k* has at most (6<sup>*k*+1</sup>−1)/5 vertices.  
So in theory, we can enumerate all of them by an algorithm for fixed *k*.

<div class="p">

 

</div>

However, it is not clear how to find the list of forbidden vertex-minors  
for graphs of linear rank-width at most *k*,  
as there are no analogous upper bound on the size of forbidden vertex-minors. Jeong, Kwon, and Oum \[[16](#JKO2013)\]  
showed that there are at least 3<sup>Ω(3<sup>*k*</sup>)</sup> forbidden vertex-minors for linear rank-width at most *k*.

<div class="p">

 

</div>

## 4  Hardness

Computing rank-width is NP-hard. It can be easily deduced by combining the following known facts. This reduction is mentioned in \[[30](#Oum2006)\].

1.  Seymour and Thomas \[[37](#ST1994)\] proved that computing branch-width is NP-hard.  
    Kloks, Kratochvíl, and Müller \[[21](#KKM2005)\] even showed that it is NP-hard to compute branch-width of interval graphs.
    <div class="p">
     
    </div>
2.  Hicks and McMurray Jr. \[[13](#HM2005)\] and independently Mazoit and Thomassé \[[26](#MT2005)\] showed that if a graph *G* is not a forest, then the branch-width of the cycle matroid *M*(*G*) is equal to the branch-width of *G*.
    <div class="p">
     
    </div>
3.  Oum \[[29](#Oum2004)\] showed that the branch-width of a binary matroid is equal to the rank-width of its fundamental graph. Every graphic matroid is binary.
    <div class="p">
     
    </div>

It is not known to me whether computing linear rank-width is NP-hard.

<div class="p">

 

</div>

Computing clique-width is NP-hard, shown by Fellows, Rosamond, Rotics, and Szeider \[[8](#FRRS2009)\].

<div class="p">

 

</div>

Computing the relative clique-width is also NP-complete, shown by Müller and Urner \[[27](#MU2010)\]. The relative clique-width \[[24](#LR2007)\] is a clique-width restricted to a fixed decomposition tree.

<div class="p">

 

</div>

Gurski and Wanke \[[12](#GW2004b)\] proved that computing NLC-width is  
also NP-hard via a reduction from the tree-width.

<div class="p">

 

</div>

## 5  Finding an approximate rank-decomposition for a fixed *k*

<div class="p">

 

</div>

Oum and Seymour \[[35](#OS2004)\] provided an algorithm to  
find a rank-decomposition of width at most 3*k*+1 or confirm that the input graph has rank-width bigger than *k*  
in time *O*(8<sup>*k*</sup> *n*<sup>9</sup> log*n*).  
(Here, *n* is the number of vertices of the input graph.)  
The running time was later improved by Oum \[[30](#Oum2006)\]  
to *O*(8<sup>*k*</sup> *n*<sup>4</sup>).

<div class="p">

 

</div>

This allows us to find a rank-decomposition of width at most *c*′ times rank-width  
if the rank-width is at most *c*log*n* in polynomial time.  
This is used in the quantum information theory (see Van den Nest, Dür, Vidal, and Briegel \[[38](#VDVB2007)\]) for their study on measurement-based quantum computation.

<div class="p">

 

</div>

If we do not mind having bigger function in *k*, then in the same paper \[[30](#Oum2006)\], it is possible to find a rank-decomposition of width 3*k*−1 or  
confirm that the rank-width is bigger than *k* in time *O*(*f*(*k*)*n*<sup>3</sup>).

<div class="p">

 

</div>

We do not know whether there is an algorithm to find an approximate rank-decomposition of width *O*(*k*) in time *O*(*c*<sub>1</sub><sup>*k*</sup> *n*<sup>*c*</sup>) for *c* ≤ 3  
when an input graph has rank-width at most *k*.

<div class="p">

 

</div>

These algorithms can be used as a tool to construct an expression for clique-width decomposition, which are essential in many algorithmic applications.

<div class="p">

 

</div>

## 6  Deciding rank-width at most *k* for fixed *k*

There is a general algorithm of Oum and Seymour \[[36](#OS2005)\] which can construct a branch-decomposition of any symmetric submodular function in time *O*(*n*<sup>8*k*+*c*</sup>), and if we apply it to rank-width, we get an algorithm of running time *O*(*n*<sup>8*k*+12</sup>log*n*).  
Note that a simple general algorithm for path-width of any symmetric submodular function  
was developed by Nagamochi \[[28](#Nagamochi2012)\], which is applicable to linear rank-width in time *O*(*n*<sup>2*k*+4</sup>).

<div class="p">

 

</div>

Courcelle and Oum \[[6](#CO2004)\] first constructed an algorithm to decide, for fixed *k*, whether rank-width is at most *k* in time *O*(*f*(*k*)*n*<sup>3</sup>). But their algorithm uses the monadic second-order logic formula and does not provide an explicit rank-decomposition even if it exists.

<div class="p">

 

</div>

This problem was solved later.  
Hlinený and Oum \[[14](#HO2006)\] constructed an algorithm to decide whether rank-width is at most *k*  
and find a rank-decomposition of width at most *k*, if it exists, in time *O*(*f*(*k*)*n*<sup>3</sup>).  
Here, *f*(*k*) is growing very fast with *k*, because the algorithm uses the monadic second-order logic as well as the list of forbidden minors for branch-width at most *k* for matroids representable over a fixed finite field.  
Geelen, Gerards, Robertson, and Whittle \[[11](#GGRW2003a)\] proved that the forbidden minors for matroids of branch-width at most *k* have at most (6<sup>*k*</sup>−1)/5 elements. This implies that we can construct an explicit algorithm for testing rank-width at most *k* and constructing a rank-decomposition of width at most *k* if it exists. (If there was no upper bound, then it may be impossible to enumerate all forbidden minors.)

<div class="p">

 

</div>

One can also decide whether the linear rank-width is at most *k* in time *O*(*n*<sup>3</sup>) by using the well-quasi-ordering theorem \[[31](#Oum2004a)\] and monadic second-order logic formula to test vertex-minors \[[6](#CO2004)\]. But it is not known how to find the list of forbidden vertex-minors.

<div class="p">

 

</div>

<div class="p">

 

</div>

Wahlström \[[39](#Wahlstrom2011)\] showed that deciding whether clique-width is at most *k* and finding a *k*-expression can be done in time *O*<sup>\*</sup>((2*k*+1)<sup>*n*</sup>).

<div class="p">

 

</div>

Espelage, Gurski, and Wanke \[[7](#EGW2003)\] constructed an algorithm to decide whether a graph has clique-width at most *k* for graphs of bounded tree-width.

<div class="p">

 

</div>

## 7  Relation to Tree-width

<div class="p">

 

</div>

Kante \[[19](#Kante2006a)\] showed that rank-width is at most 4*k*+2 if the tree-width is *k*.  
Later,  
Oum \[[32](#Oum2006c)\] showed that rank-width is at most *k*+1 if tree-width is *k*.  
In fact, it is shown that

> 
> 
> <div>
> 
> if *G* has branch-width *k*,  
> then the incidence graph of *G* has rank-width *k* or *k*−1,  
> unless *k*=0.
> 
> </div>

<div class="p">

 

</div>

Corneil and Rotics \[[3](#CR2005)\] showed that the clique-width is at most 3·2<sup>*k*−1</sup> if the tree-width is *k*.  
Moreover, they proved that for each *k*, there is a graph *G* having tree-width *k* and clique-width at least 2<sup>*k*/2−1</sup>.  
This also implies that there are graphs having rank-width at most *k*+1 and clique-width at least 2<sup>*k*/2−1</sup> for each *k*.

<div class="p">

 

</div>

Kwon and Oum \[[22](#KO2013)\] proved that every graph of rank-width *k*  
is a pivot-minor of a graph of tree-width at most 2*k*.  
They also proved that every graph of linear rank-width *k* is a pivot-minor of a graph of path-width *k*+1.  
In other words,  
a set *I* of graphs has bounded rank-width  
if and only if it is a set of pivot-minors of graphs of bounded tree-width.

<div class="p">

 

</div>

Fomin, Oum, and Thilikos \[[10](#FOT2010)\] showed that when graphs are planar, or *H*-minor-free, then  
having bounded tree-width is equivalent to having bounded rank-width.  
For instance, if a graph *G* is planar and has rank-width *k*,  
then tree-width is at most 72*k*−2.  
If *G* of rank-width *k*  
has no *K*<sub>*r*</sub> minor with *r* \> 2, then tree-width is at most 2<sup>*O*(*r*loglog*r*)</sup>*k*.  
This is already proven in Courcelle and Olariu \[[5](#CO2000)\] without explicit bounds because they use logical tools.

<div class="p">

 

</div>

## 8  Exact Algorithms

There are small number of papers dealing with computing exact value of rank-width or related width parameters.

<div class="p">

 

</div>

<div style="text-align: center;">

|                   |                                   |                        |
| :---------------: | :-------------------------------: | :--------------------: |
|  Width Parameter  |           Running time            |         Paper          |
|    Rank-width     | *O*<sup>\*</sup>(2<sup>*n*</sup>) | Oum \[[33](#Oum2009)\] |
| Linear rank-width | *O*<sup>\*</sup>(2<sup>*n*</sup>) |   forklore (trivial)   |

</div>

The running time to compute clique-width exactly seems open.

<div class="p">

 

</div>

Müller and Urner \[[27](#MU2010)\] proved that NLC-width can be computed in time *O*(3<sup>*n*</sup> *n*) for an *n*-vertex graph.  
When they gave a talk at GROW2007 about this result, they further claimed that clique-width can be computed in time *O*<sup>\*</sup>(3<sup>*n*</sup>) by finding a polynomial-time algorithm to compute relative clique-width \[[24](#LR2007)\] but later Ruth Urner emailed me that there was a mistake.

<div class="p">

 

</div>

Branch-width of graphs can be computed in time *O*<sup>\*</sup>((2√3)<sup>*n*</sup>), shown by Fomin, Mazoit, and Todinca \[[9](#FMT2008)\].

<div class="p">

 

</div>

## 9  Random graphs

Lee, Lee, and Oum \[[23](#LLO2010)\] showed that asymptotically almost surely the Erdös-Rényi random graph *G*(*n*,*p*) has rank-width *n*/3−*O*(1) if *p* is a constant between 0 and 1.  
Furthermore, \[1/(*n*)\] \<\< *p* ≤ \[1/2\], then the rank-width is \[(*n*)/3\]−*o*(*n*),  
and if *p* = *c*/*n* and *c* \> 1, then rank-width is at least *r* *n* for some *r* = *r*(*c*).

<div class="p">

 

</div>

Since the clique-width is at least rank-width, this also gives a lower bound for clique-width.

<div class="p">

 

</div>

Adler, Bui-Xuan, Rabinovich, Renault, Telle, and Vatshelle \[[1](#ABRRTV2010)\] claimed that boolean-width of *G*(*n*,*p*) for fixed 0 \< *p* \< 1 is Θ(log<sup>2</sup> *n*) asymptotically almost surely.

<div class="p">

 

</div>

<div class="small">

**Remark.**  
Johansson \[[17](#Johansson1998)\] (also in his Ph.D. thesis  
\[[18](#Johansson2001b)\]) claimed in a conference paper that NLC-width  
and clique-width of a random graph *G*(*n*,*p*) for a fixed 0 \< *p* \< 1 is  
Ω(*n*) almost surely. But we believe that the proof is incorrect.

<div class="p">

 

</div>

In 2009, Marecek \[[25](#Marecek2009)\] studied the rank-width  
of *G*(*n*,1/2), though I believe that the first version of his paper on  
arxiv[<sup>1</sup>](#tthFtNtAAB) is  
incorrect; Later versions have different proofs.

<div class="p">

 

</div>

</div>

## 10  Explicit graphs

Jelínek \[[15](#Jelinek2010)\] proved that an *n*×*n* grid has rank-width *n*−1.

<div class="p">

 

</div>

## 11  Software

Philipp Klau Krause implemented a simple dynamic programming algorithm  
to compute the rank-width of a graph[<sup>2</sup>](#tthFtNtAAC).  
This software is now included in the open source mathematics software  
package called SAGE; see the  
manual[<sup>3</sup>](#tthFtNtAAD).

<div class="p">

 

</div>

Apparently Friedmanský wrote Master’s thesis on “implementation of  
optimization of a graph algorithm for computing rank-width”[<sup>4</sup>](#tthFtNtAAE) under the  
supervision of Robert Ganian.

<div class="p">

 

</div>

## Acknowledgment

I would like to thank careful readers who kindly emailed me  
suggestions for this survey.

  - August 2013: Jisu Jeong found a typo.
    <div class="p">
     
    </div>
  - August 2013: Chiheon Kim pointed out a mistake on the statement  
    on the consequence of a theorem by Corneil and Rotics.
    <div class="p">
     
    </div>
  - July 2013: J. Marecek explained his paper on arxiv.
    <div class="p">
     
    </div>
  - July 2013: F. Gurski provided a journal version of his paper  
    with E. Wanke cited  
    in the survey.
    <div class="p">
     
    </div>

<div class="p">

 

</div>

<div class="p">

 

</div>

## References

  - [\[1\]](#CITEABRRTV2010)  
    Isolde Adler, Binh-Minh Bui-Xuan, Yuri Rabinovich, Gabriel Renault, Jan Arne  
    Telle, and Martin Vatshelle.  
    On the Boolean-width of a graph: structure and applications.  
    In *Graph-theoretic concepts in computer science*, volume 6410 of  
    *Lecture Notes in Comput. Sci.*, pages 159-170. Springer, Berlin, 2010.  
    [doi:10.1007/978-3-642-16926-7\_16](https://doi.org/10.1007/978-3-642-16926-7_16).
    <div class="p">
     
    </div>
  - [\[2\]](#CITEBTV2011)  
    Binh-Minh Bui-Xuan, Jan Arne Telle, and Martin Vatshelle.  
    Boolean-width of graphs.  
    *Theoret. Comput. Sci.*, 412(39):5187-5204, 2011.  
    [doi:10.1016/j.tcs.2011.05.022](https://doi.org/10.1016/j.tcs.2011.05.022).
    <div class="p">
     
    </div>
  - [\[3\]](#CITECR2005)  
    Derek G. Corneil and Udi Rotics.  
    On the relationship between clique-width and treewidth.  
    *SIAM J. Comput.*, 34(4):825-847 (electronic), 2005.  
    [doi:10.1137/S0097539701385351](https://doi.org/10.1137/S0097539701385351).
    <div class="p">
     
    </div>
  - [\[4\]](#CITECER1993)  
    Bruno Courcelle, Joost Engelfriet, and Grzegorz Rozenberg.  
    Handle-rewriting hypergraph grammars.  
    *J. Comput. System Sci.*, 46(2):218-270, 1993.  
    [doi:10.1016/0022-0000(93)90004-G](https://doi.org/10.1016/0022-0000\(93\)90004-G).
    <div class="p">
     
    </div>
  - [\[5\]](#CITECO2000)  
    Bruno Courcelle and Stephan Olariu.  
    Upper bounds to the clique width of graphs.  
    *Discrete Appl. Math.*, 101(1-3):77-114, 2000.  
    [doi:10.1016/S0166-218X(99)00184-5](https://doi.org/10.1016/S0166-218X\(99\)00184-5).
    <div class="p">
     
    </div>
  - [\[6\]](#CITECO2004)  
    Bruno Courcelle and Sang-il Oum.  
    Vertex-minors, monadic second-order logic, and a conjecture by  
    Seese.  
    *J. Combin. Theory Ser. B*, 97(1):91-126, 2007.  
    [doi:10.1016/j.jctb.2006.04.003](https://doi.org/10.1016/j.jctb.2006.04.003).
    <div class="p">
     
    </div>
  - [\[7\]](#CITEEGW2003)  
    Wolfgang Espelage, Frank Gurski, and Egon Wanke.  
    Deciding clique-width for graphs of bounded tree-width.  
    *Journal of Graph Algorithms and Applications*, 7(2):141-180,  
    2003\.
    <div class="p">
     
    </div>
  - [\[8\]](#CITEFRRS2009)  
    Michael R. Fellows, Frances A. Rosamond, Udi Rotics, and Stefan Szeider.  
    Clique-width is NP-complete.  
    *SIAM J. Discrete Math.*, 23(2):909-939, 2009.  
    [doi:10.1137/070687256](https://doi.org/10.1137/070687256).
    <div class="p">
     
    </div>
  - [\[9\]](#CITEFMT2008)  
    Fedor Fomin, Frédéric Mazoit, and Ioan Todinca.  
    Computing branchwidth via efficient triangulations and blocks.  
    *Discrete Appl. Math.*, 157(12):2726-2736, 2009.  
    [doi:10.1016/j.dam.2008.08.009](https://doi.org/10.1016/j.dam.2008.08.009).
    <div class="p">
     
    </div>
  - [\[10\]](#CITEFOT2010)  
    Fedor V. Fomin, Sang-il Oum, and Dimitrios M. Thilikos.  
    Rank-width and tree-width of *H*-minor-free graphs.  
    *European J. Combin.*, 31(7):1617-1628, 2010.  
    [doi:10.1016/j.ejc.2010.05.003](https://doi.org/10.1016/j.ejc.2010.05.003).
    <div class="p">
     
    </div>
  - [\[11\]](#CITEGGRW2003a)  
    James F. Geelen, A. M. H. Gerards, Neil Robertson, and Geoff Whittle.  
    On the excluded minors for the matroids of branch-width *k*.  
    *J. Combin. Theory Ser. B*, 88(2):261-265, 2003.
    <div class="p">
     
    </div>
  - [\[12\]](#CITEGW2004b)  
    Frank Gurski and Egon Wanke.  
    Line graphs of bounded clique-width.  
    *Discrete Math.*, 307(22):2734-2754, 2007.  
    [doi:10.1016/j.disc.2007.01.020](https://doi.org/10.1016/j.disc.2007.01.020).
    <div class="p">
     
    </div>
  - [\[13\]](#CITEHM2005)  
    Illya V. Hicks and Nolan B. McMurray Jr.  
    The branchwidth of graphs and their cycle matroids.  
    *J. Combin. Theory Ser. B*, 97(5):681-692, 2007.  
    [doi:10.1016/j.jctb.2006.12.007](https://doi.org/10.1016/j.jctb.2006.12.007).
    <div class="p">
     
    </div>
  - [\[14\]](#CITEHO2006)  
    Petr Hlinený and Sang-il Oum.  
    Finding branch-decompositions and rank-decompositions.  
    *SIAM J. Comput.*, 38(3):1012-1032, 2008.  
    [doi:10.1137/070685920](https://doi.org/10.1137/070685920).
    <div class="p">
     
    </div>
  - [\[15\]](#CITEJelinek2010)  
    Vít Jelínek.  
    The rank-width of the square grid.  
    *Discrete Appl. Math.*, 158(7):841-850, 2010.  
    [doi:10.1016/j.dam.2009.02.007](https://doi.org/10.1016/j.dam.2009.02.007).
    <div class="p">
     
    </div>
  - [\[16\]](#CITEJKO2013)  
    Jisu Jeong, O-joung Kwon, and Sang-il Oum.  
    Excluded vertex-minors for graphs of linear rank-width at most *k*.  
    In Natacha Portier and Thomas Wilke, editors, *30th International  
    Symposium on Theoretical Aspects of Computer Science (STACS 2013)*, volume 20  
    of *Leibniz International Proceedings in Informatics (LIPIcs)*, pages  
    221-232, Kiel, Germany, 2013. Schloss Dagstuhl. Leibniz-Zent. Inform.  
    URL: [`http://drops.dagstuhl.de/opus/volltexte/2013/3936`](https://drops.dagstuhl.de/opus/volltexte/2013/3936/), [doi:10.4230/LIPIcs.STACS.2013.221](https://doi.org/10.4230/LIPIcs.STACS.2013.221).
    <div class="p">
     
    </div>
  - [\[17\]](#CITEJohansson1998)  
    Öjvind Johansson.  
    Clique-decomposition, NLC-decomposition, and modular  
    decomposition-relationships and results for random graphs.  
    In *Proceedings of the Twenty-ninth Southeastern International  
    Conference on Combinatorics, Graph Theory and Computing (Boca Raton, FL,  
    1998\)*, volume 132, pages 39-60, 1998.
    <div class="p">
     
    </div>
  - [\[18\]](#CITEJohansson2001b)  
    Öjvind Johansson.  
    *Graph decomposition using node labels*.  
    PhD thesis, Royal Institute of Technology, 2001.
    <div class="p">
     
    </div>
  - [\[19\]](#CITEKante2006a)  
    Mamadou Moustapha Kanté.  
    Vertex-minor reductions can simulate edge contractions.  
    *Discrete Appl. Math.*, 155(17):2328-2340, 2007.  
    [doi:10.1016/j.dam.2007.06.011](https://doi.org/10.1016/j.dam.2007.06.011).
    <div class="p">
     
    </div>
  - [\[20\]](#CITEKante2012)  
    Mamadou Moustapha Kanté.  
    Well-quasi-ordering of matrices under Schur complement and  
    applications to directed graphs.  
    *European J. Combin.*, 33(8):1820-1841, 2012.  
    [doi:10.1016/j.ejc.2012.03.034](https://doi.org/10.1016/j.ejc.2012.03.034).
    <div class="p">
     
    </div>
  - [\[21\]](#CITEKKM2005)  
    Ton Kloks, Jan Kratochvíl, and Haiko Müller.  
    Computing the branchwidth of interval graphs.  
    *Discrete Appl. Math.*, 145(2):266-275, 2005.  
    [doi:10.1016/j.dam.2004.01.015](https://doi.org/10.1016/j.dam.2004.01.015).
    <div class="p">
     
    </div>
  - [\[22\]](#CITEKO2013)  
    O-joung Kwon and Sang-il Oum.  
    Graphs of small rank-width are pivot-minors of graphs of small  
    tree-width.  
    *Discrete Appl. Math.*, 2013.  
    [doi:10.1016/j.dam.2013.01.007](https://doi.org/10.1016/j.dam.2013.01.007).
    <div class="p">
     
    </div>
  - [\[23\]](#CITELLO2010)  
    Choongbum Lee, Joonkyung Lee, and Sang-il Oum.  
    Rank-width of random graphs.  
    *J. Graph Theory*, 70(3):339-347, July/August 2012.  
    [doi:10.1002/jgt.20620](https://doi.org/10.1002/jgt.20620).
    <div class="p">
     
    </div>
  - [\[24\]](#CITELR2007)  
    Vadim Lozin and Dieter Rautenbach.  
    The relative clique-width of a graph.  
    *J. Combin. Theory Ser. B*, 97(5):846-858, 2007.  
    [doi:10.1016/j.jctb.2007.04.001](https://doi.org/10.1016/j.jctb.2007.04.001).
    <div class="p">
     
    </div>
  - [\[25\]](#CITEMarecek2009)  
    Jakub Marecek.  
    Some probabilistic results on width measures of graphs.  
    Unpublished, 08 2009.  
    [arXiv:0908.1772v1](https://arxiv.org/abs/0908.1772v1).
    <div class="p">
     
    </div>
  - [\[26\]](#CITEMT2005)  
    Frédéric Mazoit and Stéphan Thomassé.  
    Branchwidth of graphic matroids.  
    In Anthony Hilton and John Talbot, editors, *Surveys in  
    Combinatorics 2007*, volume 346 of *London Math. Soc. Lecture Note Ser.*,  
    pages 275-286. Cambridge Univ. Press, Cambridge, 2007.
    <div class="p">
     
    </div>
  - [\[27\]](#CITEMU2010)  
    Haiko Müller and Ruth Urner.  
    On a disparity between relative cliquewidth and relative NLC-width.  
    *Discrete Appl. Math.*, 158(7):828-840, 2010.  
    [doi:10.1016/j.dam.2009.06.024](https://doi.org/10.1016/j.dam.2009.06.024).
    <div class="p">
     
    </div>
  - [\[28\]](#CITENagamochi2012)  
    Hiroshi Nagamochi.  
    Linear layouts in submodular systems.  
    In Kun-Mao Chao, Tsan-sheng Hsu, and Der-Tsai Lee, editors, *  
    ISAAC ’12*, volume 7676 of *Lecture Notes in Comput. Sci.*, pages  
    475-484. Springer Berlin Heidelberg, 2012.  
    [doi:10.1007/978-3-642-35261-4\_50](https://doi.org/10.1007/978-3-642-35261-4_50).
    <div class="p">
     
    </div>
  - [\[29\]](#CITEOum2004)  
    Sang-il Oum.  
    Rank-width and vertex-minors.  
    *J. Combin. Theory Ser. B*, 95(1):79-100, 2005.  
    [doi:10.1016/j.jctb.2005.03.003](https://doi.org/10.1016/j.jctb.2005.03.003).
    <div class="p">
     
    </div>
  - [\[30\]](#CITEOum2006)  
    Sang-il Oum.  
    Approximating rank-width and clique-width quickly.  
    *ACM Trans. Algorithms*, 5(1):Art. 10, 20, 2008.  
    [doi:10.1145/1435375.1435385](https://doi.org/10.1145/1435375.1435385).
    <div class="p">
     
    </div>
  - [\[31\]](#CITEOum2004a)  
    Sang-il Oum.  
    Rank-width and well-quasi-ordering.  
    *SIAM J. Discrete Math.*, 22(2):666-682, 2008.  
    [doi:10.1137/050629616](https://doi.org/10.1137/050629616).
    <div class="p">
     
    </div>
  - [\[32\]](#CITEOum2006c)  
    Sang-il Oum.  
    Rank-width is less than or equal to branch-width.  
    *J. Graph Theory*, 57(3):239-244, 2008.  
    [doi:10.1002/jgt.20280](https://doi.org/10.1002/jgt.20280).
    <div class="p">
     
    </div>
  - [\[33\]](#CITEOum2009)  
    Sang-il Oum.  
    Computing rank-width exactly.  
    *Inform. Process. Lett.*, 109(13):745-748, 2009.  
    [doi:10.1016/j.ipl.2009.03.018](https://doi.org/10.1016/j.ipl.2009.03.018).
    <div class="p">
     
    </div>
  - [\[34\]](#CITEOum2006b)  
    Sang-il Oum.  
    Rank-width and well-quasi-ordering of skew-symmetric or symmetric  
    matrices.  
    *Linear Algebra Appl.*, 436(7):2008-2036, 2012.  
    [doi:10.1016/j.laa.2011.09.027](https://doi.org/10.1016/j.laa.2011.09.027).
    <div class="p">
     
    </div>
  - [\[35\]](#CITEOS2004)  
    Sang-il Oum and Paul Seymour.  
    Approximating clique-width and branch-width.  
    *J. Combin. Theory Ser. B*, 96(4):514-528, 2006.  
    [doi:10.1016/j.jctb.2005.10.006](https://doi.org/10.1016/j.jctb.2005.10.006).
    <div class="p">
     
    </div>
  - [\[36\]](#CITEOS2005)  
    Sang-il Oum and Paul Seymour.  
    Testing branch-width.  
    *J. Combin. Theory Ser. B*, 97(3):385-393, 2007.  
    [doi:10.1016/j.jctb.2006.06.006](https://doi.org/10.1016/j.jctb.2006.06.006).
    <div class="p">
     
    </div>
  - [\[37\]](#CITEST1994)  
    Paul Seymour and Robin Thomas.  
    Call routing and the ratcatcher.  
    *Combinatorica*, 14(2):217-241, 1994.  
    [doi:10.1007/BF01215352](https://doi.org/10.1007/BF01215352).
    <div class="p">
     
    </div>
  - [\[38\]](#CITEVDVB2007)  
    M. Van den Nest, W. Dür, G. Vidal, and H. J. Briegel.  
    Classical simulation versus universality in measurement-based quantum  
    computation.  
    *Phys. Rev. A*, 75:012337, Jan 2007.  
    [doi:10.1103/PhysRevA.75.012337](https://doi.org/10.1103/PhysRevA.75.012337).
    <div class="p">
     
    </div>
  - [\[39\]](#CITEWahlstrom2011)  
    Magnus Wahlström.  
    New plain-exponential time classes for graph homomorphism.  
    *Theory Comput. Syst.*, 49(2):273-282, 2011.  
    [doi:10.1007/s00224-010-9261-z](https://doi.org/10.1007/s00224-010-9261-z).
    <div class="p">
     
    </div>
  - [\[40\]](#CITEWanke1994)  
    Egon Wanke.  
    *k*-NLC graphs and polynomial algorithms.  
    *Discrete Appl. Math.*, 54(2-3):251-266, 1994.  
    [doi:10.1016/0166-218X(94)90026-4](https://doi.org/10.1016/0166-218X\(94\)90026-4).

<div class="p">

 

</div>

-----

### Footnotes:

<div class="p">

 

</div>

<span id="tthFtNtAAB"></span>[<sup>1</sup>](#tthFrefAAB)<https://arxiv.org/pdf/0908.1772v1.pdf>

<div class="p">

 

</div>

<span id="tthFtNtAAC"></span>[<sup>2</sup>](#tthFrefAAC)[`http://pholia.tdi.informatik.uni-frankfurt.de/~philipp/software/rw.shtml`](https://web.archive.org/web/20160420004441/http://pholia.tdi.informatik.uni-frankfurt.de:80/~philipp/software/rw.shtml)

<div class="p">

 

</div>

<span id="tthFtNtAAD"></span>[<sup>3</sup>](#tthFrefAAD)[`http://www.sagemath.org/doc/reference/graphs/sage/graphs/graph_decompositions/rankwidth.html`](https://doc.sagemath.org/html/en/reference/graphs/sage/graphs/graph_decompositions/rankwidth.html)

<div class="p">

 

</div>

<span id="tthFtNtAAE"></span>[<sup>4</sup>](#tthFrefAAE)[`http://is.muni.cz/th/172614/fi_m/thesis.pdf`](https://is.muni.cz/th/172614/fi_m/thesis.pdf)

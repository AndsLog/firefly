# firefly algorithm demo

> 螢火蟲演算法(firefly algorithm)是一種啟發式算法，靈感來自於螢火蟲閃爍的行為。

> 螢火蟲的閃光，其主要目的是作為一個信號系統，以吸引其他的螢火蟲。

以下為螢火蟲演算法的流程圖

![PNG](img/flow.PNG)

以下為螢火蟲演算法的pseudocode

    Begin
      1) Objective function: {\displaystyle f(\mathbf {x} ),\quad \mathbf {x} =(x_{1},x_{2},...,x_{d})} f({\mathbf  {x}}),\quad {\mathbf  {x}}=(x_{1},x_{2},...,x_{d});
      2) Generate an initial population of fireflies {\displaystyle \mathbf {x} _{i}\quad (i=1,2,\dots ,n)} {\mathbf  {x}}_{i}\quad (i=1,2,\dots ,n);.
      3) Formulate light intensity I so that it is associated with {\displaystyle f(\mathbf {x} )} f(\mathbf {x} )
      (for example, for maximization problems, {\displaystyle I\propto f(\mathbf {x} )} I\propto f({\mathbf  {x}}) or simply {\displaystyle I=f(\mathbf {x} )} I=f({\mathbf  {x}});)
      4) Define absorption coefficient γ
     
      While (t < MaxGeneration)
          for i = 1 : n (all n fireflies)
            for j = 1 : n (n fireflies)
                if ( {\displaystyle I_{j}>I_{i}} I_{j}>I_{i}),
                  Vary attractiveness with distance r via {\displaystyle \exp(-\gamma \;r)} \exp(-\gamma \;r);
                  move firefly i towards j;                
                  Evaluate new solutions and update light intensity;
                end if 
            end for j
          end for i
          Rank fireflies and find the current best;
      end while
    
      Post-processing the results and visualization;
    
    end

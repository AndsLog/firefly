# firefly algorithm demo

> 螢火蟲演算法(firefly algorithm)是一種啟發式算法，靈感來自於螢火蟲閃爍的行為。

> 螢火蟲的閃光，其主要目的是作為一個信號系統，以吸引其他的螢火蟲。

以下為螢火蟲演算法的流程圖

![PNG](img/flow.PNG)

以下為螢火蟲演算法的pseudocode

    Begin
      1) Objective function: $$ f(x), x=(x_1,x_2,...,x_d) $$;
      2) Generate an initial population of fireflies $$ x_i (i = 1,2,...,n) $$;
      3) Formulate light intensity I so that it is associated with $$ f(x) $$
      (for example, for maximization problems, $$ I\proptof(x)$$ or simply $$ I = f(x) $$;
      4) Define absorption coefficient $$ \gamma $$
     
      While (t < MaxGeneration)
          for i = 1 : n (all n fireflies)
            for j = 1 : n (n fireflies)
                if ( $$ I_j > I_i $$ ),
                  Vary attractiveness with distance r via $$ exp(-\gamma r)  $$;
                  move firefly i towards j;                
                  Evaluate new solutions and update light intensity;
                end if 
            end for j
          end for i
          Rank fireflies and find the current best;
      end while
    
      Post-processing the results and visualization;
    
    end

import React from 'react'; 

function HomePage() {
  return (
    <main className="center" id="main">

    <div className="page-area">

        <article aria-labelledby="stay-on-track">
            <h1 id="stay-on-track">Stay on track</h1>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </article>

        <article aria-labelledby="alerts">
            <h1 id="alerts">Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </article>

        
        <article aria-labelledby="results">
            <h1 id="results">Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </article>


        <article aria-labelledby="chart">
            <h1 id="chart">Chart</h1>
            <p>
                <canvas id="myChart" width="400" height="400"></canvas>
            </p>
        </article>

        <article aria-labelledby="d3jsChart">
            <h1 id="d3jsChartTitle">D3JS Chart</h1>
            <div id="d3jsChart"></div>   
        </article>
        

    </div>

</main> 

  );
}

export default HomePage;

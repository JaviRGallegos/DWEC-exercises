// EXERCICISE 1B => REPRESENT RANKING OF MOST TOURISTIC COUNTRIES USING GEOCHART

google.charts.load('current', {
    'packages':['geochart'],
    });
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['France', 1000],
        ['Spain', 900],
        ['United States', 800],
        ['China', 700],
        ['Italy', 600],
        ['Turkey', 500],
        ['Mexico', 400],
        ['Thailand', 300],
        ['Germany', 200],
        ['United Kingdom', 100]
        ]);

        var options = {
            title: "Countries ranked by popularity",
            width: "100%",
            height: "100vh",
            bar: { groupWidth: "95%" },
            legend: { position: "none" },
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
    }

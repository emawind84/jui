var chart = jui.include("chart.builder");

chart("#chart-content", {
    data : [
        { quarter : "1Q", sales : 50, profit : 45 },
        { quarter : "2Q", sales : 30, profit : 25 },
        { quarter : "3Q", sales : 15, profit : 10 },
        { quarter : "4Q", sales : 60, profit : 55 }
    ],
    grid : {
        x : {
            target : "quarter",
            line : true 
        },
        y : {
            type : "range",
            target : [ "sales", "profit" ],
            step : 10,
      		line : true 
        }
    },
    brush : [{
        type : "column",
        target : "sales",
        colors : [ 0 ],
        outerPadding : 15
    }, {
        type : "column",
        target : "profit",
        colors : [ 2 ],
        outerPadding : 30
    }],
    widget : [
        { type : "title", text : "Column Sample" },
        { type : "tooltip", position : "right", brush : [ 0, 1 ] },
        { type : "legend", brush : [ 0, 1 ] }
    ]
});
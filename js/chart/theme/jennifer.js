jui.define("chart.theme.jennifer", [], function() {

    /**
     * @class chart.theme.jennifer
     * Jennifer Theme
     * @singleton
     */
    var themeColors = [
        "#7977C2",
        "#7BBAE7",
        "#FFC000",
        "#FF7800",
        "#87BB66",
        "#1DA8A0",
        "#929292",
        "#555D69",
        "#0298D5",
        "#FA5559",
        "#F5A397",
        "#06D9B6",
        "#C6A9D9",
        "#6E6AFC",
        "#E3E766",
        "#C57BC3",
        "#DF328B",
        "#96D7EB",
        "#839CB5",
        "#9228E4"
    ];

    return {
        /** @cfg  */
    	backgroundColor : "white",
        /** @cfg  */
    	fontSize : "11px",
        /** @cfg   */
    	fontColor : "#333333",
        /** @cfg  */
		fontFamily : "arial,Tahoma,verdana",
        /** @cfg   */
        colors : themeColors,

        /** @cfg Grid Font Color */
    	gridFontColor : "#333333",
        /** @cfg Grid Active Font color */
    	gridActiveFontColor : "#ff7800",
        /** @cfg Grid Rect Color */
        gridRectColor : "#ababab",
        /** @cfg Grid Border Color */
        gridBorderColor : "#ebebeb",
        /** @cfg Grid Border Width */
    	gridBorderWidth : 1,
        gridActiveBorderColor : "#ff7800",
        gridAxisBorderColor : "#bfbfbf",
        gridAxisBorderWidth : 2,
        /** @cfg  Grid Bar Size */
        gridTickSize : 3,
        gridTickBorderWidth : 1.5,
        gridTickPadding : 5,
        /** @cfg Grid Border Dash Array */
        gridBorderDashArray : "none",
        // Brush styles
        tooltipPointRadius : 5, // common
        tooltipPointBorderWidth : 1, // common
        tooltipPointFontWeight : "bold", // common
        barBorderColor : "none",
        barBorderWidth : 0,
        barBorderOpacity : 0,
        barBorderRadius : 3,
        barPointBorderColor : "white",
        barDisableBackgroundOpacity : 0.4,
    	gaugeBackgroundColor : "#ececec",
        gaugeArrowColor : "#666666",
        gaugeFontColor : "#666666",
        gaugeFontSize : "20px",
        gaugeFontWeight : "bold",
        gaugeTitleFontSize : "12px",
        gaugeTitleFontWeight : "normal",
        gaugeTitleFontColor : "#333",
        bargaugeBackgroundColor : "#ececec",
        bargaugeFontSize : "11px",
        bargaugeFontColor : "#333333",
    	pieBorderColor : "#ececec",
        pieBorderWidth : 1,
        pieOuterFontSize : "11px",
        pieOuterLineColor : "#a9a9a9",
        pieOuterLineSize : 8,
        pieOuterLineRate : 1.3,
        pieActiveDistance : 5,
    	areaBackgroundOpacity : 0.5,
        areaSplitBackgroundColor : "#929292",
        bubbleBackgroundOpacity : 0.5,
        bubbleBorderWidth : 1,
        candlestickBorderColor : "black",
        candlestickBackgroundColor : "white",
        candlestickInvertBorderColor : "red",
        candlestickInvertBackgroundColor : "red",
        ohlcBorderColor : "black",
        ohlcInvertBorderColor : "red",
        ohlcBorderRadius : 5,
        lineBorderWidth : 2,
        lineBorderDashArray : "none",
        lineDisableBorderOpacity : 0.3,
        linePointBorderColor : "white",
        lineSplitBorderColor : null,
        lineSplitBorderOpacity : 0.5,
        pathBackgroundOpacity : 0.5,
        pathBorderWidth : 1,
        scatterBorderColor : "white",
        scatterBorderWidth : 1,
        scatterHoverColor : "white",
        waterfallBackgroundColor : "#87BB66",
        waterfallInvertBackgroundColor : "#FF7800",
        waterfallEdgeBackgroundColor : "#7BBAE7",
        waterfallLineColor : "#a9a9a9",
        waterfallLineDashArray : "0.9",
        focusBorderColor : "#FF7800",
        focusBorderWidth : 1,
        focusBackgroundColor : "#FF7800",
        focusBackgroundOpacity : 0.1,
        pinFontColor : "#FF7800",
        pinFontSize : "10px",
        pinBorderColor : "#FF7800",
        pinBorderWidth : 0.7,
        topologyNodeRadius : 12.5,
        topologyNodeFontSize : "14px",
        topologyNodeFontColor : "white",
        topologyNodeTitleFontSize : "11px",
        topologyNodeTitleFontColor : "#333",
        topologyEdgeColor : "#b2b2b2",
        topologyActiveEdgeColor : "#905ed1",
        topologyEdgeFontSize : "10px",
        topologyEdgeFontColor : "#666",
        topologyEdgePointRadius : 3,
        topologyTooltipBackgroundColor : "white",
        topologyTooltipBorderColor : "#ccc",
        topologyTooltipFontSize : "11px",
        topologyTooltipFontColor : "#333",

        // Widget styles
        titleFontColor : "#333",
        titleFontSize : "13px",
        titleFontWeight : "normal",
        legendFontColor : "#333",
        legendFontSize : "12px",
        legendIconRadius : 6,
        tooltipFontColor : "#333",
        tooltipFontSize : "12px",
        tooltipBackgroundColor : "white",
        tooltipBorderColor : "#aaaaaa",
        tooltipBorderWidth : 2,
        tooltipBackgroundOpacity : 0.7,
        scrollBackgroundSize : 7,
        scrollBackgroundColor : "#dcdcdc",
        scrollThumbBackgroundColor : "#b2b2b2",
        scrollThumbBorderColor : "#9f9fa4",
        zoomBackgroundColor : "red",
        zoomFocusColor : "gray",
        zoomScrollBackgroundSize : 50,
        zoomScrollBackgroundColor : "#000",
        zoomScrollFocusColor : "#fff",
        zoomScrollBrushColor : "#000",
        crossBorderColor : "#a9a9a9",
        crossBorderWidth : 1,
        crossBorderOpacity : 0.8,
        crossBalloonFontSize : "11px",
        crossBalloonFontColor : "white",
        crossBalloonBackgroundColor : "black",
        crossBalloonBackgroundOpacity : 0.5,
        dragSelectBackgroundColor : "#7BBAE7",
        dragSelectBackgroundOpacity : 0.3,
        dragSelectBorderColor : "#7BBAE7",
        dragSelectBorderWidth : 1,

        // Map Common
        mapPathBackgroundColor : "#67B7DC",
        mapPathBackgroundOpacity : 1,
        mapPathBorderColor : "white",
        mapPathBorderWidth : 1,
        mapPathBorderOpacity : 1,
        // Map Brushes
        mapBubbleBackgroundOpacity : 0.5,
        mapBubbleBorderWidth : 1,
        mapSelectorColor : "#5a73db",
        mapSelectorActiveColor : "#CC0000",
        mapFlightRouteAirportSmallColor : "#CC0000",
        mapFlightRouteAirportLargeColor : "#000",
        mapFlightRouteAirportBorderWidth : 2,
        mapFlightRouteAirportRadius : 8,
        mapFlightRouteLineBorderColor : "red",
        mapFlightRouteLineBorderWidth : 1,
        mapWeatherBackgroundColor : "white",
        mapWeatherBorderColor : "#a9a9a9",
        mapWeatherTitleFontColor : "#666",
        mapWeatherInfoFontColor : "red",
        // Map Widgets
        mapControlButtonColor : "#3994e2",
        mapControlScrollColor : "#000",
        mapControlScrollLineColor : "#fff"
    }
});
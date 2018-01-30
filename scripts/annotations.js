/* Annotation definitions */

var margin = {top: 60, right: 30, bottom: 60, left: 120},
    width = 900 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var annotations = {
    "League of Legends": {
        "spec": [
            {
                note: {label: "Steve Jobs Returns"},
                subject: {
                    y1: margin.top,
                    y2: height - margin.bottom
                },
                y: margin.top,
                type: d3.annotationXYThreshold,
                data: {x: "2011-11-01"} //position the x based on an x scale
            },
            {
                note: {
                    label: "Stock Split 2:1",
                    lineType: "none",
                    orientation: "leftRight",
                    "align": "middle"
                },
                className: "anomaly",
                type: d3.annotationCalloutCircle,
                subject: {radius: 35},
                data: {x: "2011-10-20", y: 50},
                dx: 40
            }

        ],
        "stream": [],
        "ratio": []
    },
    "Battlefield": {
        "spec": [
            {
                note: {label: "Steve Jobs Returns"},
                subject: {
                    y1: margin.top,
                    y2: height - margin.bottom
                },
                y: margin.top,
                type: d3.annotationXYThreshold,
                data: {x: "2011-11-01"} //position the x based on an x scale
            },
            {
                note: {
                    label: "Stock Split 2:1",
                    lineType: "none",
                    orientation: "leftRight",
                    "align": "middle"
                },
                className: "anomaly",
                type: d3.annotationCalloutCircle,
                subject: {radius: 35},
                data: {x: "2011-10-20", y: 50},
                dx: 40
            }

        ],
        "stream": [],
        "ratio": []
    },
    "Star Wars": {
        "spec": [
            {
                note: {label: "Steve Jobs Returns"},
                subject: {
                    y1: margin.top,
                    y2: height - margin.bottom
                },
                y: margin.top,
                type: d3.annotationXYThreshold,
                data: {x: "2011-11-01"} //position the x based on an x scale
            },
            {
                note: {
                    label: "Stock Split 2:1",
                    lineType: "none",
                    orientation: "leftRight",
                    "align": "middle"
                },
                className: "anomaly",
                type: d3.annotationCalloutCircle,
                subject: {radius: 35},
                data: {x: "2011-10-20", y: 50},
                dx: 40
            }

        ],
        "stream": [],
        "ratio": []
    },
    "The Elder Scrolls": {
        "spec": [
            {
                note: {label: "Steve Jobs Returns"},
                subject: {
                    y1: margin.top,
                    y2: height - margin.bottom
                },
                y: margin.top,
                type: d3.annotationXYThreshold,
                data: {x: "2011-11-01"} //position the x based on an x scale
            },
            {
                note: {
                    label: "Stock Split 2:1",
                    lineType: "none",
                    orientation: "leftRight",
                    "align": "middle"
                },
                className: "anomaly",
                type: d3.annotationCalloutCircle,
                subject: {radius: 35},
                data: {x: "2011-10-20", y: 50},
                dx: 40
            }

        ],
        "stream": [],
        "ratio": []
    }
};

console.log(annotations);
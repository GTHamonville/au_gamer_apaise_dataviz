/* Annotation definitions */

var margin = {top: 60, right: 30, bottom: 60, left: 120},
    width = 900 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var annotations = {
    "League of Legends": {
        "spec": [
            {
                note: {
                    title: "Intel Extreme Masters",
                    label: "Saison 6" +
                    "Global Challenge New York",
                    lineType: "none",
                    orientation: "leftRight",
                    "align": "middle",
                    wrap: 100
                },
                className: "anomaly",
                type: d3.annotationCalloutCircle,
                subject: {radius: 35},
                data: {x: "2011-10-15", y: 32000},
                dx: 40,
                dy: 30
            },
            {
                note: {
                    title: "IGN Pro League",
                    label: "Finale saison 3" +
                    " Atlantic City" +
                    " Team Dignitas vs Epik Gamer",
                    wrap: 100,
                },
                subject: {
                    y1: 160,
                    y2: height
                },
                className: "anomaly",
                y: margin.top + 150,
                dx: 70,
                type: d3.annotationXYThreshold,
                data: {x: "2011-10-09"} //position the x based on an x scale
            }

        ],
        "stream": [],
        "ratio": [
            {
                note: {
                    label: "Tous les joueurs ayant précommandé le jeu ont eu un accès anticipé d'une semaine avant la sortie officielle",
                    lineType: "none",
                    orientation: "leftRight",
                    align: "middle",
                    wrap: 200
                },
                className: "above",
                type: d3.annotationCalloutCircle,
                subject: {radius: 1},
                data: {x: "2011-11-13", y: 200}
            }]
    },
    "Battlefield": {
        "spec": [
            {
                note: {
                    title: "Sortie du jeu",
                    wrap: 200,
                },
                subject: {
                    y1: 70,
                    y2: height
                },
                className: "context",
                y: margin.top + 20,
                dx: -20,
                type: d3.annotationXYThreshold,
                data: {x: "2011-10-25"} //position the x based on an x scale
            },
            {
                note: {
                    title: "Beta ouverte",
                    label: "Elle a pour but de vérifier la fiabilité des serveurs",
                    lineType: "none",
                    orientation: "leftRight",
                    "align": "middle",
                    wrap: 100
                },
                dy: -80,
                className: "anomaly",
                type: d3.annotationCalloutCircle,
                subject: {radius: 55},
                data: {x: "2011-10-7", y: 1000},
            }

        ],
        "stream": [],
        "ratio": []
    },
    "Star Wars": {
        "spec": [
            {
                note: {
                    title: "Sortie du jeu",
                    label: "",
                    wrap: 200,
                },
                subject: {
                    y1: 130,
                    y2: height
                },
                className: "context",
                y: margin.top + 70,
                dx: 20,
                type: d3.annotationXYThreshold,
                data: {x: "2011-12-22"} //position the x based on an x scale
            },
            {
                note: {
                    title: "Beta fermée",
                    lineType: "none",
                    orientation: "leftRight",
                    "align": "middle"
                },
                className: "anomaly",
                type: d3.annotationCalloutCircle,
                subject: {radius: 70},
                data: {x: "2011-11-27", y: 1300},
                dy: -70,
                dx: -30
            },
            {
                note: {
                    title: "Accès anticipé",
                    label: "Tous les joueurs ayant précommandé le jeu ont eu un accès anticipé d'une semaine avant la sortie officielle",
                    lineType: "none",
                    orientation: "leftRight",
                    align: "middle",
                    wrap: 200
                },
                className: "above",
                type: d3.annotationCalloutCircle,
                subject: {radius: 30},
                data: {x: "2011-12-15", y: 4500},
                dy: 20,
                dx: -30
            }

        ],
        "stream": [],
        "ratio": []
    },
    "The Elder Scrolls": {
        "spec": [
            {
                note: {
                    title: "Sortie du jeu",
                    label: "3,4 Millions d'unités vendues en 48 heures",
                    wrap: 200,
                },
                subject: {
                    y1: 0,
                    y2: height
                },
                className: "context",
                y: margin.top,
                dx: 20,
                type: d3.annotationXYThreshold,
                data: {x: "2011-11-11"} //position the x based on an x scale
            }
        ],
        "stream": [{
            note: {
                title: "Sortie du jeu",
                label: "3,4 Millions d'unités vendues en 48 heures",
                wrap: 200,
            },
            subject: {
                y1: 0,
                y2: height
            },
            className: "context",
            y: margin.top,
            dx: 20,
            type: d3.annotationXYThreshold,
            data: {x: "2011-11-11"} //position the x based on an x scale
        }],
        "ratio": [{
            note: {
                title: "Sortie du jeu",
                label: "3,4 Millions d'unités vendues en 48 heures",
                wrap: 200,
            },
            subject: {
                y1: 0,
                y2: height
            },
            className: "context",
            y: margin.top,
            dx: 20,
            type: d3.annotationXYThreshold,
            data: {x: "2011-11-11"} //position the x based on an x scale
        }]
    }
};

console.log(annotations);
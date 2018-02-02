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
                    title: "Finale ESL Pro Series Germany",
                    label: " 1er Team ALTERNATE 2nd Team Acer",
                    wrap: 100
                },
                subject: {
                    y1: 170,
                    y2: height
                },
                className: "anomaly",
                y: margin.top + 100,

                dx: -5,
                type: d3.annotationXYThreshold,
                data: {x: "2011-12-04"} //position the x based on an x scale
            },
            {
                note: {
                    title: "National ESL Premier League S2 Amérique du Nord",
                    label: " 1er Team Counter Logic Gaming 2nd Team Curse",
                    wrap: 150,
                },
                subject: {
                    y1: 170,
                    y2: height
                },
                className: "anomaly",
                y: margin.top + 100,
                dY: -80,
                type: d3.annotationXYThreshold,
                data: {x: "2011-12-18"} //position the x based on an x scale
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
        "stream": [
            {
                note: {
                    label: "Le jeu League of legends est sorti en 2009 ce qui explique que sa communauté de streamer n'a pas beaucoup de variations pendant ces 3 mois",
                    lineType: "none",
                    orientation: "leftRight",
                    align: "middle",
                    wrap: 200
                },
                className: "above",
                type: d3.annotationCalloutCircle,
                subject: {radius: 1},
                data: {x: "2011-10-25", y: 100}
            }
        ],
        "ratio": [
            {
                note: {
                    label: "Le nombre de streamers étant à peu près constant, il est normal de retrouver la même forme de courbe que pour les spetateurs",
                    lineType: "none",
                    orientation: "leftRight",
                    align: "middle",
                    wrap: 200
                },
                className: "above",
                type: d3.annotationCalloutCircle,
                subject: {radius: 1},
                data: {x: "2011-11-13", y: 300}
            },
            {
                note: {
                    lineType: "none",
                    orientation: "leftRight",
                    "align": "middle",
                    wrap: 50
                },
                className: "anomaly",
                type: d3.annotationCalloutCircle,
                subject: {radius: 20},
                data: {x: "2011-11-20", y: 50},
                dx: -100,
                dy: -50
            },
            {
                note: {
                    title: "Week-ends",
                    lineType: "none",
                    orientation: "leftRight",
                    "align": "middle",
                    wrap: 100
                },
                className: "anomaly",
                type: d3.annotationCalloutCircle,
                subject: {radius: 20},
                data: {x: "2011-11-06", y: 50},
                dy: -50
            },
            {
                note: {
                    lineType: "none",
                    orientation: "leftRight",
                    "align": "middle",
                    wrap: 100
                },
                className: "anomaly",
                type: d3.annotationCalloutCircle,
                subject: {radius: 20},
                data: {x: "2011-10-23", y: 50},
                dx: 100,
                dy: -50
            }
        ]
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
        "stream": [
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
                data: {x: "2011-10-7", y: 25},
            }
        ],
        "ratio": [
            {
                note: {
                    title: "Stream officiel ?",
                    wrap: 200,
                },
                subject: {
                    y1: 70,
                    y2: height
                },
                className: "context",
                y: margin.top,
                dx: 20,
                type: d3.annotationXYThreshold,
                data: {x: "2011-10-12"} //position the x based on an x scale
            }
        ]
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
        "stream": [
            {
                note: {
                    label: "Le jeu étant récent, la courbe des streamers suit le rythme de vie du jeu à savoir : béta, accès anticipé et sortie officielle",
                    lineType: "none",
                    orientation: "leftRight",
                    align: "middle",
                    wrap: 200
                },
                className: "above",
                type: d3.annotationCalloutCircle,
                subject: {radius: 1},
                data: {x: "2011-10-09", y: 100}
            }
        ],
        "ratio": [
            {
                note: {
                    label: "Ces deux pics se sont déroulés juste avant la béta. Il y a fort à parier qu'il s'agissait des développeurs du jeu pour présenter ce qu'ils ont fait juste avant de commencer la béta",
                    lineType: "none",
                    orientation: "leftRight",
                    "align": "middle",
                    wrap: 200
                },
                className: "anomaly",
                type: d3.annotationCalloutCircle,
                subject: {radius: 70},
                data: {x: "2011-11-13", y: 130},
                dy: 20,
                dx: -90
            }
        ]
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
        "ratio": [
            {
                note: {
                    label: "Skyrim étant un jeu solo, le nombre de spectateurs décroit rapidement car les gens préfèrent jouer au jeu eux-mêmes et découvrir l'univers",
                    lineType: "none",
                    orientation: "leftRight",
                    align: "middle",
                    wrap: 200
                },
                className: "above",
                type: d3.annotationCalloutCircle,
                subject: {radius: 1},
                data: {x: "2011-10-09", y: 200}
            }
            ]
    }
};

console.log(annotations);




var svg = d3.select("svg"),
        margin = {top: 20, right: 20, bottom: 30, left: 100},
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom,
        g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var parseTime = d3.timeParse("%d-%b-%y" + "%H");

    var x = d3.scaleTime()
        .rangeRound([0, width]);

    var y = d3.scaleLinear()
        .rangeRound([height, 0]);


    d3.tsv("data/sky_stats.txt", function (d) {
            d.date = parseTime(d.date + d.hour);
            d.nb_spec = +d.nb_spec;
            return d;
        },


            format = d3.timeFormat("%Y-%m-%d");
            parse = d3.timeParse("%Y-%m-%d");
            nested_data = d3.nest()
                .key(function (d) {
                    return format(d.date);
                })
                .rollup(function (leaves) {
                    return {
                        'nb_spec_avg': d3.mean(leaves, function (d) {
                            return d.nb_spec;
                        }),
                        'nb_streamer_avg': d3.mean(leaves, function (d) {
                            return d.nb_streamer;
                        })
                    }
                }).entries(data);
            console.log(nested_data);

            var line = d3.line()
                .x(function (d) {
                    return x(parse(d.key));
                })
                .y(function (d) {
                    return y(d.value.nb_spec_avg);
                });

            x.domain(d3.extent(nested_data, function (d) {
                return parse(d.key);
            }));
            y.domain(d3.extent(nested_data, function (d) {
                return d.value.nb_spec_avg;
            }));

            console.log(x.domain());
            console.log(y.domain());
            g.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))
                .select(".domain")
                .remove();

            g.append("g")
                .call(d3.axisLeft(y))
                .append("text")
                .attr("fill", "#000")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", "0.71em")
                .attr("text-anchor", "end")
                .text("Nb spectateurs");

            g.append("path")
                .datum(nested_data)
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("stroke-width", 1.5)
                .attr("d", line);
        });



    //second line___________________________

d3.tsv("data/bf_stats.txt", function (d) {
            d.date = parseTime(d.date + d.hour);
            d.nb_spec = +d.nb_spec;
            return d;
        },

            data = data.filter(function (d) {
                return d.date > date_start;
            });
            format = d3.timeFormat("%Y-%m-%d");
            parse = d3.timeParse("%Y-%m-%d");
            nested_data = d3.nest()
                .key(function (d) {
                    return format(d.date);
                })
                .rollup(function (leaves) {
                    return {
                        'nb_spec_avg': d3.mean(leaves, function (d) {
                            return d.nb_spec;
                        }),
                        'nb_streamer_avg': d3.mean(leaves, function (d) {
                            return d.nb_streamer;
                        })
                    }
                }).entries(data);
            console.log(nested_data);

            var line = d3.line()
                .x(function (d) {
                    return x(parse(d.key));
                })
                .y(function (d) {
                    return y(d.value.nb_spec_avg);
                });

            x.domain(d3.extent(nested_data, function (d) {
                return parse(d.key);
            }));
            y.domain(d3.extent(nested_data, function (d) {
                return d.value.nb_spec_avg;
            }));

            console.log(x.domain());
            console.log(y.domain());
            g.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))
                .select(".domain")
                .remove();

            g.append("g")
                .call(d3.axisLeft(y))
                .append("text")
                .attr("fill", "#000")
                .attr("transform", "rotate(-90)")
                .attr("y", 10)
                .attr("dy", "0.71em")
                .attr("text-anchor", "end")
                .text("Nb spectateurs");

            g.append("path")
                .datum(nested_data)
                .attr("fill", "none")
                .attr("stroke", "crimson")
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("stroke-width", 1.5)
                .attr("d", line);
        });
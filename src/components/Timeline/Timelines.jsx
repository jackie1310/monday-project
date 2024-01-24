import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsGantt from 'highcharts/modules/gantt';
import HighchartsReact from 'highcharts-react-official';

HighchartsGantt(Highcharts);

const today = new Date(),
    // day = 1000 * 60 * 60 * 24;
    day = 1000 * 60 * 60 * 24;

// Set to 00:00:00:000 today
today.setUTCHours(0);
today.setUTCMinutes(0);
today.setUTCSeconds(0);
today.setUTCMilliseconds(0);

const colors_lst = ['#FF8C00', '#03C03C', '#FF0800'];

export default function Timeline({itemNames}) {
    let datas = []
    useEffect(() => {
        for (let i = 0; i < 3; i++) {
            let data = {
                name: `${itemNames[i].name}`,
                id: `${itemNames[i].name}`,
                start: today.getTime() + 2 * i * day,
                end: today.getTime() + ((2 + 2* i) * day),
            }
            datas.push(data)
        }
        Highcharts.ganttChart('container', {
            chart: {
                styledMode: false
            },
            xAxis: [{
                currentDateIndicator: true,
                labels: {
                  format: '{value:%e %b}' // day of the week
                },
                grid: { // default setting
                  enabled: true
                },
                tickInterval: 1000 * 60 * 60 * 24, // Day
              }],
            yAxis: {
                grid: true,
                offset: 100,
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}',
                    }
                },
                gantt: {
                    colors: colors_lst,
                },
                dataLabels: {
                    enabled: true, // Show data labels
                    inside: true, // Position data labels inside the bars
                    align: 'center', // Align data labels to the left of the bars
                    verticalAlign: 'middle', // Center data labels vertically
                    overflow: 'none', // Prevent data labels from overflowing the bars
                },
            },
            accessibility: {
                keyboardNavigation: {
                    seriesNavigation: {
                        mode: 'serialize'
                    }
                },
                point: {
                    descriptionFormat: '{yCategory}. Start {x:%Y-%m-%d}, end {x2:%Y-%m-%d}.'
                }
            },
            lang: {
                accessibility: {
                    axis: {
                        xAxisDescriptionPlural: 'The chart has a two-part X axis showing time in both week numbers and days.'
                    }
                }
            },
            series: [{
                // name: 'Project 1',
                data: datas
            }]
        }); 
    }, [itemNames]);

    return (
        <div id='container' className='min-w-[500px] max-w-[2000px]'></div>
    )
}
// THE CHART

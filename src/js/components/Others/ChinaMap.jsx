import React from 'react';
import * as d3 from 'd3';

const width = 1024;
const height = 768;

// const data = [4, 2, 3, 7, 8, 3];

export default class ChinaMap extends React.PureComponent {
  componentDidMount() {
    const svg = d3.select('#china-map').append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(0,0)');

    const projection = d3.geoMercator().scale(200);

    const path = d3.geoPath()
      .projection(projection);

    d3.json('/data/china_path.json').then((root, err) => {
      if (err) return console.error(err);
      // 添加提示
      // var tooltip = d3.select('body')
      // .append('div')
      // .attr('class','tooltip')
      // .style('opacity', 0);

      // 绘制地图
      return svg.selectAll('path')
        .data(root.features)
        .enter().append('path')
        .attr('stroke', '#000')
        .attr('stroke-width', 1)
        .attr('fill', '#eee')
        .attr('d', path);
      // .on('mouseover',function(d,i){
      //   d3.select(this).attr('fill','#aaa');
      //   tooltip.transition()
      //     .duration(200)
      //     .style('opacity', .9);

      //   tooltip.html(d.properties.name)
      //     .style('left', (d3.event.pageX) + 'px')
      //     .style('top', (d3.event.pageY - 28) + 'px');
      // })
      // .on('mouseout',function(d,i){
      //   d3.select(this).attr('fill','#eee');
      //   tooltip.transition()
      //          .duration(500)
      //          .style('opacity', 0);
      // });

      // 添加文字
      // svg.selectAll('text')
      //   .data(root.features)
      //   .enter()
      //   .append('text')
      //   .text(function(d){return d.properties.name})
      //   .attr({
      //     transform: function(d){return 'translate('+path.centroid(d)+')';},
      //     'text-anchor': 'middle',
      //     'font-size': '10px'
      //   });
    });

    // var x = d3.scaleLinear()
    //           .domain([0, d3.max(data)])
    //           .range([0, 420]);

    // d3.select('#china-map').data(data)
    //   .enter().append('div')
    //   .style('width', function(d) { return x(d) + 'px'; })
    //   .style('background-color', '#ddd')
    //   .text(function(d) { return d; });

  }

  render() {
    return <div id="china-map"></div>;
  }
}

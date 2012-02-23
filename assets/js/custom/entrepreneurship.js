// JavaScript Document

var chart;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'entrepreneurship-graph',
			type: 'line',
		},
		title: {
			text: 'Number and Value of Loans to Small Business',
			x: -20 //center
		},
		xAxis: {
			categories: ['2005', '2006', '2006', '2007', '2008', '2009', '2010']
		},
		yAxis: {
			title: {
				text: null
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		tooltip: {
			formatter: function() {
					return '<b>'+ this.series.name +'</b><br/>'+
					this.x +': '+ this.y +'%';
			}
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			x: -10,
			y: 100,
			borderWidth: 0
		},
		series: [{
			name: 'Value of loans ($B)',
			data: [601.5, 634.2, 686.8, 711.5, 695.2, 652.2]
		}, {
			name: 'Number of loans (millions)',
			data: [21.03, 21.26, 24.53, 27.22, 23.18, 22.39]
		}]
	});
});

var chart;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'entrepreneurship-graph2',
			type: 'line',
		},
		title: {
			text: 'Small Business Births, Closures, and Bankruptcies, 2005-2009',
			x: -20 //center
		},
		xAxis: {
			categories: ['2005', '2006', '2006', '2007', '2008', '2009']
		},
		yAxis: {
			title: {
				text: null
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		tooltip: {
			formatter: function() {
					return '<b>'+ this.series.name +'</b><br/>'+
					this.x +': '+ this.y +'%';
			}
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			x: -10,
			y: 100,
			borderWidth: 0
		},
		series: [{
			name: 'Births',
			data: [644122, 670058, 668395, 626400, 552600]
		}, {
			name: 'Closures',
			data: [565745, 699333, 592410, 663900, 660900]
		}, {
			name: 'Bankruptcies',
			data: [39201, 19695, 28322, 43546, 60837]
		}]
	});
});
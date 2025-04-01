import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const timeSeries = [
  {
    keyword: "DIGITAL_CURRENCY_DAILY",
    key: "Time Series (Daily)",
    label: "1 Day",
    value: 1,
  },
  {
    keyword: "DIGITAL_CURRENCY_WEEKLY",
    key: "Weekly Time Series",
    label: "1 Week",
    value: 7,
  },
  {
    keyword: "DIGITAL_CURRENCY_MONTHLY",
    key: "Monthly Time Series",
    label: "1 Month",
    value: 30,
  },
];

function StockChart() {
  const [activeLabel, setActiveLabel] = useState("1 Day");

  const series = [
    {
      data: [
        [1740496164610, 86867.6663818942],
        [1740499764690, 86776.4546745387],
        [1740503355140, 87366.8721887402],
        [1740506981791, 87392.7993649757],
        [1740510109546, 86941.6156971027],
        [1740513893681, 87837.9861184539],
        [1740517299627, 88056.5469812694],
        [1740521385639, 89142.8156418093],
        [1740524978390, 89006.7262014393],
        [1740528533938, 88463.0281495162],
        [1740532185658, 88129.4582649271],
        [1740535527951, 88582.890079887],
        [1740539306575, 89010.2709977032],
        [1740542966619, 88849.4254709216],
        [1740546283636, 88627.5476262374],
        [1740549888324, 88377.108768736],
        [1740553748380, 88829.009146415],
        [1740557076710, 88672.1061011929],
        [1740560657986, 88447.9867740611],
        [1740564289265, 89035.4667996893],
        [1740567930847, 89191.0715283883],
        [1740571459989, 88591.2715370959],
        [1740575097308, 87915.2455954093],
        [1740578693742, 86973.3133125851],
        [1740582281245, 87527.1633692533],
        [1740585666530, 87384.0858033616],
        [1740589535340, 86693.7423168762],
        [1740593092167, 85901.6614919656],
        [1740596698494, 84103.2959410402],
        [1740600423343, 83753.2572387932],
        [1740603929701, 84033.6738360382],
        [1740607491580, 84508.0886401965],
        [1740611084223, 84301.8119681179],
        [1740614697146, 84136.6270309708],
        [1740618033204, 84539.8586757006],
        [1740622059379, 84559.8487313725],
        [1740625403975, 84283.8164231765],
        [1740629058422, 85132.658271171],
        [1740632952323, 85035.8382625425],
        [1740636285122, 85749.7757679238],
        [1740639868938, 86174.3122494441],
        [1740643468696, 86219.3559099563],
        [1740647078683, 85993.0408767033],
        [1740650684385, 86074.3203114768],
        [1740654290652, 86951.1115096545],
        [1740657898578, 86658.6225623135],
        [1740661482833, 86247.6368050315],
        [1740665094100, 86051.5831147364],
        [1740668684189, 84937.5878459347],
        [1740672725479, 85465.9830879091],
        [1740676005252, 84434.4289818485],
        [1740679475450, 84484.3560760712],
      ],
    },
  ];
  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 150,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    colors: ["#758AA2"],
    markers: {
      colors: ["#fff"],
      strockColor: "#fff",
      size: 0,
      strockWidth: 1,
      style: "hollow",
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.6,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
    },
  };

  const handleActiveLabel = (value) => {
    setActiveLabel(value);
  };

  return (
    <div>
      <div className="space-x-3">
        {timeSeries.map((item) => (
          <Button
            variant={activeLabel == item.label ? "default" : "outline"}
            onClick={() => handleActiveLabel(item.label)}
            key={item.label}
          >
            {item.label}
          </Button>
        ))}
      </div>
      <div id="chart-timelines">
        <ReactApexChart options={options} series={series} type="area" />
      </div>
    </div>
  );
}

export default StockChart;

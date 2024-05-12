import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { ChartContainer, BarPlot, BarChart, LineChart, axisClasses } from '@mui/x-charts';

import Title from './Title';

const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];

// Generate Sales Data
function createData(time, amount) {
  return { time, amount: amount ?? null };
}

const uData = [];
const xLabels = [];
for (let i = 0; i < mockTransactions.length; i++) {
  uData.push(parseFloat(mockTransactions[i].cost));
  xLabels.push(mockTransactions[i].date)
  console.log(xLabels)
  console.log(uData);
}


// data.push(createData(mockTransactions[0].date,parseFloat(mockTransactions[0].cost)));
// const chartData = [
//   createData(mockTransactions[0].date, parseFloat(mockTransactions[0].cost)),
//   createData(mockTransactions[1].date, parseFloat(mockTransactions[1].cost)),
//   createData(mockTransactions[2].date, parseFloat(mockTransactions[2].cost)),
//   createData(mockTransactions[3].date, parseFloat(mockTransactions[3].cost)),
//   createData(mockTransactions[4].date, parseFloat(mockTransactions[4].cost)),
//   createData(mockTransactions[5].date, parseFloat(mockTransactions[5].cost)),
//   createData(mockTransactions[6].date, parseFloat(mockTransactions[6].cost)),
//   createData(mockTransactions[7].date, parseFloat(mockTransactions[7].cost)),
// ];
// console.log(chartData);



export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
      <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
      <BarChart
        width={400}
        height={200}
        series={[
          { data: uData }
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
      />
        {/* <LineChart
          dataset={data}
          margin={{
            top: 16,
            right: 20,
            left: 70,
            bottom: 30,
          }}
          xAxis={[
            {
              scaleType: 'point',
              dataKey: 'time',
              tickNumber: 2,
              tickLabelStyle: theme.typography.body2,
            },
          ]}
          yAxis={[
            {
              label: 'Sales ($)',
              labelStyle: {
                ...theme.typography.body1,
                fill: theme.palette.text.primary,
              },
              tickLabelStyle: theme.typography.body2,
              max: 250,
              tickNumber: 3,
            },
          ]}
          series={[
            {
              dataKey: 'amount',
              showMark: false,
              color: theme.palette.primary.light,
            },
          ]}
          sx={{
            [`.${axisClasses.root} line`]: { stroke: theme.palette.text.secondary },
            [`.${axisClasses.root} text`]: { fill: theme.palette.text.secondary },
            [`& .${axisClasses.left} .${axisClasses.label}`]: {
              transform: 'translateX(-25px)',
            },
          }}
        /> */}
      </div>
    </React.Fragment>
  );
}
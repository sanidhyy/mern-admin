import React, { useMemo, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import DatePicker from "react-datepicker";
import { ResponsiveLine } from "@nivo/line";

import { useGetSalesQuery } from "state/api";
import { Header } from "components";

import "react-datepicker/dist/react-datepicker.css";

// Daily
const Daily = () => {
  // keep track of start & end date
  const [startDate, setStartDate] = useState(new Date("2021-02-01"));
  const [endDate, setEndDate] = useState(new Date("2021-03-01"));

  // get data
  const { data } = useGetSalesQuery();
  const theme = useTheme();

  // format data
  const [formattedData] = useMemo(() => {
    if (!data) return [];

    // daily data
    const { dailyData } = data;

    // total sales line
    const totalSalesLine = {
      id: "totalSales",
      color: theme.palette.secondary.main,
      data: [],
    };

    // total units line
    const totalUnitsLine = {
      id: "totalUnits",
      color: theme.palette.secondary[600],
      data: [],
    };

    // factor daily data
    Object.values(dailyData).forEach(({ date, totalSales, totalUnits }) => {
      // formatted date
      const dateFormatted = new Date(date);
      if (dateFormatted >= startDate && dateFormatted <= endDate) {
        const splitDate = date.substring(date.indexOf("-") + 1);

        totalSalesLine.data = [
          ...totalSalesLine.data,
          {
            x: splitDate,
            y: totalSales,
          },
        ];

        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          {
            x: splitDate,
            y: totalUnits,
          },
        ];
      }
    });

    const formattedData = [totalSalesLine, totalUnitsLine];

    return [formattedData];
  }, [data, startDate, endDate]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box m="1.5rem 2.5rem">
      {/* Header */}
      <Header title="DAILY SALES" subtitle="Chart of daily sales" />

      {/* Content */}
      {data ? (
        <Box height="75vh">
          {/* Date Picker */}
          <Box display="flex" justifyContent="flex-end">
            {/* Start Date */}
            <Box>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
            </Box>

            {/* End Date */}
            <Box>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </Box>
          </Box>

          {/* Line Chart */}
          <ResponsiveLine
            data={formattedData}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: theme.palette.secondary[200],
                  },
                },
                legend: {
                  text: {
                    fill: theme.palette.secondary[200],
                  },
                },
                ticks: {
                  line: {
                    stroke: theme.palette.secondary[200],
                    strokeWidth: 1,
                  },
                  text: {
                    fill: theme.palette.secondary[200],
                  },
                },
              },
              legends: {
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
              tooltip: {
                container: {
                  color: theme.palette.primary.main,
                },
              },
            }}
            colors={{ datum: "color" }}
            margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: false,
              reverse: false,
            }}
            yFormat=" >-.2f"
            curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 90,
              legend: "Month",
              legendOffset: 60,
              legendPosition: "middle",
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Total",
              legendOffset: -50,
              legendPosition: "middle",
            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: "top-right",
                direction: "column",
                justify: false,
                translateX: 50,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </Box>
      ) : (
        // Loader
        <Typography variant="h5" mt="20%" textAlign="center">
          Loading...
        </Typography>
      )}
    </Box>
  );
};

export default Daily;

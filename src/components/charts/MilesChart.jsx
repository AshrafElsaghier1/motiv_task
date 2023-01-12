import { Chart, Interval, Tooltip } from "bizcharts";
function Demo() {
  const data = [
    { year: "1951 年", sales: 38 },
    { year: "1952 年", sales: 52 },
    { year: "1956 年", sales: 61 },
    { year: "1957 年", sales: 45 },
    { year: "1958 年", sales: 18 },
    { year: "1959 年", sales: 8 },
    { year: "1960 年", sales: 38 },
    { year: "1962 年", sales: 38 },
  ];

  return (
    <Chart height={300} autoFit data={data}>
      <Interval position="year*sales" />
      <Tooltip shared />
    </Chart>
  );
}

export default Demo;

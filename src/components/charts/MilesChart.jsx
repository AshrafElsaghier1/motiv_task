// import { Card } from "antd";
// import { useState } from "react";
// import {
//   G2,
//   Chart,
//   Geom,
//   Axis,
//   Tooltip,
//   Coord,
//   Label,
//   Legend,
//   View,
//   Guide,
//   Shape,
//   Facet,
//   Util,
//   LineAdvance,
// } from "bizcharts";
// import { Col } from "react-bootstrap";
// const data = [
//   {
//     month: "Jan",
//     city: "London",
//     temperature: 3.9,
//   },
//   {
//     month: "Feb",
//     city: "London",
//     temperature: 4.2,
//   },
//   {
//     month: "Mar",
//     city: "London",
//     temperature: 5.7,
//   },
//   {
//     month: "Apr",
//     city: "London",
//     temperature: 8.5,
//   },
//   {
//     month: "May",
//     city: "London",
//     temperature: 11.9,
//   },
//   {
//     month: "Jun",
//     city: "London",
//     temperature: 15.2,
//   },
//   {
//     month: "Jul",
//     city: "London",
//     temperature: 17,
//   },
//   {
//     month: "Aug",
//     city: "London",
//     temperature: 16.6,
//   },
//   {
//     month: "Sep",
//     city: "London",
//     temperature: 14.2,
//   },
//   {
//     month: "Oct",
//     city: "London",
//     temperature: 10.3,
//   },
//   {
//     month: "Nov",
//     city: "London",
//     temperature: 6.6,
//   },
//   {
//     month: "Dec",
//     city: "London",
//     temperature: 4.8,
//   },
// ];
// const data2 = [
//   {
//     month: "Jan",
//     city: "London",
//     temperature: 3.9,
//   },
//   {
//     month: "Feb",
//     city: "London",
//     temperature: 4.2,
//   },
//   {
//     month: "Mar",
//     city: "London",
//     temperature: 5.7,
//   },
//   {
//     month: "Apr",
//     city: "London",
//     temperature: 8.5,
//   },
//   {
//     month: "May",
//     city: "London",
//     temperature: 11.9,
//   },
//   {
//     month: "Jun",
//     city: "London",
//     temperature: 15.2,
//   },
//   {
//     month: "Jul",
//     city: "London",
//     temperature: 17,
//   },
//   {
//     month: "Aug",
//     city: "London",
//     temperature: 16.6,
//   },
//   {
//     month: "Sep",
//     city: "London",
//     temperature: 14.2,
//   },
//   {
//     month: "Oct",
//     city: "London",
//     temperature: 10.3,
//   },
//   {
//     month: "Nov",
//     city: "London",
//     temperature: 6.6,
//   },
//   {
//     month: "Dec",
//     city: "London",
//     temperature: 4.8,
//   },
// ];
// const data3 = [
//   {
//     month: "Jan",
//     city: "London",
//     temperature: 3.9,
//   },
//   {
//     month: "Feb",
//     city: "London",
//     temperature: 4.2,
//   },
//   {
//     month: "Mar",
//     city: "London",
//     temperature: 5.7,
//   },
//   {
//     month: "Apr",
//     city: "London",
//     temperature: 8.5,
//   },
//   {
//     month: "May",
//     city: "London",
//     temperature: 11.9,
//   },
//   {
//     month: "Jun",
//     city: "London",
//     temperature: 15.2,
//   },
//   {
//     month: "Jul",
//     city: "London",
//     temperature: 17,
//   },
//   {
//     month: "Aug",
//     city: "London",
//     temperature: 16.6,
//   },
//   {
//     month: "Sep",
//     city: "London",
//     temperature: 14.2,
//   },
//   {
//     month: "Oct",
//     city: "London",
//     temperature: 10.3,
//   },
//   {
//     month: "Nov",
//     city: "London",
//     temperature: 6.6,
//   },
//   {
//     month: "Dec",
//     city: "London",
//     temperature: 4.8,
//   },
// ];
// const cols = {
//   month: {
//     range: [0, 1],
//   },
// };
// const tabList = [
//   {
//     key: "tab1",
//     tab: "tab1",
//   },
//   {
//     key: "tab2",
//     tab: "tab2",
//   },
// ];
// const contentList = {
//   tab1: (
//     <Chart height={300} data={data} scale={cols} autoFit>
//       <LineAdvance
//         shape="smooth"
//         point
//         area
//         position="month*temperature"
//         color="city"
//       />
//     </Chart>
//   ),
//   tab2: <p>content2</p>,
// };

// const contentListNoTitle = {
//   article: <p>article content</p>,
//   app: <p>app content</p>,
//   project: <p>project content</p>,
// };

// const Curved = () => {
//   const [activeTabKey1, setActiveTabKey1] = useState("tab1");
//   const [activeTabKey2, setActiveTabKey2] = useState("app");
//   const onTab1Change = (key) => {
//     setActiveTabKey1(key);
//   };

//   return (
//     <Col>
//       <Card
//         style={{
//           width: "100%",
//         }}
//         title="Card title"
//         extra={<a href="#">More</a>}
//         tabList={tabList}
//         activeTabKey={activeTabKey1}
//         onTabChange={(key) => {
//           onTab1Change(key);
//         }}
//       >
//         {contentList[activeTabKey1]}
//       </Card>
//     </Col>
//   );
// };
// export default Curved;
import React from "react";

const MilesChart = () => {
  return <div>MilesChart</div>;
};
export default MilesChart;

import { Card } from "antd";
import { useState } from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coordinate,
  Label,
  Legend,
  Interval,
} from "bizcharts";
import { Col } from "react-bootstrap";
import DataSet from "@antv/data-set";

const data = [
  {
    label: "Monday",
    series1: 2800,
  },
  {
    label: "Tuesday",
    series1: 1800,
  },
  {
    label: "Wednesday",
    series1: 950,
  },
  {
    label: "Thursday",
    series1: 500,
  },
  {
    label: "Friday",
    series1: 170,
  },
];
const cols = {
  month: {
    range: [0, 1],
  },
};
const tabList = [
  {
    key: "tab1",
    tab: "tab1",
  },
  {
    key: "tab2",
    tab: "tab2",
  },
];
const ds = new DataSet();
const dv = ds.createView().source(data);
dv.transform({
  type: "fold",
  fields: ["series1"],
  // 展开字段集
  key: "type",

  value: "value", // value字段
});

const contentList = {
  tab1: (
    <Chart height={300} data={dv.rows} autoFit>
      <Legend />
      <Coordinate actions={[["scale", 1, -1], ["transpose"]]} />
      <Axis
        name="label"
        label={{
          offset: 12,
        }}
      />
      <Axis name="value" position={"right"} />
      <Tooltip />
      <Interval
        position="label*value"
        color={"type"}
        adjust={[
          {
            type: "dodge",
            marginRatio: 1 / 32,
          },
        ]}
      />
    </Chart>
  ),
  tab2: <p>content2</p>,
};

const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};

const Curved = () => {
  const [activeTabKey1, setActiveTabKey1] = useState("tab1");
  const [activeTabKey2, setActiveTabKey2] = useState("app");
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  return (
    <Col>
      <Card
        style={{
          width: "100%",
        }}
        title="Card title"
        extra={<a href="#">More</a>}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={(key) => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey1]}
      </Card>
    </Col>
  );
};
export default Curved;

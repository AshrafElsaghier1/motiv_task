import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { Chart, Axis, Tooltip, Coordinate, Legend, Interval } from "bizcharts";
import { Col } from "react-bootstrap";
import DataSet from "@antv/data-set";
import "./style.scss";
import { data, data2, data3 } from "../../dummyData/chartsData";
const CarChart = () => {
  const ds = new DataSet();
  const dv = ds.createView().source(data);
  const dv2 = ds.createView().source(data2);
  const dv3 = ds.createView().source(data3);
  [dv, dv2, dv3].forEach((dv) =>
    dv.transform({
      type: "fold",
      fields: ["Miles"],
      key: "type",
      value: "value",
    })
  );
  return (
    <Col className="mb-3">
      <div id="chart__container" className=" position-relative">
        <h2 className="chart__heading mb-3">
          <b>Miles</b> Statistics
        </h2>
        <h5 className="d-none d-md-block"> 256 Miles</h5>
        <Tabs
          defaultActiveKey="day"
          id="charts__tabs-one"
          className="mb-3 charts__tabs-one  d-flex gap-2 algin-items-center border-0 "
        >
          <Tab eventKey="day" title="Day">
            <Chart
              height={300}
              data={dv.rows}
              autoFit
              interactions={["element-highlight"]}
              onGetG2Instance={(c) => {
                c.geometries[0].elements.forEach((e, idx) => {
                  e.setState(idx === 0 ? "active" : "inactive", true);
                });
              }}
            >
              <Legend />
              <Coordinate actions={[["scale", 1, -1], ["transpose"]]} />
              <Axis
                name="label"
                label={{
                  offset: 12,
                }}
              />
              <Axis name="value" position={"left"} visible={false} />
              <Tooltip />
              <Interval
                position="label*value"
                color={"#2884FF"}
                adjust={[
                  {
                    type: "dodge",
                    marginRatio: 1 / 32,
                  },
                ]}
              />
            </Chart>
          </Tab>
          <Tab eventKey="week" title="Week">
            <Chart
              height={300}
              data={dv2.rows}
              autoFit
              interactions={["element-highlight"]}
              onGetG2Instance={(c) => {
                c.geometries[0].elements.forEach((e, idx) => {
                  e.setState(idx === 0 ? "active" : "inactive", true);
                });
              }}
            >
              <Legend />
              <Coordinate actions={[["scale", 1, -1], ["transpose"]]} />
              <Axis
                name="label"
                label={{
                  offset: 12,
                }}
              />
              <Axis name="value" position={"left"} visible={false} />
              <Tooltip />
              <Interval
                position="label*value"
                color={"#2884FF"}
                adjust={[
                  {
                    type: "dodge",
                    marginRatio: 1 / 32,
                  },
                ]}
              />
            </Chart>
          </Tab>
          <Tab eventKey="month" title="Month">
            <Chart
              height={300}
              data={dv3.rows}
              autoFit
              interactions={["element-highlight"]}
              onGetG2Instance={(c) => {
                c.geometries[0].elements.forEach((e, idx) => {
                  e.setState(idx === 0 ? "active" : "inactive", true);
                });
              }}
            >
              <Legend />
              <Coordinate actions={[["scale", 1, -1], ["transpose"]]} />
              <Axis
                name="label"
                label={{
                  offset: 12,
                }}
              />
              <Axis name="value" position={"left"} visible={false} />
              <Tooltip />
              <Interval
                position="label*value"
                color={"#2884FF"}
                adjust={[
                  {
                    type: "dodge",
                    marginRatio: 1 / 32,
                  },
                ]}
              />
            </Chart>
          </Tab>
        </Tabs>
      </div>
    </Col>
  );
};

export default CarChart;

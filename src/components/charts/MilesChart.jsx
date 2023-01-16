import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { Chart, LineAdvance } from "bizcharts";
import { Col, Row } from "react-bootstrap";

import { data4, data5, data6 } from "../../dummyData/chartsData";
const MilesChart = () => {
  return (
    <Col className="mb-3">
      <div
        id="chart__container-1"
        className="chart__container position-relative"
      >
        <h2 className="chart__heading mb-4">
          <b>Car</b> Statistics
        </h2>
        <h5 className="d-none d-md-block"> 20 February 2022 </h5>
        <Tabs
          defaultActiveKey="day"
          id="charts__tabs-one"
          className="mb-3 charts__tabs-one  d-flex gap-2 algin-items-center border-0 "
        >
          <Tab eventKey="day" title="Day">
            <Row>
              <Col>
                <Chart height={290} data={data4} autoFit className="w-100">
                  <LineAdvance
                    shape="smooth"
                    point
                    area
                    position="label*Miles"
                    color="#FF764C"
                  />
                </Chart>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="week" title="Week">
            <Row>
              <Col>
                <Chart height={290} data={data5} autoFit className="w-100">
                  <LineAdvance
                    shape="smooth"
                    point
                    area
                    position="label*Miles"
                    color="#FF764C"
                  />
                </Chart>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="month" title="Month">
            {" "}
            <Row>
              <Col>
                <Chart height={290} data={data6} autoFit className="w-100">
                  <LineAdvance
                    shape="smooth"
                    point
                    area
                    position="label*Miles"
                    color="#FF764C"
                  />
                </Chart>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </div>
    </Col>
  );
};

export default MilesChart;

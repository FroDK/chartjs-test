import ChartTest from "./Components/Content/elements/Chart";
import { Row, Col } from "antd";
import Navigation from "./Components/Navigation";
import Content from "./Components/Content";
// import json from "./data.json";
// const { topics } = json;

const App = () => {
  return (
    // <Row align="top">
    //   <Col span={6}>
    //     <Navigation topics={topics} />
    //   </Col>
    //   <Col span={14}>
    //     <Content topics={topics} />
    //   </Col>
    // </Row>
    <div style={{ width: "965px", margin: "35px auto", height: "630px" }}>
      <ChartTest />
    </div>
  );
};

export default App;

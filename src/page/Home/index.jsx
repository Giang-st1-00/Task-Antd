import { Row, Col, Space } from "antd";
import HistoryCall from "../../components/HistoryCall";
import CustomerCare from "../../components/CustomerCare";
import MissCall from "../../components/MissCall";
import ChartContract from "../../components/ChartContract";
import PotentialCustomer from "../../components/PotentialCustomer";
import SignedContract from "../../components/SignedContract";

function Home() {
  return (
    <>
      <Row style={{ marginBottom: "16px" }}>
        <Col span={24}>
          <HistoryCall />
        </Col>
      </Row>
      <Row style={{ marginBottom: "16px" }} gutter="16">
        <Col span={12}>
          <CustomerCare />
        </Col>
        <Col span={12}>
          <MissCall />
        </Col>
      </Row>
      <Row style={{ marginBottom: "16px" }}>
        <Col span={24}>
          <PotentialCustomer />
        </Col>
      </Row>
      <Row gutter="16">
        <Col span={12}>
          <SignedContract />
        </Col>
        <Col span={12}>
          <ChartContract />
        </Col>
      </Row>
    </>
  );
}

export default Home;

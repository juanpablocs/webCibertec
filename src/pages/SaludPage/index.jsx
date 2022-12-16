import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardService from "../../components/CardService";
import getServicesByType from "../../services/getServicesByType";

const SaludPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getListServices();
  }, []);

  const getListServices = async () => {
    let data = await getServicesByType("salud");
    setServices(data);
  };
  return (
    <Container fluid>
      <Row className="mt-4">
        <Col xs={12} sm={6} md={6} lg={8}>
          <Row className="d-flex">
            {services.map((service, idx) => (
              <CardService service={service} key={idx} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SaludPage;

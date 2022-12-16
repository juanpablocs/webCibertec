import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardService from "../../components/CardService";
import FormService from "../../components/FormService";
import getServices from "../../services/getServices";

const HomePage = () => {
  const [services, setServices] = useState([]);
  const [serviceId, setServiceId] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    getListServices();
  }, []);

  const getListServices = async () => {
    let data = await getServices();
    setServices(data);
  };

  const editSvc = (id) => {
    let service = services.find((service) => service.id === id);
    setEditData(service);
    setServiceId(id);
    setEditMode(true);
  };

  return (
    <Container fluid>
      <Row className="mt-4">
        <Col xs={12} sm={6} md={6} lg={8}>
          <Row className="d-flex">
            {services.map((service, idx) => (
              <CardService
                service={service}
                key={idx}
                showFooter={true}
                editSvc={editSvc}
                setServices={setServices}
              />
            ))}
          </Row>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <FormService
            editMode={editMode}
            editData={editData}
            serviceId={serviceId}
            setEditMode={setEditMode}
            setServices={setServices}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

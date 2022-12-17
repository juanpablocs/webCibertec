import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getService } from "../../services/getServices";

const DetailPage = () => {
  const [service, setService] = useState({});
  const params = useParams();

  useEffect(() => {
    getListServices(params.id);
  }, [params.id]);

  const getListServices = async (id) => {
    let data = await getService(id);
    setService(data);
  };
  const handlerClickWtsp = (phone) => {
    window.open(`https://api.whatsapp.com/send?phone=51${phone}`);
  }
  return (
    <Container fluid>
      <Row className="mt-4">
        <Col xs={12}>
          <Row className="d-flex flex-column align-items-center m-auto">
           <h1>{service.name}</h1>
           {service.imagen && <img src={service.imagen} style={{width:'100%', maxWidth:'80%'}} />}
           <p>{service.description}</p>
           <Button variant='success' onClick={()=>handlerClickWtsp(service?.phone)}>Contactar Anunciante</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPage;
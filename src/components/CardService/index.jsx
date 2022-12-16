import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import deleteService from "../../services/deleteService";
import getServices from "../../services/getServices";

const CardService = ({ service, showFooter, editSvc, setServices }) => {
  const deleteSvc = async (id) => {
    if (window.confirm("Estas seguro de eliminar este servicio")) {
      deleteService(id);
      let data = await getServices();
      setServices(data);
    }
  };

  const handleEdit = (id) => {
    editSvc(id);
  };

  return (
    <Col sm={12} md={6} lg={4}>
      <Card className="mx-2 my-2">
        <Card.Body className="p-0 pb-3">
          <Card.Title className="px-4 pt-3">{service?.name}</Card.Title>
          <Card.Text className="px-4">{service?.description}</Card.Text>
          {showFooter && (
            <Card.Footer className="px-4 py-3">
              <Button
                variant="outline-primary"
                onClick={() => handleEdit(service?.id)}
              >
                Editar
              </Button>
              <Button
                variant="outline-danger"
                className="ml-2"
                onClick={() => deleteSvc(service?.id)}
              >
                Eliminar
              </Button>
            </Card.Footer>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardService;

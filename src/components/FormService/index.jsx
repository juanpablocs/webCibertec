import React, { useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { serviceSchema } from "../../models/service.model";
import createService from "../../services/createService";
import editService from "../../services/editService";
import { yupResolver } from "@hookform/resolvers/yup";
import getServices from "../../services/getServices";

const FormService = ({
  editMode,
  editData,
  serviceId,
  setEditMode,
  setServices,
}) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(serviceSchema),
  });

  const onSubmit = async (data) => {
    let res = { ...data, type: data?.type?.value };
    if (!editMode) {
      if (window.confirm("Estas seguro de crear este servicio")) {
        await createService(res);
        let data = await getServices();
        setServices(data);
        handleCancel();
      }
    } else {
      if (window.confirm("Estas seguro de actualizar este servicio")) {
        await editService(res, serviceId);
        let data = await getServices();
        setServices(data);
        handleCancel();
      }
    }
  };

  const handleCancel = () => {
    reset({ name: "", description: "", type: null });
    setEditMode(false);
  };

  useEffect(() => {
    if (editMode) {
      let obj = {
        ...editData,
        type: { value: editData?.type, label: editData?.type?.toUpperCase() },
      };
      reset(obj);
    }
  }, [editMode, editData, reset]);

  return (
    <Card className="mx-2 my-2">
      <Card.Body className="p-0">
        <Card.Title className="px-4 pt-3">Servicio</Card.Title>
        <Form className="mx-4" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese Nombre"
              {...register("name")}
            />
            <p className="text-danger">{errors.name?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Ingrese Descripcion"
              {...register("description")}
            />
            <p className="text-danger">{errors.description?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese url"
              {...register("imagen")}
            />
            <p className="text-danger">{errors.imagen?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>whatsapp</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese Numero"
              {...register("phone")}
            />
            <p className="text-danger">{errors.phone?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tipo</Form.Label>
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: "autos", label: "AUTOS" },
                    { value: "salud", label: "SALUD" },
                    { value: "hogar", label: "HOGAR" },
                  ]}
                />
              )}
            />
            <p className="text-danger">{errors.type?.message}</p>
          </Form.Group>
        </Form>
        <Card.Footer className="px-4 py-3">
          <Button variant="success" onClick={handleSubmit(onSubmit)}>
            {editMode ? "Editar" : "Grabar"}
          </Button>
          <Button
            variant="danger"
            className="ml-2"
            onClick={handleCancel}
          >
            Limpiar
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default FormService;

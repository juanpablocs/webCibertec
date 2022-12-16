import * as yup from "yup";
export const serviceSchema = yup.object({
  name: yup.string().required("Nombre es requerido"),
  description: yup.string().required("Descripcion es requerida"),
  type: yup.object({}).required("Tipo es requerido"),
});

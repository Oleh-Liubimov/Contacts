import { Formik, Form, Field } from "formik";
import { useId } from "react";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import * as Yup from "yup";

const objSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required")
    .matches(/^[a-zA-Z]+$/, "Only Latin letters allowed"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(12, "Too long!")
    .required("Requaired")
    .matches(/^\d+$/, "Only digits allowed"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();
  const handleSubmit = (values, actions) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={objSchema}
    >
      <Form className="flex flex-col p-5">
        <label htmlFor={nameId} className="font-medium">
          Name
        </label>
        <Field
          type="text"
          name="name"
          id={nameId}
          className="border border-black rounded outline-none p-2"
        />
        <ErrorMessage className="text-red-600" name="name" component="span" />

        <label htmlFor={numberId} className="font-medium">
          Number
        </label>
        <Field
          type="text"
          name="number"
          id={numberId}
          className="border border-black rounded outline-none mb-5 p-2 "
        />
        <ErrorMessage className="text-red-600" name="number" component="span" />

        <button
          type="submit"
          className="bg-green-500 
            border rounded border-slate-950 h-7 p-1 flex justify-center
            items-center hover:bg-green-600 transition-all"
        >
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

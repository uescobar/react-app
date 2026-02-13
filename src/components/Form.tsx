import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, type userForm } from "../schemas/user";
import Input from "./Input";

function Form() {
  const methods = useForm<userForm>({ resolver: zodResolver(userSchema) });

  const onSubmit = (data: userForm) => {
    console.log(data);
  };

  return (
    // emet
    // form>div.mb-3*2>label.form-label+input#name.form-control
    // button.btn.btn-primary --- emet
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="name">Nombre</Input>
        <Input name="lastname">Apellido</Input>
        <button className="btn btn-primary">Enviar</button>
      </form>
    </FormProvider>
  );
}
export default Form;

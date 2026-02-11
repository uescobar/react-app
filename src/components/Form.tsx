import { useForm } from "react-hook-form";

type Form = {
  name: string;
  lastname: string;
};

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit = (data: Form) => {
    console.log(data);
  };

  return (
    // emet
    // form>div.mb-3*2>label.form-label+input#name.form-control
    // button.btn.btn-primary --- emet
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          {...register("name", {
            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres",
            },
          })}
          type="text"
          id="name"
          className="form-control"
        />
        {errors.name && <p>{errors?.name?.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Apellido
        </label>
        <input
          {...register("lastname")}
          type="text"
          id="lastname"
          className="form-control"
        />
      </div>

      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}
export default Form;

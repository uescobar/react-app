import React, { useRef, type FormEvent } from "react";

type Props = {};

function Form({}: Props) {
  const nameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const user = {
      name: nameRef.current?.value,
      lastname: lastnameRef.current?.value,
    };
    console.log(user);
  };
  return (
    // emet
    // form>div.mb-3*2>label.form-label+input#name.form-control
    // button.btn.btn-primary --- emet
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input ref={nameRef} type="text" id="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Apellido
        </label>
        <input
          ref={lastnameRef}
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

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";


const LoginForm = () => {
  const form = useForm();
  const { register, control, handleSubmit } = form;

  const onSubmit = data => {
      console.log("Form Submitted", data);
    };
  return (
  <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" {...register("email")} />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" {...register("password")} />
          <button>Submit</button>
      </form>
      <DevTool control={control} />
  </div>
)
}


export default LoginForm
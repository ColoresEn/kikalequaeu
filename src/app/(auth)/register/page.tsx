import FormRegister from "@/components/form-register";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Register",
};
const RegisterPage = () => {
  return <FormRegister />;
};
export default RegisterPage;

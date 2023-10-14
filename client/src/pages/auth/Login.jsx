import banner1 from "../../assets/images/banner1.jpg"
import Form from "../../components/shared/form/From"
const Login = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <img src={banner1} alt="banner1" className="banner1" />
        </div>
        <div className="col-md-4 form-container">
        <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
        </div>
      </div>
    </>
  );
};

export default Login;

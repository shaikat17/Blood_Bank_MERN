import React from "react";
import Form from "../../components/shared/form/From";
// import { useSelector } from "react-redux";
// import Spinner from "../../components/shared/Spinner";
import banner2 from "../../assets/images/banner2.jpg"

const Register = () => {
//   const { loading, error } = useSelector((state) => state.auth);
const error = false;
const loading = false;
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        // <Spinner />
        console.log("Hello world")
      ) : (
        <div className="row g-0">
          <div className="col-md-8">
            <img src={banner2} alt="registerImage" className="banner2" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
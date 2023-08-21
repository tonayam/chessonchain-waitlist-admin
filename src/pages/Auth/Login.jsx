import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import spinner from '../../assets/white-spinner.svg';
import { toast } from 'react-toastify';
import loginImg from '../../assets/the-game.png';

const Login = () => {
  const { resetPage, baseURL } = useGlobalContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    resetPage();
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: ``,
      password: ``,
    },
    validationSchema: Yup.object({
      email: Yup.string().email(`Invalid Email`).required(`Email is required`),
      password: Yup.string()
        .min(8, `Minimum of 8 characters`)
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          'At least 1 special character and a number'
        )
        .required(`Password is required`),
    }),
    onSubmit: () => {
      loginUser();
    },
  });

  const loginUser = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(`${baseURL}/auth/login`, formik.values);
      setLoading(false);
      if (data.role !== `admin`) {
        toast.error(`You are not authorized to use this route`);
      } else {
        sessionStorage.setItem(`adminData`, JSON.stringify(data));
        toast.success(`Login Successful`);
        navigate(`/dashboard`);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <>
      <section className='login-page'>
        <div className='form-container'>
          <h3>Admin Login</h3>
          <form action='' onSubmit={formik.handleSubmit}>
            <div className='form-control'>
              <label
                htmlFor='email'
                className={
                  formik.errors.email && formik.touched.email ? `error` : null
                }
              >
                {formik.errors.email ? formik.errors.email : `Email Address`}
                <span>*</span>
              </label>
              <br />
              <input
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                id='email'
                onBlur={formik.handleBlur}
              />
            </div>

            <div className='form-control'>
              <label
                htmlFor='password'
                className={
                  formik.errors.password && formik.touched.password
                    ? `error`
                    : null
                }
              >
                {formik.errors.password ? formik.errors.password : `Password`}
                <span>*</span>
              </label>
              <br />
              <input
                type='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                id='password'
              />
            </div>
            <button type='submit' className='orange'>
              Login {loading ? <img src={spinner} alt='spinner' /> : null}
            </button>
          </form>
        </div>

        <div className='login-img'>
          <img src={loginImg} alt='' />
        </div>
      </section>
    </>
  );
};

export default Login;

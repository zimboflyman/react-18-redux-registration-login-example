import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { authActions } from "_store";

export { Login };

function Login() {
  const dispatch = useDispatch();

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  function onSubmit({ username, password }) {
    return dispatch(authActions.login({ username, password }));
  }

  return (
    <>
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
          <div class="govuk-grid-row">
            <div class="govuk-grid-column-full govuk-!-margin-bottom-6">
              <h1 class="govuk-heading-xl">XHIBIT portal sign innnn</h1>
              <div
                class="govuk-notification-banner"
                role="region"
                aria-labelledby="govuk-notification-banner-title"
                data-module="govuk-notification-banner"
              >
                <div class="govuk-notification-banner__header">
                  <p
                    class="govuk-notification-banner__title"
                    id="govuk-notification-banner-title"
                  >
                    Important
                  </p>
                </div>
                <div class="govuk-notification-banner__content">
                  <p class="govuk-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    ac orci ut nulla pharetra consequat.
                  </p>
                  <p class="govuk-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    ac orci ut nulla pharetra consequat.
                  </p>
                </div>
              </div>

              <p>
                <span class="govuk-phase-banner__text">
                  To log into this site you must be registered with the XHIBIT
                  portal. If you have not yet registered.{" "}
                  <a class="govuk-link" href="#">
                    register now.
                  </a>
                </span>
              </p>
              <p>Enter your user ID and password and click 'Sign in'.</p>
            </div>

            <div class="govuk-grid-column-one-half">
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset class="govuk-fieldset" role="group">
                  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
                    <h1 class="govuk-fieldset__heading">Sign in</h1>
                  </legend>
                  <div
                    className={`govuk-form-group ${
                      errors.username ? "govuk-form-group--error" : ""
                    }`}
                  >
                    <label class="govuk-label" for="U-id">
                      User ID
                    </label>
                    <p id="username-error" class="govuk-error-message">
                      <span class="govuk-visually-hidden">Error:</span>
                      {errors.username?.message}
                    </p>
                    <input
                      name="username"
                      type="text"
                      {...register("username")}
                      className={`govuk-input ${
                        errors.username ? "is-invalid" : ""
                      }`}
                    ></input>
                  </div>
                  <div
                    className={`govuk-form-group ${
                      errors.password ? "govuk-form-group--error" : ""
                    }`}
                  >
                    <label class="govuk-label" for="password">
                      Password
                    </label>
                    <p id="username-error" class="govuk-error-message">
                      <span class="govuk-visually-hidden">Error:</span>
                      {errors.password?.message}
                    </p>
                    <input
                      class="govuk-input"
                      id="password"
                      name="password"
                      autocomplete="password"
                      type="password"
                      {...register("password")}
                      className={`govuk-input ${
                        errors.password ? "is-invalid" : ""
                      }`}
                    ></input>
                  </div>
                </fieldset>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  class="govuk-button"
                  data-module="govuk-button"
                >
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm me-1"></span>
                  )}
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>

      {/* <div className="card m-3">
        <h4 className="card-header">Login</h4>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                name="username"
                type="text"
                {...register("username")}
                className={`form-control ${
                  errors.username ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.username?.message}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                name="password"
                type="password"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <button disabled={isSubmitting} className="btn btn-primary">
              {isSubmitting && (
                <span className="spinner-border spinner-border-sm me-1"></span>
              )}
              Login
            </button>
            <Link to="../register" className="btn btn-link">
              Register
            </Link>
          </form>
        </div>
      </div> */}
    </>
  );
}

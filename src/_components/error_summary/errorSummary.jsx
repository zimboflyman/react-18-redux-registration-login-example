function ErrorSummary({ errorList }) {
  return (
    <div class="govuk-error-summary" data-module="govuk-error-summary">
      {console.log(errorList)}
      <div role="alert">
        <h2 class="govuk-error-summary__title">There is a problem</h2>
        <div class="govuk-error-summary__body">
          <ul class="govuk-list govuk-error-summary__list">
            {/* {errorList
              ? errorList.map((error, index) => {
                  const { reactListKey, children, href, ...errorAttributes } =
                    error;

                  return (
                    <li key={reactListKey || index}>
                      {href ? (
                        <a {...errorAttributes} href={href}>
                          {children}
                        </a>
                      ) : (
                        <>{children}</>
                      )}
                    </li>
                  );
                })
              : null} */}

            {errorList
              ? errorList.map((error, index) => {
                  const { children, href } = error;
                  return (
                    <li key={index}>
                      <a href={href}>{children?.message}</a>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
}

export { ErrorSummary };

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export { Home };

function Home() {
  const auth = useSelector((x) => x.auth.value);
  return (
    <div className="govuk-width-container">
      <main className="govuk-main-wrapper">
        <div class="govuk-grid-row">
          <div class="govuk-grid-column-two-thirds">
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
                <p class="govuk-body">XHIBIT portal contains sensitive data.</p>
              </div>
            </div>
            <h1 class="govuk-heading-l">Home</h1>
            <p>
              The quick search allows you to search for information, available
              via the XHIBIT portal, by using your knowledge of a case file of a
              defendant.
            </p>

            <p>
              To change your alert settings or methods, go to{" "}
              <a href="/path/of/page">subscriptions</a> or{" "}
              <a href="/path/of/page">event rules</a>.
            </p>
          </div>
          <div class="govuk-grid-column-full">
            <div class="govuk-grid-column-one-half">
              <form action="/login/signin/creds" method="POST" id="loginForm">
                <input type="hidden" name="tes" value=""></input>{" "}
                <input type="hidden" name="" value=""></input>
                <h2 class="govuk-heading-m">Defendant quick search</h2>
                <div class="govuk-form-group">
                  <label class="govuk-label" for="first-name">
                    First name
                  </label>
                  <input
                    class="govuk-input"
                    id="first-name"
                    name="first-name"
                    type="text"
                  ></input>
                </div>
                <div class="govuk-form-group">
                  <label class="govuk-label" for="last-name">
                    Last name
                  </label>
                  <input
                    class="govuk-input"
                    id="last-name"
                    name="last-name"
                    type="text"
                  ></input>
                </div>
                <div class="govuk-form-group">
                  <h2 class="govuk-caption-m">Date of birth</h2>
                  {/* <div id="dob-hint" class="govuk-hint">
                For example, 31 3 1980
              </div> */}
                  <div class="govuk-date-input" id="dob">
                    <div class="govuk-date-input__item">
                      <div class="govuk-form-group">
                        <label
                          class="govuk-label govuk-date-input__label"
                          for="dob-day"
                        >
                          Day
                        </label>
                        <input
                          class="govuk-input govuk-date-input__input govuk-input--width-2"
                          id="dob-day"
                          name="dob-day"
                          type="text"
                          autocomplete="bday-day"
                          inputmode="numeric"
                        ></input>
                      </div>
                    </div>
                    <div class="govuk-date-input__item">
                      <div class="govuk-form-group">
                        <label
                          class="govuk-label govuk-date-input__label"
                          for="dob-month"
                        >
                          Month
                        </label>
                        <input
                          class="govuk-input govuk-date-input__input govuk-input--width-2"
                          id="dob-month"
                          name="dob-month"
                          type="text"
                          autocomplete="bday-month"
                          inputmode="numeric"
                        ></input>
                      </div>
                    </div>
                    <div class="govuk-date-input__item">
                      <div class="govuk-form-group">
                        <label
                          class="govuk-label govuk-date-input__label"
                          for="dob-year"
                        >
                          Year
                        </label>
                        <input
                          class="govuk-input govuk-date-input__input govuk-input--width-4"
                          id="dob-year"
                          name="dob-year"
                          type="text"
                          autocomplete="bday-year"
                          inputmode="numeric"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  <a href="/path/of/page">Defendant search - more options</a>
                </p>
                <button
                  type="submit"
                  id="continue"
                  class="govuk-button"
                  formNoValidate=""
                  data-module="govuk-button"
                  data-prevent-double-click="true"
                >
                  Search
                </button>
                {/* <script nonce="">
               (function(){
                   var form = document.getElementById('loginForm');
   
                   var submitButton = form.querySelector('#continue');
                   submitButton.disabled = true;
                   var timeout = setTimeout(function(){submitButton.disabled = false;}, 5000);
   
                   // don't allow form submissions until device profile is ready
                   onDeviceProfile(function(deviceProfile) {
                       submitButton.disabled = false;
                       clearTimeout(timeout);
                   });
   
                   form.addEventListener('submit', function() {
                       onDeviceProfile(function(deviceProfile) {
                          form.profile.value = deviceProfile;
                       });
                   });
               })();
           </script> */}
              </form>
            </div>

            {/* <div class="govuk-grid-column-one-half">
        <form action="/login/signin/creds" method="POST" id="loginForm">
          <input type="hidden" name="tes" value=""> <input type="hidden" name="" value="">
          <h2 class="govuk-heading-m">
            Case file quick search
          </h2>
          <div class="govuk-form-group">
            <label class="govuk-label" for="last-name">
              Case file ID           
            </label>
            <input class="govuk-input" id="last-name" name="last-name" type="text"></input>
          </div>
          <div class="govuk-form-group">
            <label class="govuk-label" for="first-name">
              Area
            </label>
            <input class="govuk-input" id="first-name" name="first-name" type="text"></input>
          </div>
          <div class="govuk-form-group">
            <label class="govuk-label" for="last-name">
              Unit            
            </label>
            <input class="govuk-input" id="last-name" name="last-name" type="text"></input>
          </div>
          <p>
            <a href="/path/of/page">Case file - more options</a>
          </p>
           <button type="submit" id="continue" class="govuk-button" formnovalidate="" data-module="govuk-button" data-prevent-double-click="true">Search</button>
         </form>
      </div> */}
          </div>
        </div>
        <div>
          <h1>Hi {auth?.firstName}!</h1>
          <p>You're logged in with React 18 + Redux & JWT!!</p>
          <p>
            <Link to="/users">Manage Users</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export { Home };

function Home() {
    const auth = useSelector(x => x.auth.value);
    return (
        <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <h1 className="govuk-heading-xl">Welcome to our GDS project</h1>
              <p className="govuk-body">This is a sample home page using the Gov.uk frontend library.</p>
              <Link to="/about" className="govuk-button" data-module="govuk-button">
                Learn more
              </Link>
            </div>
          </div>
          <div>
            <h1>Hi {auth?.firstName}!</h1>
            <p>You're logged in with React 18 + Redux & JWT!!</p>
            <p><Link to="/users">Manage Users</Link></p>
        </div>
        </main>
      </div>
        
    );
}

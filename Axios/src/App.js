import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/redux/Store'; // Import your Redux store
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import ForgetPasswordPage from './components/pages/ForgetPasswordPage';
import HomePage from './components/pages/HomePage';
import AdminLogin from './components/pages/AdminLogin';
import DashBoardPage from './components/pages/Dashboard';
import CoursePage from './components/pages/CoursePage';
import FAQ from './components/pages/FAQAPP';
import TermsAndConditions from './components/pages/terms';
import PrivacyPolicy from './components/pages/privacypolicyApp';
import Meditation from './components/pages/meditation';
import UsersPage from './components/pages/UserPage';
import TrainerPage from './components/pages/trainer';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <HeaderComponent />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/AdminLogin" component={AdminLogin} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/forget-password" component={ForgetPasswordPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/dashboard" component={DashBoardPage} />
            <Route path="/CoursePage" component={CoursePage} />
            <Route path="/FAQ" component={FAQ} />
            <Route path="/tac" component={TermsAndConditions} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/meditation" component={Meditation} />
            <Route path="/UsersPage"component={UsersPage}/>
            <Route path="/trainer"component={TrainerPage}/>
          </Switch>
          <FooterComponent />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

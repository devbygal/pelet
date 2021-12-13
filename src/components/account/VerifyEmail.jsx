import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { accountService, alertService } from '../_services';

export const VerifyEmail = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const EmailStatus = {
    Verifying: 'Verifying',
    Failed: 'Failed'
  }

  const [emailStatus, setEmailStatus] = useState(EmailStatus.Verifying);

  useEffect(() => {
    const { token } = queryString.parse(location.search);

    // remove token from url to prevent http referer leakage
    navigate("/", { replace: true })
    accountService.verifyEmail(token)
      .then(() => {
        alertService.success('.האימות הצליח, כעת תוכל להתחבר', { keepAfterRouteChange: true });
        navigate('/account/login');
      })
      .catch(() => {
        setEmailStatus(EmailStatus.Failed);
      });
  }, []);

  function getBody() {
    switch (emailStatus) {
      case EmailStatus.Verifying:
        return <div>מאמת...</div>;
      case EmailStatus.Failed:
        return <div>האימות נכשל!</div>;
      default:
        break;
    }
  }

  return (
    <div>
      <h3 className="card-header">Verify Email</h3>
      <div className="card-body">{getBody()}</div>
    </div>
  )
}
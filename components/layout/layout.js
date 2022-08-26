import { Fragment, useContext } from "react";
import NotificationContext from "../../store/notification-context";
import MainNavigation from './main-navigation';
import Notification from '../ui/notification';

const Layout = (props)=>{
  const NotificationCtx = useContext(NotificationContext);
  const activeNotification = NotificationCtx.notification;
  return <Fragment>
    <MainNavigation />
    <main>
      {props.children}
    </main>
    {activeNotification && <Notification title={activeNotification.title} message={activeNotification.message} status={activeNotification.status}  />}
  </Fragment>

};

export default Layout;
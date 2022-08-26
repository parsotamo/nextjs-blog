import { useRef, useContext } from 'react';
import NotificationContext from '../../store/notification-context';
import styles from './contact-form.module.css';

const ContactForm = ()=>{
  const emailRef = useRef();
  const nameRef = useRef();
  const msgRef = useRef();
  const notificationCtx = useContext(NotificationContext);
  const handleSubmit = async (e)=>{
    e.preventDefault();
    notificationCtx.showNotification({title: 'Loading', message:'Sending a request', status: 'pending'});
    try {
      await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email: emailRef.current.value,
        name: nameRef.current.value,
        msg: msgRef.current.value
      }),
      'Content-Type': 'application/json'
    });
    notificationCtx.showNotification({title: 'Successfull', message:'A new message was just sent successfully', status: 'success'});
    emailRef.current.value = '';
    nameRef.current.value = '';
    msgRef.current.value = '';
    } catch (error) {
      notificationCtx.showNotification({title: 'Error', message:'Something went wrong', status: 'error'});
    }
  }
  return <section className={styles.contact}>
    <h1>Contact Me</h1>
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} required />
        </div>
        <div className={styles.control}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} required />
        </div>
        <div className={styles.control}>
          <label htmlFor="msg">Message</label>
          <textarea id="msg" cols="5" rows="5" ref={msgRef} required></textarea>
        </div>
        <div className={styles.actions}>
          <button type="submit">Send Message</button>
        </div>
      </div>
    </form>
  </section>

}

export default ContactForm;
import { Fragment } from 'react';
import Head from 'next/head';
import ContactForm from '../components/contact/contact-form';

const ContactPage = ()=>{
  return <Fragment>
    <Head>
      <title>Contact Ilan</title>
      <meta name="description" content="Send Ilan a message." />
    </Head>
    <ContactForm />
    </Fragment>
}

export default ContactPage;
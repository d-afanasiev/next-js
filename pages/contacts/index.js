import Head from "next/head";
import Heading from "../../components/Heading";
import { useState, useEffect } from "react";

const Contacts = () => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list:" />
    </>
  );
};
export default Contacts;

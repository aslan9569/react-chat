import React from 'react';
import styles from './contacts.module.css';
import { NavLink, useParams } from 'react-router-dom';
import LastMessages from './Info/LastMessages';
import NameContacts from './NameContacts';
import { useSelector } from 'react-redux';
import Time from './Info/Time';
import { PropTypes } from 'prop-types';
import Avatar from '../App/Avatar';

function Contact(props) {
  const darkTheme = useSelector((state) => state.application.darkTheme);

  const id = useParams().id;

  //Активный чат (выделенный бэкграунд)
  return (
    <div
      className={
        id === props.contact._id
          ? `${styles.selected} ${styles.contacts}`
          : styles.contacts
      }
    >
      <NavLink
        className={darkTheme ? styles['link_dark'] : ''}
        to={`/contact/${props.contact._id}`}
      >
        <li>
          {/* В size рекомендуется передать параметр medium */}
          <Avatar
            fullname={props.contact.fullname}
            size={'medium'}
            online={props.contact.online}
          />
          <div className={styles['info-block']}>
            <NameContacts contacts={props.contact} />
            <LastMessages contacts={props.contact} />
          </div>
          <div className={styles.time}>
            <Time contacts={props.contact} />
          </div>
        </li>
      </NavLink>
    </div>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default Contact;

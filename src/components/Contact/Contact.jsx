import { PiUserCircleDuotone, PiPhoneDuotone } from 'react-icons/pi';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contact} id={id}>
      <div className={css.avatar}>{name[0]}{name[1]}</div>
      <div className={css.details}>
        <p className={css.field}>
          <PiUserCircleDuotone size={18} /> {name}
        </p>
        <p className={css.field}>
          <PiPhoneDuotone size={18} /> {number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDeleteContact} type="button">
        Delete
      </button>
    </li>
  );
}

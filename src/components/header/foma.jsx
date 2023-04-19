import { Contacts } from 'components/contacts/contacts';
import { FindFilt } from 'components/filter/findFiltr';
import { Form } from 'components/formAddContact/form';
import './forma.css'
export const ContactsForm = () => {
  return (
    <div className='forma'>
      <Form />
      <FindFilt />
      <Contacts />
    </div>
  );
};

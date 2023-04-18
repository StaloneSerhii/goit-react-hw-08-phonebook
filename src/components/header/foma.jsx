import { Contacts } from 'components/contacts/contacts';
import { FindFilt } from 'components/filter/findFiltr';
import { Form } from 'components/formAddContact/form';

export const ContactsForm = () => {
  return (
    <div>
      <Form />
      <FindFilt />
      <Contacts />
    </div>
  );
};

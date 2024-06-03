import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/slice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className="flex gap-5 flex-wrap justify-center ">
      {contacts.map((contact) => (
        <li key={contact.id} className="">
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}

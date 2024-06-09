import { useDispatch, useSelector } from "react-redux";
import { Circles } from "react-loader-spinner";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import ContactList  from "../../components/ContactList/ContactList";
import SearchBox  from "../../components/SearchBox/SearchBox"
import ContactForm from "../../components/ContactForm/ContactForm";
import DocumentTitle from "../../components/DocumentTitle";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { Toaster } from "react-hot-toast";




export default function ContactsPage() {

    const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])

  return (
    <div className="root flex flex-col justify-center items-center  p-5">
<DocumentTitle>Your contacts</DocumentTitle>
      <div className=" p-5 bg-gradient-to-br from-blue-300 mb-5 rounded-lg">
        <h1 className="text-3xl mb-5 font-bold text-center">Phonebook</h1>
        <ContactForm/>
        <SearchBox />
      </div>
      {isLoading && !error && (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      <ContactList />
      <Toaster/>
    </div>
  );
     

}

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ data }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-6 w-60 items-center rounded p-5 bg-gradient-to-b from-yellow-300">
      <div className="">
        <p className="text-center font-semibold pt-1">{data.name}</p>
        <p className="text-center">{data.number}</p>
      </div>
      <button
        type="button"
        className="bg-red-400
            border rounded  h-7 p-3 border-none flex justify-center
            items-center hover:bg-red-500 transition-all"
        onClick={() => dispatch(deleteContact(data.id))}
      >
        Delete
      </button>
    </div>
  );
}

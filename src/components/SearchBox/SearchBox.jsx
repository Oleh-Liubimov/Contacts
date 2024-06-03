import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilterName } from "../../redux/filters/selectors";

export default function SearchBox() {
  const value = useSelector(selectFilterName);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto px-5">
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className="border border-black rounded  outline-none p-2 "
      />
    </div>
  );
}

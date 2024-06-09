import { toast } from "react-hot-toast";

export const deleteContactNotify = () => toast.error("Contact deleted")
export const createContactNotify = () => toast.success("Contact created")
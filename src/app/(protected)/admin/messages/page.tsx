import { auth } from "@/auth";
import {getContacts} from "@/actions/contact-action";
import SingleContact from "@/components/SingleContact";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "contacts List",
};
const AdminPage = async () => {
  const contacts = await getContacts();
  const session = await auth();
const contact = session?.user;
  console.log(session);

  if (session?.user?.role !== "ADMIN") {
    return <div>No eres administrador</div>;
  }

  return (
    <div className="mx-auto max-w-fit">
    <h1>Messages List</h1>
<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 ">
    {contacts.map((item: any) => ( contact &&
          (<SingleContact key={item.id} data={item} />)
        ))}
    </div>
  </div>
  );
};
export default AdminPage;

import { auth } from "@/auth";
import getUsers from "@/actions/getUsers";
import SingleUser from "@/components/SingleUser";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Users List",
};
const AdminPage = async () => {
  const users = await getUsers();
  const session = await auth();
const user = session?.user;
  console.log(session);

  if (session?.user?.role !== "ADMIN") {
    return <div>No eres administrador</div>;
  }

  return (
    <div className="container-fluid ">
     <h1 className="m-1">Users List</h1>
     <div className="grid md:grid-cols-3   sm:grid-cols-2  xs:grid-cols-1 lg:grid-cols-4">
    {users.map((item: any) => ( user &&
          (<SingleUser key={item.id} data={item} />)
        ))}
    </div>
  </div>
  );
};
export default AdminPage;

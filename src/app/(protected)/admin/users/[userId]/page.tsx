import getUserById from "@/actions/getUserById";
import AdminUserEditForm from "@/components/AdminUserEditForm";

interface IParams {
  userId: string;
}

export default async function page({ params }: { params: IParams }) {
  const user = await getUserById(params);

  const date = user?.createdAt;
  const date2 = new Date(date ?? 2023).toDateString();

  return (
    <div className="">
      <div>{user &&   <AdminUserEditForm
          name={user.name}
          image={user.image as string}
          userId={user.id}
          email={user.email as string}
        />}
      
      </div>
    </div>
  );
}

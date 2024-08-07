import Filter from "./_components/filter";
import Table from "./_components/table";
import Action from "./action";

export default async function Page() {
  const data = await Action.getlist();
  return (
    <div className="container m-auto">
      <h1 className="text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
        POST
      </h1>
      <Filter />
      <Table data={data} />
    </div>
  );
}

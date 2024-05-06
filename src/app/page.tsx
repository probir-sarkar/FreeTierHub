import { allSoftware } from "./actions";
import Test from "@/components/list/test";

export default async function Home() {
  const software = await allSoftware();

  return (
    <div className="">
      <Test test={software} />
    </div>
  );
}

import dynamic from "next/dynamic";

const MyDropDown = dynamic(() => import("../components/DropDown"), {
  ssr: false,
});

export default function DropDown() {
  return <MyDropDown />;
}

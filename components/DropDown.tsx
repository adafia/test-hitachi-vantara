import { HvDropdown } from "@hitachivantara/uikit-react-core";

export default function DropDown() {
  return (
    <HvDropdown
      defaultExpanded
      label="Select values"
      multiSelect
      showSearch
      status="valid"
      values={[
        {
          label: "value 1",
        },
        {
          label: "value 2",
          selected: true,
        },
        {
          label: "value 3",
        },
        {
          label: "value 4",
        },
      ]}
    />
  );
}

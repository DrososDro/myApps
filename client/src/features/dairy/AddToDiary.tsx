import { useForm } from "react-hook-form";
import { timeToHumanReadable } from "../../utils/helperFunctions";
import SelectSearch, {
  BaseOption,
} from "../../components/selectSearch/SelectSearch";
import React from "react";
import AddGymMachine from "../gym/AddGymMachine";

function renderCategory(category: BaseOption | null): React.ReactElement {
  if (category?.value === "gym") {
    return <AddGymMachine />;
  } else null;
}
const selectCategoryOptions = [
  { label: "Gym", value: "gym" },
  { label: "Diary", value: "diary" },
  { label: "Nutrition Tracker", value: "nutritionTracker" },
];
export default function AddToDiary() {
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      selectCategory: null,
      time: timeToHumanReadable(),
    },
  });
  const category = watch("selectCategory");
  const renderCat = renderCategory(category);
  function onHandleSubmit(data) {
    console.log("data", data);
  }
  return (
    <div className="w-11/12 md:w-1/2">
      <h2 className="mb-10 text-center text-2xl capitalize">Diary</h2>
      <form
        onSubmit={handleSubmit(onHandleSubmit)}
        className="mb-10 flex flex-col gap-5"
      >
        <SelectSearch
          name="selectCategory"
          options={selectCategoryOptions}
          control={control}
        />
        {renderCat}
      </form>
    </div>
  );
}

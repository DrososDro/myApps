import { useForm } from "react-hook-form";
import { apiNutritionsFoods } from "../../services/nutritionsApiCalls";
import { useQuery } from "@tanstack/react-query";
import Button from "../../ui/Button";
import SelectSearch from "./SelectSearch";

interface itemsTypes {
  food: string;
  quantity: number;
  calories: number;
  pkid: number;
}
interface dataTypes {
  test: { label: string; value: number; pkid: number };
}

export default function TestSelectSearch() {
  const { control, handleSubmit } = useForm<dataTypes>();
  const { data: foodOptionsData, isLoading } = useQuery({
    queryKey: ["foodSelect"],
    queryFn: apiNutritionsFoods,
  });
  if (isLoading) {
    return <div className="bg-slate-800">Loading</div>;
  }

  function submitHandler(data: dataTypes) {
    console.log("data", data);
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex w-1/2 flex-col gap-10"
    >
      <SelectSearch
        name="test"
        control={control}
        options={foodOptionsData.map((item: itemsTypes) => ({
          label: `${item.food} (${item.quantity})`,
          value: item.calories,
          pkid: item.pkid,
        }))}
      />

      <div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}

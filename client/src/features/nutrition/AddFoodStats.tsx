import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../ui/Button";
interface AddFoodFormTypes {
  food: string;
  quantity2: string;
  calories: number;
}

export default function AddFoodStats() {
  const submitHandle = (data: AddFoodFormTypes) => {
    console.log("data", data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddFoodFormTypes>();
  return (
    <form
      onSubmit={handleSubmit(submitHandle)}
      className="flex w-96 flex-col gap-6 px-4 py-4"
    >
      <Input
        htmlType="text"
        name="food"
        displayName="Food Name"
        register={register("food")}
        error={errors.food?.message}
      />
      <Input
        htmlType="text"
        name="quantity2"
        displayName="quantity per calories"
        register={register("quantity2")}
        error={errors.quantity2?.message}
      />
      <Input
        name="calories"
        register={register("calories")}
        error={errors.calories?.message}
        htmlType="number"
      />
      <div className="mt-5">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}

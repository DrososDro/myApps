import AddHours from "../img/alarm_add_24dp_FILL0_wght400_GRAD0_opsz24.svg?react";
import SetWorkHours from "../img/manage_history_24dp_FILL0_wght400_GRAD0_opsz24.svg?react";
import SumWorkTime from "../img/pending_actions_24dp_FILL0_wght400_GRAD0_opsz24.svg?react";
import ShowWorkTime from "../img/schedule_24dp_FILL0_wght400_GRAD0_opsz24.svg?react";
import { data } from "../types/dataTypes";
import { FaListCheck, FaPlus } from "react-icons/fa6";

const WORKHOURS_SIDEBAR_DATA: data[] = [
  {
    icon: ShowWorkTime,
    to: "work-hours/show-work-time",
    name: "Show Work Time",
  },
  { icon: AddHours, to: "work-hours/add-work-time", name: "Add Work Hours" },
  { icon: SumWorkTime, to: "work-hours/sum-work-time", name: "Sum Work Time" },
  { icon: SetWorkHours, to: "work-hours/set-work-time", name: "Set Work Time" },
];

const TODOS_SIDEBAR_DATA: data[] = [
  { icon: FaListCheck, to: "todos/show-todos", name: "Show Todos" },
  { icon: FaPlus, to: "todos/add-todo", name: "Add Todo" },
];

export { WORKHOURS_SIDEBAR_DATA, TODOS_SIDEBAR_DATA };

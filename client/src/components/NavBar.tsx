import { NavLink } from "react-router-dom";

const navLingDecoration = " flex items-center justify-start gap-4 px-2 py-2";
const active = "rounded-md bg-slate-800";
//TODO: make a burger menu here
export default function NavBar() {
  return (
    <div className="flex h-16 items-center justify-between bg-slate-950 px-4  ">
      <div className="text-3xl font-bold">HMS</div>
      <ul className="flex items-center gap-4">
        <li>
          <NavLink
            to="/todos"
            className={({ isActive }) =>
              (isActive ? active : undefined) + navLingDecoration
            }
          >
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user"
            className={({ isActive }) =>
              (isActive ? active : undefined) + navLingDecoration
            }
          >
            User
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/work-hours"
            className={({ isActive }) =>
              (isActive ? active : undefined) + navLingDecoration
            }
          >
            Work hours
          </NavLink>
        </li>
        {/**/}
        {/* <li> */}
        {/*   <button>Houses</button> */}
        {/* </li> */}
        {/* <li> */}
        {/*   <button>Vehicles</button> */}
        {/* </li> */}
      </ul>
    </div>
  );
}

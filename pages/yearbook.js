// importing hooks
import { useState } from "react";

// importing components
import { Drawer } from "@mui/material";
import { Button } from "@mui/material";
import Banner from "@/components/Banner/Banner";
import Session from "@/components/Session/Session";

// available departments
import { departments } from "@/utils";

// drawer options
function DrawerOptions({ toggleDrawer, setDepartment }) {
  // drawer button handler
  const handleClick = (code) => {
    setDepartment(code);
    toggleDrawer();
  };

  return (
    <div className="drawerOptions">
      <div className="drawerOptions__header my-5 px-5">
        <Banner />
      </div>

      <div className="drawerOptions__options my-10">
        {departments.map((department) => {
          return (
            <div
              key={department.code}
              className={`drawerOptions__options__${department.code} my-2 hover:bg-blue-300 px-5 py-2`}
            >
              <button
                onClick={() => {
                  handleClick(department.code);
                }}
              >
                {department.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// yearbook component
export default function Yearbook() {
  // states
  const [open, setOpen] = useState(false);
  const [department, setDepartment] = useState(departments[0].code);

  // drawer handler
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="yearbook p-2">
      <div className="yearbook__drawer">
        <Button onClick={toggleDrawer}>Open</Button>
        <Drawer anchor="left" open={open} onClose={toggleDrawer}>
          <DrawerOptions
            toggleDrawer={toggleDrawer}
            setDepartment={setDepartment}
          />
        </Drawer>
      </div>

      <div className="yearbook__session">
        <Session department={department} />
      </div>
    </div>
  );
}

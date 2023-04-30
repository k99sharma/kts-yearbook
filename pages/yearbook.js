// importing hooks
import { useState } from "react";

// importing components
import { Drawer } from "@mui/material";
import { Button } from "@mui/material";
import Banner from "@/components/Banner/Banner";
import Book from "@/components/Book/Book";

// available books
const books = [
  {
    name: "Computer Science",
    code: "CS",
  },
  {
    name: "Information Technology",
    code: "IT",
  },
  {
    name: "Computer Science and Engineering",
    code: "CSE",
  },
];

// drawer options
function DrawerOptions({ toggleDrawer, setCurrentBook }) {
  // drawer button handler
  const handleClick = (code) => {
    setCurrentBook(code);
    toggleDrawer();
  };

  return (
    <div className="drawerOptions">
      <div className="drawerOptions__header my-5 px-5">
        <Banner />
      </div>

      <div className="drawerOptions__options my-10">
        {books.map((book) => {
          return (
            <div
              key={book.code}
              className={`drawerOptions__options__${book.code} my-2 hover:bg-blue-300 px-5 py-2`}
            >
              <button
                onClick={() => {
                  handleClick(book.code);
                }}
              >
                {book.name}
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
  const [currentBook, setCurrentBook] = useState(books[0].code);

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
            setCurrentBook={setCurrentBook}
          />
        </Drawer>
      </div>
      <div className="yearbook__books">
        <Book book={currentBook} />
      </div>
    </div>
  );
}

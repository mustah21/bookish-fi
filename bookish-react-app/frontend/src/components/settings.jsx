import { useState, useRef, useEffect } from "react";

const ThreeDotsMenu = ({ onLogout }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* 3 dots button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 rounded-full hover:bg-gray-200"
      >
        ⋮
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border">
          <button
            onClick={onLogout}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Log out
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Settings
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default ThreeDotsMenu;

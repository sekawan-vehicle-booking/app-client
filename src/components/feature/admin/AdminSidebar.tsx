import { useLocation } from "react-router-dom";

const sidebarContents = [
  {
    label: "Rent",
    path: "/admin/rents",
  },
  {
    label: "Vehicle",
    path: "/admin/vehicles",
  },
];

export default function AdminSidebar() {
  const location = useLocation();

  return (
    <>
      <div className="md:w-1/4 bg-white z-10 rounded-e-xl overflow-clip">
        <ul>
          {sidebarContents.map((content, index) => (
            <li
              key={index}
              className={`${
                location.pathname.includes(content.path) && "bg-slate-300"
              }`}
            >
              <a href={content.path}>{content.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

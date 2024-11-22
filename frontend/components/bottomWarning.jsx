import { Link } from "react-router-dom";

export function bottonWarning({ label, buttonText, to }) {
  return (
    <div className="text-sm flex justify-center py-1">
      <div>{label}</div>
      <Link className="underline cursor-pointer" to={to}></Link>
    </div>
  );
}

import { Link } from "react-router-dom";

export function BottomWarning({ label, buttonText, to }) {
  return (
    <div className="text-sm flex justify-center  pb-5 pt-3">
      <div>{label}</div>
      <Link className="underline cursor-pointer pl-1" to={to}>
      {buttonText}
      </Link>
    </div>
  );
}

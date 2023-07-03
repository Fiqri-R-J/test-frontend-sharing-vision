import React from "react";

export default function navbar() {
  return (
    <div className="text-white navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Sharing Vision</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Publish</a>
          </li>
          <li>
            <a>Draft</a>
          </li>
          <li>
            <a>Trashed</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

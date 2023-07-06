import React from "react";

function Content() {
  return (
    <div className="flex flex-col bg-slate-800 p-10 text-white">
      <h1 className="text-left py-3 text-6xl">Fun Facts about React</h1>
      <ul
        role="list"
        class="text-slate-400 text-lg text-left marker:text-sky-400 list-disc pl-5 space-y-3"
      >
        <li>Was first released in 2013.</li>
        <li>Was originally created by Jordan Walke.</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps.</li>
      </ul>
    </div>
  );
}

export default Content;

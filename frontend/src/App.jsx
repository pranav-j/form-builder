import { useState } from "react";
import "./index.css";

function App() {
  const inputsTypes = ["number", "text", "checkbox", "radio", "select"];
  const [formTitle, setFormTitle] = useState("");

  return (
    <div className="m-5">
		<h1 className="border rounded-2xl flex justify-center items-center font-bold text-blue-500 mb-5">FORM BUILDER</h1>

		<div className="flex gap-5">
			<div className="w-1/2 border rounded-2xl p-10">
				<div className="flex flex-col gap-3 mb-5">
				{inputsTypes.map((inputsType, idx) => (
					<button className=" border-none rounded-md w-fit px-3 bg-blue-200" key={idx} >{inputsType}</button>
				))}
				</div>

				<button className="bg-blue-500 border-none rounded-md px-3">Create a form</button>
			</div>

			<div className="w-1/2 border rounded-2xl p-10">
				<h3>Input from name</h3>
				<input className="border rounded-md" type="text" placeholder="Form title" value={formTitle} onChange={(e) => setFormTitle(e.target.value)} />
				
			</div>
		</div>


    </div>
  );
}

export default App;

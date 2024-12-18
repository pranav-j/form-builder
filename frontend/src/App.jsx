import { useEffect, useState } from "react";
import "./index.css";

function App() {
	const [inputType, setInputType] = useState("");
	const [inputTypeAttributes, setInputTypeAttributes] = useState({type: inputType});
	const [fields, setFields] = useState([]);
	const [formTitle, setFormTitle] = useState("");
	const [formFields, setFormFields] = useState({});

	const attributeMap = {
		text: ["label", "name", "required", "placeholder"],
		number: ["label", "name", "required", "min", "max"],
	};

	const handleAttributes = (key, value) => {
		setInputTypeAttributes((prev) => ({
			...prev,
			[key]: value
		}))
	};

	const addField = () => {
		setFields((prev) => [...prev, inputTypeAttributes]);
		setInputTypeAttributes({});
	};

	useEffect(() => {
		// console.log(inputTypeAttributes);
		// console.log(fields);
		const formData = {
			title: formTitle,
			fields
		};
		setFormFields(formData);
		// console.log(formDetails);
	}, [fields, formTitle])

	useEffect(() => {
		console.log(formFields);
	}, [formFields])

	return (
	<div className="m-5">
		<h1 className="border rounded-2xl flex justify-center items-center font-bold text-blue-500 mb-5">FORM BUILDER</h1>

		<div className="flex gap-5">
			<div className="w-1/2 flex border rounded-2xl p-10">
				<div className="w-1/3 flex flex-col gap-3 mb-5">
					<button className="border-none rounded-md w-fit px-3 bg-blue-200" 
						onClick={() => {
							setInputType("text");
							setInputTypeAttributes({type: "text"})
						}
					}>
						text
					</button>

					<button className="border-none rounded-md w-fit px-3 bg-blue-200" 
						onClick={() => {
							setInputType("number");
							setInputTypeAttributes({type: "number"})
						}
					}>
						number
					</button>
				</div>
				
				<div className="w-2/3 flex flex-col justify-center gap-3">
					<h3>Input from name</h3>
					<input className="border rounded-md" type="text" placeholder="Form title" value={formTitle} onChange={(e) => setFormTitle(e.target.value)} />
					{inputType && 
					<div>
						<div className="flex flex-col gap-2 border rounded-md p-3">
							{attributeMap[inputType].map((attribute, idx) => (
								<div key={idx}>
									{attribute !== "required" && 
										<div>
											<label htmlFor="">{attribute} : </label>
											<input className="border rounded" type="text" value={inputTypeAttributes[attribute] || ""} onChange={(e) => handleAttributes(attribute, e.target.value)} />
										</div>
									}
									{attribute === "required" && 
										<div>
											<label htmlFor="">{attribute} : </label>
											<input className="border rounded" type="checkbox" checked={!!inputTypeAttributes[attribute]} onChange={(e) => handleAttributes(attribute, e.target.value)} />
										</div>
									}
								</div>
							))}
						</div>
						<button className="border-none bg-green-200 px-2 py-1 rounded-md w-fit" onClick={addField}>Add this input type</button>
					</div>
					}
				</div>
				

			</div>

			<div className="w-1/2 border rounded-2xl p-10">
				<form action="">
					<h1 className="font-semibold">{formFields.title}</h1>
					<form action="">
						{formFields.fields?.map((field, idx) => (
							<div key={idx}>
								<label className="pr-3" htmlFor={field.name}>{field.label} :</label>
								<input className="border rounded-md" type={field.type} />
							</div>
						))}
					</form>
				</form>
				
			</div>
		</div>


	</div>
	);
}

export default App;

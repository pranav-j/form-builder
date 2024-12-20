import { useEffect, useState } from "react";

const RenderForm = ({formFields}) => {

    const [formData, setFormData] = useState(() => {
		const initialData = {};
		formFields.fields?.forEach((field) => {
			initialData[field] = "";
		})
		return initialData;
	})

    useEffect(() => {
        console.log(formData);
    }, [formData])
    
    const printFormData = () => {
        console.log(formData);
    }

    return(
        <div className="w-1/2 border rounded-2xl p-10">
            <h1 className="font-semibold">{formFields.title}</h1>
            <form action="">
                {formFields.fields?.map((field, idx) => (
                    <div key={idx}>
                        <label className="pr-3" htmlFor={field.name}>{field.label} :</label>
                        <input className="border rounded-md" type={field.type} />
                    </div>
                ))}
            </form>
            <button onClick={printFormData}>Print formData</button>
        </div>
    )
}

export default RenderForm;
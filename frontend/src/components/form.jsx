import { useEffect, useState } from "react";

const RenderForm = ({formFields}) => {

    const [formData, setFormData] = useState({});

    useEffect(() => {
        const initialData = {};
        formFields.fields?.forEach((field) => {
            initialData[field.name] = "";
        });
        setFormData(initialData);
    }, [formFields])

    useEffect(() => {
        console.log(formData);
    }, [formData])

    const handleInput = (e, fieldName) => {
        setFormData((prev) => ({
            ...prev,
            [fieldName]: e.target.value
        }))
    }

    return(
        <div className="w-1/2 border rounded-2xl p-10">
            <h1 className="font-semibold">{formFields.title}</h1>
            <form action="" className="flex flex-col gap-2">
                {formFields.fields?.map((field, idx) => (
                    <div key={idx}>
                        <label className="pr-3" htmlFor={field.name}>{field.label} :</label>
                        <input onChange={(e) => handleInput(e, field.name)} className="border rounded-md" type={field.type} />
                    </div>
                ))}
            </form>
        </div>
    )
}

export default RenderForm;
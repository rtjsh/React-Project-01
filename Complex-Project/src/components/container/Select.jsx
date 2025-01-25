import React,{useId} from "react";

function Select({
    options,
    label,
    className = "", // It is initialized to an empty string so that "null" value doesn't get to pass in "${className}"
    ...props
},ref ){
    const id = useId()
    return(
        <div className="w-full">
            {label && <label htmlFor={id} className="">
            </label>}
            <select 
            {...props}
            id={id}
            ref={ref}
            className = {`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
                {/* If "options" is available then only it will loop */}
                {options?.map((option)=>(
                    <option key={option} value={option}>
                        {option}
                    </option>

                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)
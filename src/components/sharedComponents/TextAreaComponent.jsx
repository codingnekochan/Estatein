export default function TextAreaComponent({id,label,placeholder}){
    return <div>
        <label htmlFor={id}>
            {label}
        </label>
        <textarea name={id} id={id} className="border" placeholder={placeholder}></textarea>
    </div>
}
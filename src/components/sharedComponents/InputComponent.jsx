export default function InputComponent({ id, type, label, placeholder }) {
    return <div>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} name={id} placeholder={placeholder} />
    </div>

}


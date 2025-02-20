export const InputFiled = ({label, name, onChange, placeholder, error, required, value, type }) => {
    return (
        <div className="space-y-1">
        <label className="text-sm font-semibold text-[#334155] ">{label}
            {required && <span className="text-red-700">*</span>}
        </label>
        <br />
        <input type={type} onChange={onChange} name={name} className="border rounded-lg placeholder: p-3 w-full" placeholder={placeholder} value={value} />
        {
            error && <p className="text-red-700">{error}</p>
        }
    </div>
    )
}
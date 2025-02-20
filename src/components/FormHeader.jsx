export const FormHeader = ({title, description}) => {
    return (
        <div>
        <img src="/Main 1.svg" />
        <h1 className="text-[#202124] font-semibold text-2xl my-2">{title}</h1>
        <p className="text-[#8e8e8e] font-normal text-lg">{description}</p>
        </div>
    )
}
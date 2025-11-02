
export const CardTechStack = ({techStackText} : {techStackText:  string[]}) => {
    return (
        <section className='flex px-3 p-1 md:mt-2 gap-2 text-sm items-center absolute bottom-2'>
            {techStackText.map((stack, i) =>  (
            <div className='items-center' key={i}>
                <div className='bg-white w-auto h-auto items-center justify-center rounded-md text-center'><h1 className="text-center mt-0.5 px-2 py-0.5">{stack}</h1></div>
            </div>
            ))}
        </section>
    )
}


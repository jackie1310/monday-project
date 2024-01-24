export default function Layout({children, img}) {
    return (
        <div className="flex">
            <div className="md:w-3/5 w-full relative h-fit">
                {children}
            </div>
            <img src={img} alt="banner" className='hidden md:block h-screen right-0 md:w-2/5'/>
        </div>
    )
}
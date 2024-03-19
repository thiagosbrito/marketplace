const ImagesGallery = ({ gallery }: {gallery: SanityI}) => {
    return (
        <div className="w-full min-h-[600px] flex grid-cols-2 gap-2">
            <div className="w-6/12 h-full">
                <div className="w-full h-full rounded-l-xl bg-slate-300 flex items-center justify-center">
                    Main picture
                </div>
            </div>
            <div className="flex-1 w-6/12 grid grid-cols-2 grid-rows-2 h-full gap-2">
                <div className="bg-slate-300 items-center justify-center flex">1</div>
                <div className="bg-slate-300 rounded-tr-xl items-center justify-center flex">2</div>
                <div className="bg-slate-300 items-center justify-center flex">3</div>
                <div className="bg-slate-300 rounded-br-xl items-center justify-center flex">4</div>
            </div>
        </div>
    )
};
export default ImagesGallery;
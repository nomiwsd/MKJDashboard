import Image from "next/image";

const Category = ({ imageUrl, titles, mainHeading }) => {
    if (!imageUrl) {
        return null; // or you can render a placeholder image or handle it differently
    }
    const width = '50';
    const height = '50';
    return (
        <div className="border border-primarycl rounded-md p-4 mb-4 flex flex-col justify-center items-center w-full md:w-64 h-40 bg-white shadow-xl hover:scale-100">
            <Image src={imageUrl} alt="Category Image" className="object-cover" width={width}
                height={height} />
            <h3 className="text-lg font-semibold text-primarycl">{mainHeading}</h3>
            <div className="flex justify-center items-center gap-2">
                <p className="text-sm font-medium text-primarycl">{titles[0]}|</p>
                <p className="text-sm font-medium text-primarycl">{titles[1]}|</p>
                <p className="text-sm font-medium text-primarycl">{titles[2]}</p></div>
        </div>
    );
};

export default Category;
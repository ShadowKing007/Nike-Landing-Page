const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImage}) => {

    const handleClick =() => {
        if(bigShoeImage !== imgURL.bigShoe)
        {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl hover:scale-110  dark:text-white dark:bg-neutral-900
        ${bigShoeImage === imgURL.bigShoe
            ? 'border-coral-red'
            : 'border-transparent'
        } cursor-pointer max-sm:flex-1  dark:text-white dark:bg-neutral-900
    `}
        onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4  dark:text-white dark:bg-neutral-900">
            <img
                src={imgURL.thumbnail}
                alt="Shoes collections"
                width={127}
                height={103}
                className="object-contain"
            />
        </div>
    </div>
  )
}

export default ShoeCard
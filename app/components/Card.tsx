import Image from "next/image";

export type CardType = {
    img: string;
    name: string;
    pricing: string;
    rating: number | null;
    votes: number;
    available: boolean;
};

export default function Card({
    img,
    name,
    pricing,
    rating,
    votes,
    available,
}: CardType) {
    return (
        <div className="p-3 flex flex-col justify-between basis-1/3">
            <Image
                src={img}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                alt={name}
                className="rounded-md"
            />
            <div className="mt-2 flex flex-row justify-between items-center">
                <p className="text-white font-bold">{name}</p>
                <p className="px-1 py-0.5 bg-[#BEE3CC] font-bold rounded-md">
                    {pricing}
                </p>
            </div>
            <div className="flex gap-1">
                {rating === null ? (
                    <div className="flex gap-1">
                        <img src="/assets/Star.svg" alt="Star" />
                        <p className="text-[#6F757C]">No ratings</p>
                        {available === false ? (
                            <p className="text-[#6F757C]">Sold out</p>
                        ) : null}
                    </div>
                ) : (
                    <div className="flex justify-between">
                        <div className="flex">
                            <img src="/assets/Star_fill.svg" alt="star fill" />
                            <p className="text-white">{rating}</p>
                            <p className="mx-1 text-[#6F757C]">
                                ({votes} votes)
                            </p>
                        </div>
                        {available === false ? (
                            <p className="ml-24 text-[#ED735D] font-bold">
                                Sold out
                            </p>
                        ) : null}
                    </div>
                )}
            </div>
        </div>
    );
}

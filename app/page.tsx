"use client";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Image from "next/image";
export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                return setData(data);
            });
    }, []);

    return (
        <main className="overflow-hidden relative h-screen w-full bg-primary-background">
            <div className="absolute w-full h-full">
                <Image
                    src="/assets/bg-cafe.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "200px",
                    }}
                    alt="cafe background"
                />
            </div>
            <section className="mx-96 mt-20 px-20 py-5 z-1 absolute rounded-lg bg-secondary-background flex flex-col justify-center items-center">
                <div className="p-3 mt-5 flex flex-col gap-2.5">
                    <h1 className="text-4xl text-center text-white font-bold">
                        Our Collection
                    </h1>
                    <p className="max-w-lg text-center text-[#6F757C]">
                        Introducing our Coffee Collection, a selection of unique
                        coffees from different roast types and origins, expertly
                        roasted in small batches and shipped fresh weekly
                    </p>
                    <div className="flex items-center justify-center gap-5">
                        <p className="p-1.5 rounded-md bg-[#6F757C] text-white font-bold">
                            All Products
                        </p>
                        <p className="text-white font-bold">Available now</p>
                    </div>
                </div>
                <div className="flex justify-center flex-wrap ">
                    {data?.map((item) => (
                        <Card
                            key={item.id}
                            img={item.image}
                            name={item.name}
                            pricing={item.price}
                            rating={item.rating}
                            votes={item.votes}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

"use client";
import React, { useEffect, useState } from 'react';
import { services } from '@/app/enum/services';
import Link from 'next/link';

interface Post {
    id: number;
    name: string;
    img: string;
    info: string;
}

export default function UslugePost() {
    const [postId, setPostId] = useState<string | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const pathSegments = window.location.pathname.split("/");
        const postIdFromPath = pathSegments.pop();

        if (postIdFromPath) {
            setPostId(postIdFromPath);
            console.log('postId:', postIdFromPath);

            const postIdNumber = parseInt(postIdFromPath, 10);

            const matchedService = services.find(service => service.locationId === postIdNumber);

            if (matchedService) {
                setPosts(matchedService.topLocations);
                console.log("matchedPosts", matchedService.topLocations);
            }
        }
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-10">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {posts.map((item, index) => (

                    <div key={index} className="p-4 bg-white rounded-md relative h-[450px]">
                        <p className="text-[#09396d] font-bold uppercase text-2xl mb-2">{item.name}</p>
                        <img src={item.img} alt={item.name} className="w-full h-40 object-cover mb-2" />
                        <p className="text-[#09396d] text-sm">{item.info}</p>
                        <Link href={`/pages/usluge`}>
                            <div className="absolute bottom-2 right-2 text-[#09396d] uppercase font-bold cursor-pointer mt-8">Nazad</div>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}

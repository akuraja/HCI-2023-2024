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
        <main className="flex flex-col items-center justify-center min-h-screen relative">
            {posts.map((item, index) => (
                <div key={index} className="relative w-full h-screen">
                    <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover z-0" />
                    <div className="absolute inset-0 flex items-center justify-center text-center z-10">
                        <h1 className="text-white font-bold uppercase text-4xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{item.name}</h1>
                    </div>
                    <div className="absolute bottom-4 left-4 z-10">
                        <p className="text-white text-3xl"></p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-10 bg-white bg-opacity-90 text-center z-10">
                        <p className="text-[#09396d] text-sm">{item.info}</p>
                        <Link href="/pages/usluge">
                            <div className="absolute bottom-2 right-2 text-[#09396d] uppercase font-bold cursor-pointer mt-8">Nazad</div>
                        </Link>
                    </div>
                </div>
            ))}
        </main>
    );
}

"use client";

import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { podcastData } from "@/constants";
import { useRouter } from "next/navigation";
import LoaderSpinner from "./LoaderSpinner";
import { cn } from "@/lib/utils";

const RightSidebar = () => {
  const { user } = useUser();
  const topPodcasters = useQuery(api.users.getTopUserByPodcastCount);
  const router = useRouter();

  if (!podcastData) return <LoaderSpinner />;

  return (
    <section
      className={cn("right_sidebar text-white-1 h-[calc(100vh-5px)]", {
        // "h-[calc(100vh-140px)]": audio?.audioUrl,
      })}
    >
      <SignedIn>
        <Link className="flex gap-3 pb-12" href={`/profile/${user?.id}`}>
          <UserButton />
          <div className="flex w-full items-center justify-between">
            <h1 className="text-white-1 text-16 truncate font-semibold">
              {user?.firstName} {user?.lastName}
            </h1>
            <Image
              src="/icons/right-arrow.svg"
              alt="arrow"
              width={24}
              height={24}
            />
          </div>
        </Link>
      </SignedIn>

      <section>
        <Header headerTitle="Fans Like You" />
        <br />
        <Carousel fansLikeDetail={topPodcasters!} />
      </section>

      <section className="flex flex-col gap-8 pt-12">
        <Header headerTitle="Top Podcasters" />
        <div className="flex flex-col gap-6">
          {podcastData
            .slice(0, 5)
            .map(({ id, title, description, imgURL, author }) => (
              <div key={id} className="flex cursor-pointer justify-between">
                <figure
                  className="flex items-center gap-2"
                  onClick={() => router.push(`/podcasts/${id}`)}
                >
                  <Image
                    src={imgURL}
                    alt={author}
                    width={44}
                    height={44}
                    className="aspect-square rounded-lg"
                  />
                  <h2 className="text-14 font-semibold text-white-1">
                    {author.slice(0, 8)}...
                  </h2>

                  {/* <div className="glassmorphism-black relative z-10 flex flex-col rounded-b-xl p-4">
                  <h2 className="text-14 font-semibold text-white-1">
                  {title}
                  </h2>
                  {/* <p className="text-12 font-normal text-white-2">{item.name}</p> */}
                  {/* </div> */}
                </figure>
                <div className="flex items-center">
                  <p className="text-12 font-normal">{id} podcasts</p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </section>
  );
};

export default RightSidebar;

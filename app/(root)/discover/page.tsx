"use client";

import EmptyState from "@/components/EmptyState";
import LoaderSpinner from "@/components/LoaderSpinner";
import PodcastCard from "@/components/PodcastCard";
import SearchBar from "@/components/SearchBar";
import { podcastData } from "@/constants";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

const Discover = ({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) => {
  const podcastsData = useQuery(api.podcasts.getPodcastBySearch, {
    search: search || "",
  });

  return (
    <div className="flex flex-col gap-9">
      <SearchBar />
      <div className="flex flex-col gap-9">
        <h1 className="text-20 font-bold text-white-1">
          {!search ? "Discover Trending Podcasts" : "Search results for "}
          {search && <span className="text-white-2">{search}</span>}
        </h1>

        {podcastData ? (
          <>
            {/* {podcastsData.length > 0 ? (
              <div className="podcast_grid">
                {podcastsData?.map(
                  ({ _id, podcastTitle, podcastDescription, imgUrl }) => (
                    <PodcastCard
                      key={_id}
                      imgURL={imgUrl!}
                      title={podcastTitle}
                      description={podcastDescription}
                      podcastId={_id}
                      imgUrl={""}
                    />
                  )
                )}
              </div>
            ) : (
              <EmptyState title="No results found" />
            )} */}

            <>
              {podcastData.length > 0 ? (
                <div className="podcast_grid">
                  {podcastData?.map(({ id, title, description, imgURL }) => (
                    <PodcastCard
                      key={id}
                      imgURL={imgURL!}
                      title={title}
                      description={description}
                      imgUrl={""}
                      podcastId={id}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState title="No results found" />
              )}
            </>
          </>
        ) : (
          <LoaderSpinner />
        )}
      </div>
    </div>
  );
};

export default Discover;

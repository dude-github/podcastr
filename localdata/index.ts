const { v4: uuidv4 } = require("uuid");

// Generate a valid podcast ID
const validPodcastId = `podcast-${uuidv4()}`;

// Example function to get a podcast by ID from the local dataset
const getPodcastByIdLocal = (podcastId: string) => {
  const localDataset = [
    {
      podcastId: "podcast-1",
      id: 1,
      views: 2,
      title: "The Joe Rogan Experience",
      description: "A long form, in-depth conversation",
      imgURL:
        "https://lovely-flamingo-139.convex.cloud/api/storage/3106b884-548d-4ba0-a179-785901f69806",
    },
    {
      podcastId: "podcast-2",
      id: 2,
      views: 2,
      title: "The Futur",
      description: "This is how the news should sound",
      imgURL:
        "https://lovely-flamingo-139.convex.cloud/api/storage/16fbf9bd-d800-42bc-ac95-d5a586447bf6",
    },
    {
      podcastId: "podcast-3",
      id: 3,
      views: 2,
      title: "Waveform",
      description: "Join Michelle Obama in conversation",
      imgURL:
        "https://lovely-flamingo-139.convex.cloud/api/storage/60f0c1d9-f2ac-4a96-9178-f01d78fa3733",
    },
    {
      podcastId: "podcast-4",
      id: 4,
      views: 2,
      title: "The Tech Talks Daily Podcast",
      description: "This is how the news should sound",
      imgURL:
        "https://lovely-flamingo-139.convex.cloud/api/storage/5ba7ed1b-88b4-4c32-8d71-270f1c502445",
    },
    {
      podcastId: "podcast-5",
      id: 5,
      views: 2,
      title: "GaryVee Audio Experience",
      description: "A long form, in-depth conversation",
      imgURL:
        "https://lovely-flamingo-139.convex.cloud/api/storage/ca7cb1a6-4919-4b2c-a73e-279a79ac6d23",
    },
    {
      podcastId: "podcast-6",
      id: 6,
      views: 2,
      title: "Syntax ",
      description: "Join Michelle Obama in conversation",
      imgURL:
        "https://lovely-flamingo-139.convex.cloud/api/storage/b8ea40c7-aafb-401a-9129-73c515a73ab5",
    },
    {
      podcastId: "podcast-7",
      id: 7,
      views: 2,
      title: "IMPAULSIVE",
      description: "A long form, in-depth conversation",
      imgURL:
        "https://lovely-flamingo-139.convex.cloud/api/storage/8a55d662-fe3f-4bcf-b78b-3b2f3d3def5c",
    },
    {
      podcastId: "podcast-8",
      id: 8,
      views: 2,
      title: "Ted Tech",
      description: "This is how the news should sound",
      imgURL:
        "https://lovely-flamingo-139.convex.cloud/api/storage/221ee4bd-435f-42c3-8e98-4a001e0d806e",
    },
    // Add more podcast objects as needed
  ];

  const podcast = localDataset.find((p) => p.podcastId === podcastId);
  if (podcast) {
    return podcast;
  } else {
    throw new Error(`Podcast with ID ${podcastId} not found.`);
  }
};

// Example usage
try {
  const podcastId = validPodcastId; // Replace with a valid podcast ID
  const podcast = getPodcastByIdLocal(podcastId);
  console.log("Podcast found:", podcast);
} catch (error) {
  console.error(error);
}

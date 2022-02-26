import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "9zrn54i9", // find this at manage.sanity.io or in your sanity.json
  dataset: "events", // this is from those question during 'sanity init'
  useCdn: true,
});

// server https://pecacm.sanity.studio/
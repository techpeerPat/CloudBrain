import { sanityClient } from "sanity:client";
import groq from "groq";

export async function getFeaturedWork() {
  return await sanityClient.fetch(
    groq`*[_type == "caseStudy" && featured == true && defined(slug.current)] | order(_createdAt desc) [0...4]`
  );
}

export async function getCaseStudies() {
  return await sanityClient.fetch(
    groq`*[_type == "caseStudy" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getCaseStudy(slug) {
  return await sanityClient.fetch(
    groq`*[_type == "caseStudy" && slug.current == $slug ][0]`,
    {
      slug,
    }
  );
}

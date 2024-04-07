import { sanityClient } from "sanity:client";
import groq from "groq";

export async function getHome() {
  return await sanityClient.fetch(groq`*[_type == "home" ][0]`);
}

export async function getContact() {
  return await sanityClient.fetch(groq`*[_type == "contact" ][0]`);
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

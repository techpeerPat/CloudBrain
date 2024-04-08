import { sanityClient } from "sanity:client";
import groq from "groq";

export async function getHome() {
  return await sanityClient.fetch(groq`*[_type == "home" ][0]`);
}

export async function getContact() {
  return await sanityClient.fetch(groq`*[_type == "contact" ][0]`);
}

export async function getBecomeTrainer() {
  return await sanityClient.fetch(groq`*[_type == "becomeTrainer" ][0]`);
}

export async function getGoogleTrainings() {
  return await sanityClient.fetch(
    groq`*[_type == "googleCloudTraining" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getGoogleTraining(slug) {
  return await sanityClient.fetch(
    groq`*[_type == "googleCloudTraining" && slug.current == $slug ][0]`,
    {
      slug,
    }
  );
}

export async function getAwsTrainings() {
  return await sanityClient.fetch(
    groq`*[_type == "awsTraining" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getAwsTraining(slug) {
  return await sanityClient.fetch(
    groq`*[_type == "awsTraining" && slug.current == $slug ][0]`,
    {
      slug,
    }
  );
}

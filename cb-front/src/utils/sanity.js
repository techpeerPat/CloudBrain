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

export async function getGoogleCategories() {
  return await sanityClient.fetch(
    groq`*[_type == "googleCategory" ] | order(_createdAt asc)`
  );
}

export async function getAwsCategories() {
  return await sanityClient.fetch(
    groq`*[_type == "awsCategory" ] | order(_createdAt asc)`
  );
}

export async function getGoogleTrainings() {
  return await sanityClient.fetch(
    groq`*[_type == "googleCloudTraining" && defined(slug.current)] | order(_createdAt asc){
      ...,
      category[]-> { // Follow the reference to each referenced document in the array
        title // Fetch the title field of each referenced document
      }}`
  );
}

export async function getGoogleTraining(slug) {
  return await sanityClient.fetch(
    groq`*[_type == "googleCloudTraining" && slug.current == $slug ][0]{
      ...,
      category[]-> { // Follow the reference to each referenced document in the array
        title // Fetch the title field of each referenced document
      }
    }`,
    {
      slug,
    }
  );
}

export async function getAwsTrainings() {
  return await sanityClient.fetch(
    groq`*[_type == "awsTraining" && defined(slug.current)] | order(_createdAt desc){
      ...,
      category[]-> { // Follow the reference to each referenced document in the array
        title // Fetch the title field of each referenced document
      }}`
  );
}

export async function getAwsTraining(slug) {
  return await sanityClient.fetch(
    groq`*[_type == "awsTraining" && slug.current == $slug ][0]{
      ...,
      category[]-> { // Follow the reference to each referenced document in the array
        title // Fetch the title field of each referenced document
      }}`,
    {
      slug,
    }
  );
}

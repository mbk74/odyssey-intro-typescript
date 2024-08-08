import { RESTDataSource } from "@apollo/datasource-rest";
import { Listing } from "../types";

export class ListingAPI extends RESTDataSource {
  
  baseURL = "https://rt-airlock-services-listing.herokuapp.com/";
  
  async getFeaturedListings(): Promise<Listing[]> {
    const listings =  await this.get<Listing[]>("featured-listings");
    // for each listing ID, request this.get<Amenity[]>(`listings/{id}/amenities`)
    // Then map each set of amenities back to its listing
    return listings;
  }

  getListing(listingId: string): Promise<Listing> {
    return this.get<Listing>(`listings/${listingId}`);
  }
}
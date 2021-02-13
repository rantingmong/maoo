import type {
  GetPostsQuery
} from "../../generated/graphql"
import {
  sdk
} from "./graphql"

export type Posts = GetPostsQuery["posts"]

export interface PostRemote {
  get_posts(): Promise<Posts>
}

const remote: PostRemote = {
  get_posts: async function() {
    return (await sdk.GetPosts({},{})).data.posts
  }
}

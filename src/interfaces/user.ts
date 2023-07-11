export interface DBUser {
  id: string
  username: string
  name: string
  email: string
  statusMessage: string
  profileImageUrl: string
  coverImageUrl: string
  followerCount?: number
  followingCount?: number
}

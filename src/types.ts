export type UserData = {
  _id?: string,
  name: string,
  email: string
}

export type NewsData = {
  _id?: string,
  title: string,
  content: string,
  authorID: string,
  image: string,
  slug?: string,
  createdAt?: string
}

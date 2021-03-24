import { gql, useQuery } from '@apollo/client'

const GET_POSTS = gql`
  query GetAllUsers {
    getAllUsers {
      firstName
      lastName
    }
  }
`

export const useGetPosts = () => {
  const { data } = useQuery(GET_POSTS)

  return data
}

import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '@constants'
import { userService } from '@services'

/**
 * [useUser]
 * @param boolean => weather to disable the query
 * @returns => user details
 */

const useUser = ({ enabled }: { enabled: boolean }) => {
  return useQuery([QUERY_KEYS.FETCH_USER], userService.fetchUser, {
    enabled,
    select: data => {
      return data
    },
  })
}

export { useUser }

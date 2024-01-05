import { useQuery } from '@tanstack/react-query'
import { userService } from '@services'
import { QUERY_KEYS } from '@constants'

/**
 * [useUser]
 * @param boolean => weather to disable the query
 * @returns => user details
 */

const useUser = ({ enabled }: { enabled: boolean }) => {
  return useQuery({
    enabled: enabled,
    queryKey: [QUERY_KEYS.FETCH_USER],
    queryFn: userService.fetchUser,
  })
}

export { useUser }

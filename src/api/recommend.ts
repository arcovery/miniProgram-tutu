import { hotPreferenceParams, hotPreferenceResult } from '@/@types/recommend'
import { http } from '@/utils/http'

/**
 * 特惠推荐
 *
 * @export
 * @param {hotPreferenceParams} data
 * @return {*}  {Promise<hotPreferenceResult>}
 */
export function hotPreferenceAPI(
  url: string,
  data: hotPreferenceParams,
): Promise<hotPreferenceResult> {
  return http({
    method: 'GET',
    url,
    data,
  })
}

/**
 * 爆款推荐
 *
 * @export
 * @param {hotPreferenceParams} data
 * @return {*}  {Promise<hotPreferenceResult>}
 */
export function hotInVogueAPI(
  url: string,
  data: hotPreferenceParams,
): Promise<hotPreferenceResult> {
  return http({
    method: 'GET',
    url,
    data,
  })
}

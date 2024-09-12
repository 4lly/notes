/*
 * @Author: cirs
 * @Date: 2024-09-11 15:06:53
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-11 17:15:40
 * @FilePath: /vue3-auth/src/hooks/useRouteQuery.ts
 * @Description:
 *
 */
import { computed, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const useRouteQuery = () => {
  const route = useRoute();
  const redirect = ref(''); //重定向路径
  const otherQuery = ref({}); //其他参数
  const getOtherQuery = (query) => {
    const { redirect, ...other } = query;
    return other;
  };
  const redirectComputed = computed(() => route?.query?.redirect || '');
  const otherQueryComputed = computed(() => getOtherQuery(route?.query || {}));

  watchEffect(() => {
    otherQuery.value = otherQueryComputed.value;
    redirect.value = redirectComputed.value as string;
  });
  return {
    redirect,
    otherQuery,
  };
};
export default useRouteQuery;

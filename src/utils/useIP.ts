import { queryIP, queryAmount } from '@/api';
import Cookies from 'js-cookie';
import useLanguage from '@/store/index';
const mainStore = useLanguage();

export default function () {
  const CheckId = Cookies.get("name")
  if (CheckId == undefined) {
    queryAmount().then((res) => {
      mainStore.setTotalAmount(res.data.data[0].total_amount)
    })
  }
  let totalAmount = ref<number>()
  let cityname = ref<string>()
  queryIP(localStorage.getItem('Ip')).then((res: any) => {
    cityname.value = res.data.data[0].location
  });
  return {
    cityname,
    totalAmount
  }
}

import { queryIP, queryAmount } from '@/api';
import Cookies from 'js-cookie';
import useLanguage from '@/store/index';
const mainStore = useLanguage();

export default function () {
  const CheckId = Cookies.get("name")
  console.log(CheckId);
  if (CheckId == undefined) {
    console.log('过期了');
    queryAmount().then((res) => {
      mainStore.setTotalAmount(res.data.data[0].total_amount)
    })
  } else {
    console.log('还没过7期');
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

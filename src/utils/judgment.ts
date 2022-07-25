
export function judgment() {
  const userAgent = window.navigator.userAgent;
  let isMobile = false;
  if (userAgent.indexOf('iPhone') >= 0) isMobile = true;
  if (userAgent.indexOf('Android') >= 0) isMobile = true;
  if (userAgent.indexOf('iPad') >= 0) isMobile = true;
  return  isMobile ? 'mobile' : 'pc'
}

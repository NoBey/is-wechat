function isWechat(){
  if(navigator){
    return navigator.userAgent.toLowerCase().match(/MicroMessenger/i)=="micromessenger"
  }
  return false
}
module.exports = isWechat

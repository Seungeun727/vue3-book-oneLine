export default function makeUserInfo(name, email) {
  if(name === '' || email === '') return;
  let total_length = email.split('@')[0].length - 3;
  const maskName = name.replace(/(?<=.{1})./gi, "*");
  const maskEmail = email.replace(new RegExp('.(?=.{0,' + total_length + '}@)', 'gi'), "*"); 
  return { maskName, maskEmail };
}
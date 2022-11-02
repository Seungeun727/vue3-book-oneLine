function checkTitle(title, message) {
  if(!title && title == "") {
    message = "제목 입력은 필수 항목 입니다.";
  } else {
    if(title.length > 40 || title.length <= 1) {
      message = "제목은 40자이내로 작성하세요.";
    } else {
      message = "";
    }
  }
  return message;
}

Date.prototype.customDate = function() {
  let year = this.getFullYear()
  let month = (this.getMonth() + 1);
  let day = this.getDate();

  const date = [month, day]
   .map(item => item >= 10 ? item : '0' + item);

  const [fmonth, fday] = date;
  return `${year}-${fmonth}-${fday}`;
}

const checkDate = function(inputDate) {
  const date = new Date(inputDate);
  let result = date.customDate();
  return result;
};

export { checkTitle, checkDate };
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

const checkDate = function(date, message ) {
  if(date != 10 && date == "") {
    message = "날짜 입력은 8자로 필수 항목입니다.";
  } else {
    let dateNum = date.replace(/[^0-9]/g, "");
    const year = dateNum.substring(0, 4)
    const month = dateNum.substring(4, 6);
    const day = dateNum.substring(6, 8);
    if(year.length != 4 && year.length > 4) {
      return message = "날짜 형식이 맞지 않습니다.";
    } else {
      if(month.length != 2 && day.length != 2) {
        return message = "날짜 형식이 맞지않습니다.";
      } else {
        message = "날짜 형식이 맞습니다.";
        return message;
      }
    }
  }
};

export { checkTitle, checkDate };
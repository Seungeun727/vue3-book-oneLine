function checkDate(date) {
  if(!date && date == "") {
    return '날짜 입력란은 필수입니다.';
  } else {
    const regex = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;
    if(regex.test(date) && date.length !== 10) {
      return '날짜 형식은 10자입니다.';
    } else {
      const year = date.substring(0, 4);
      const month = date.substring(5, 7);
      const day = date.substring(8, 10);
      if(year <= 1900) {
        return '년도는 2000년부터 입니다.';
      } else if(month < 1 || month > 12) {
        return `달을 다시 입력해주세요.`;
      } else if(day < 1 || day > 31) {
        return `날짜를 다시 입력해주세요.`;
      } else if (month == 2) {
        if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
          if(day > 29 || day > 1) return `${year}년은 29일까지 입니다.`;
        } else {
          if(day >= 29) return `${year}년은 28일까지 입니다.`;
        }
      }
      return true;
    }
  }
}

export { checkDate };
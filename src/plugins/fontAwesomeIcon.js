import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons/faCircleExclamation";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons/faTriangleExclamation";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons/faBookOpen";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

library.add(
  faCircleExclamation, 
  faCircleCheck, 
  faTriangleExclamation, 
  faXmark,
  faArrowRight, 
  faUser,
  faBookOpen,
  faAngleRight,
  faBook,
  faChevronLeft,
  faChevronRight);
export default FontAwesomeIcon;
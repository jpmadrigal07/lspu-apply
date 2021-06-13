import Cookies from "js-cookie";

export const checkIfTokenExpired = () => {
  const sessionTokenExpiry = Cookies.get("sessionTokenExpiry");
  const isTokenExpired = sessionTokenExpiry
    ? Math.round(Date.now() / 1000) > parseInt(sessionTokenExpiry)
    : true;
  return isTokenExpired;
};

export const getToken = () => {
  const sessionToken = Cookies.get("sessionToken");
  return sessionToken;
};

export const removeAuthCookie = () => {
  const sessionToken = Cookies.get("sessionToken");
  const sessionTokenExpiry = Cookies.get("sessionTokenExpiry");
  if (sessionToken) {
    Cookies.remove("sessionToken");
  }
  if (sessionTokenExpiry) {
    Cookies.remove("sessionTokenExpiry");
  }
};

export const checkAuth = (
  historyPush: Function,
  topAlert: Function,
  emptyAuth: Function,
  isCurrentPageAuthRestricted: boolean
) => {
  const isTokenExpired = checkIfTokenExpired();
  if (!isTokenExpired) {
    if (!isCurrentPageAuthRestricted) {
      historyPush("/dashboard");
    }
  } else {
    if (isCurrentPageAuthRestricted) {
      // if token exist, show message that the user token expired and need to login again
      if (getToken()) {
        topAlert({
          showAlert: true,
          message:
            "Authentication is already expired. Please login to continue",
          type: "warning",
        });
        emptyAuth();
        removeAuthCookie();
      } else {
        topAlert({
          showAlert: true,
          message: "Please login to access that page",
          type: "warning",
        });
      }
      historyPush("/login");
    }
  }
};

export const logOut = () => {
  removeAuthCookie();
  window.location.href = "/";
};

export const inputNameMapper = (name: string) => {
  let result;
  switch (name) {
    case "firstName":
      result = "First name";
      break;
    case "lastName":
      result = "Last name";
      break;
    case "mobileNumber":
      result = "Mobile number";
      break;
    case "dateOfBirth":
      result = "Date of birth";
      break;
    case "placeOfBirth":
      result = "Place of birth";
      break;
    case "gender":
      result = "Gender";
      break;
    case "citizenship":
      result = "Citizenship";
      break;
    case "barangay":
      result = "Barangay";
      break;
    case "municipality":
      result = "Municipality";
      break;
    case "province":
      result = "Province";
      break;
    case "zipCode":
      result = "Zip code";
      break;
    case "civilStatus":
      result = "Civil status";
      break;
    case "guardianName":
      result = "Guardian name";
      break;
    case "guardianAddress":
      result = "Guardian's Address";
      break;
    case "guardianMobileNumber":
      result = "Guardian's mobile number";
      break;
    case "relationWithGuardian":
      result = "Relation with guardian";
      break;
    case "fathersName":
      result = "Father's name";
      break;
    case "mothersName":
      result = "Mother's name";
      break;
    case "disability":
      result = "Disability";
      break;
    case "isIndigenousPerson":
      result = "Indigeneous person";
      break;
    case "educationalAttainment":
      result = "Educational Attainment";
      break;
    case "elementary":
      result = "Elementary in Educational Attainment";
      break;
    case "highSchool":
      result = "Highschool in Educational Attainment";
      break;
    case "seniorHighSchool":
      result = "Senior Highschool in Educational Attainment";
      break;
    case "schoolNameElementary":
      result = "Elementary School Name";
      break;
    case "schoolAddressElementary":
      result = "Elementary School Address";
      break;
    case "typeOfSchoolElementary":
      result = "Elementary Type of School";
      break;
    case "yearGraduatedElementary":
      result = "Elementary Year Graduated";
      break;
    case "schoolNameHighSchool":
      result = "Highschool School Name";
      break;
    case "schoolAddressHighSchool":
      result = "Highschool School Address";
      break;
    case "typeOfSchoolHighSchool":
      result = "Highschool Type of School";
      break;
    case "yearGraduatedHighSchool":
      result = "Highschool Year Graduated";
      break;
    case "schoolNameSeniorHighSchool":
      result = "Senior Highschool School Name";
      break;
    case "schoolAddressSeniorHighSchool":
      result = "Senior Highschool School Address";
      break;
    case "typeOfSchoolSeniorHighSchool":
      result = "Senior Highschool Type of School";
      break;
    case "yearGraduatedSeniorHighSchool":
      result = "Senior Highschool Year Graduated";
      break;
    case "intendedCourse":
      result = "Intended Course";
      break;
    case "firstChoice":
      result = "Intended Course First Choice";
      break;
    case "secondChoice":
      result = "Intended Course Second Choice";
      break;
    default:
      result = "Unknown";
  }
  return result;
};

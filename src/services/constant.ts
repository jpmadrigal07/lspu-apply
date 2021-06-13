import keys from "../config/keys";

export const DASHBOARD_PAGE = "Dashboard"
export const COURSES_PAGE = "Courses"
export const NOTIFICATION_PAGE = "Notification"

export const CAMPUS = [
    {
      "label": "Sta. Cruz",
      "value": "Sta. Cruz",
      "type": "Main"
    },
    {
      "label": "San Pablo",
      "value": "San Pablo",
      "type": "Main"
    },
    {
      "label": "Los Banos",
      "value": "Los Banos",
      "type": "Main"
    },
    {
      "label": "Siniloan",
      "value": "Siniloan",
      "type": "Main"
    },
    {
      "label": "Sariaya",
      "value": "Sariaya",
      "type": "Sattelite"
    }
  ];

export const ADMIT_TYPE_CONTENT = [
    {
      label: "New student",
      value: "New student",
    },
    {
      label: "Transferee",
      value: "Transferee",
    },
    {
      label: "Returnee",
      value: "Returnee",
    },
    {
      label: "Continuer",
      value: "Continuer",
    },
    {
      label: "Shifter",
      value: "Shifter",
    },
  ];

export const TYPE_OF_STUDENT_CONTENT = [
    {
      label: "College",
      value: "College",
    },
    {
      label: "Senior High",
      value: "Senior High",
    },
    {
      label: "GSaR",
      value: "GSaR",
    },
    {
      label: "Post-graduate",
      value: "Post-graduate",
    },
  ];

export const TYPE_OF_SCHOOL_CONTENT = [
    {
      "label": "Public",
      "value": "Public",
    },
    {
      "label": "Private",
      "value": "Private",
    }
  ];

export const ADMIT_TYPE_DATA = [
    {
        "label": "New student",
        "value": "New student",
    },
    {
        "label": "Transferee",
        "value": "Transferee",
    },
    {
        "label": "Returnee",
        "value": "Returnee"
    },
    {
        "label": "Continuer",
        "value": "Continuer"
    },
    {
        "label": "Shifter",
        "value": "Shifter"
    }
];

export const STUDENT_TYPE_DATA = [
    {
        "label": "Senior High",
        "value": "Senior High",
    },
    {
        "label": "College",
        "value": "College",
    },
    {
        "label": "Graduate Student",
        "value": "Graduate Student",
    },
    {
        "label": "Post Graduate",
        "value": "Post Graduate",
    },
];

export const GENDER_DATA = [
    {
        "label": "Male",
        "value": "Male",
    },
    {
        "label": "Female",
        "value": "Female",
    }
];

export const CIVIL_STATUS_DATA = [
    {
        "label": "Single",
        "value": "Single",
    },
    {
        "label": "Married",
        "value": "Married",
    },
    {
        "label": "Widowed",
        "value": "Widowed",
    }
];

export const DISABILITY_DATA = [
    {
        "label": "None",
        "value": "None",
    },
    {
        "label": "Communication Disability",
        "value": "Communication Disability",
    },
    {
        "label": "Disability Due to Cronic Illness",
        "value": "Disability Due to Cronic Illness",
    },
    {
        "label": "Learning Disability",
        "value": "Learning Disability",
    },
    {
        "label": "Neurological Disability",
        "value": "Neurological Disability",
    },
    {
        "label": "Orthopedic Disability",
        "value": "Orthopedic Disability",
    },
    {
        "label": "Psycho Social Disability",
        "value": "Psycho Social Disability",
    },
    {
        "label": "Visual Disability",
        "value": "Visual Disability",
    }
];

export const IS_INDIGENOUS_PERSON_DATA = [
    {
        "label": "Yes",
        "value": true,
    },
    {
        "label": "No",
        "value": false,
    }
]

export const restApiUrl = keys.restApiUrl;
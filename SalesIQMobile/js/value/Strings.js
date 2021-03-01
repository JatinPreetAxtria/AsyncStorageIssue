import { Platform } from 'react-native';


export const default_font_family = Platform.OS == 'android' ? 'Roboto' : 'system font';

export const ERROR_NO_DATA_FOUND = 'No Data Found. Please try again later.'
export const hint_search_by_reg = "Enter Registration number to search";
export const no_internet = "No Internet Available";
export const unhandled = "CB not handled !";
export const ADD = "Add";
export const NAME = "Name";
export const EMAIL = "Email";
export const PHONE = "Phone";
export const SEND = "Send";
export const SUBMIT = "Submit";

export const SUCCESS_MESSAGE = "Please ask cutomer to check mail or phone inbox";
export const PLEASE_ENTER_NAME = 'Please Enter Name!';
export const PLEASE_ENTER_EMAILID = 'Please Enter EmailID';
export const PLEASE_ENTER_PHONE = 'Please Enter Phone';
export const DOCUMENT_UPLOADED = 'Documnet Uploaded!';
export const WAIT_FOR_DOCUMENT_REVIEWED = 'Please wait for document to be reviewed';
export const VIEW = 'View';
export const UPLOAD_DOCUMENT = 'Upload Document';
export const UPLOAD_DOC = 'Upload Doc';
export const PROCESSING_DOC = 'Processing....';
export const REUPLOAD_DOC = 'ReUpload';

export const SAVE = 'Save';
export const LOGOUT = 'Logout';
export const SHARE = "Share";


// DB Save Response
export const IMAGE_SAVE_SUCCESS = "success";
export const IMAGE_SAVE_FAILURE = "failure";
export const IMAGE_SAVE_COMPLETED = "completed";

// DB Save Processing Response
export const IMAGE_PROCESSING_SAVE_SUCCESS = "success";
export const IMAGE_PROCESSING_SAVE_FAILURE = "failure";
export const IMAGE_PROCESSING_SAVE_COMPLETED = "completed";

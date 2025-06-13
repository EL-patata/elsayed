/**
 * table
 * كود الطلب | البند | الحالة <مقبول, مرفوض, قيد المراجعة | الطالب |الاجراءات <قبول,رفض | ص>>
 *
 *
 *
 *
 */

//POST register: [first name, last name, password, email, student code] returns message
//

//POST verify_email(OTP): [email, OTP] returns message
//

//POST login : [email, password] returns token
//

//GET get_user_info: [token] returns user
//

//POST addsustinablerequest: [request_number, student_name, sex, student_code, text, request_type] <STUDENT, STUDENT_CODE, DROPDOWN_MENU,TEXTAREA> return message
//                            [form_id,std_name,std_code,string_dropdown_list,details_text] retruns response

//GET getownrequests: [token] returns all_requests
//

//GET getstudentsrequests [token]
//

//POST review[token,request_id,(1 accept,2 reject)] return response

/*

{
  "password": "Test@1234",
  "firstName": "tester",
  "lastName": "one",
  "email": "youssifjoe200@gmail.com",
  "id": 99999999
}

*/

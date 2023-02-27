# Send-Online-Forms-through-AWS-SES
## This is an instruction to send website's Form data to AWS SES through API &amp; Lambda

### Requirements:
1. HTML page with a form.
2. Script to collect the form data to the API.
3. Lambda Script to send the data to email using AWS SES.
4. API Gateway with POST method.
5. Lambda function with NodeJS.

### Instructions:
1. Set your SES service and validate your email.
2. Give ID attribute to your form tables so the data can be refered.
3. The submit button has onClick event which is associated with the function's name as `onClick="submitToAPI(event)"`.
4. Make sure your HTML page called the API script using the `<script/>` attribute.
5. The API script will assign variables with your data using `getElementById(ATTRIBUTE_ID)`.
6. In the API script, assign your API gatway URL in the `API_URL`.
7. The data will be sent to the lambda script with POST method.
8. The Lambda script will send the requested data to the email through SES.
9. You need to assign the email in the Lambda script or through environmnet variables.

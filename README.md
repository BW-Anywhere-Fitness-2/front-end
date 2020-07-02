# front-end

## **Web Application Development Role Description**

As a Front End Developer, you are tasked to work in conjunction with the Web UI Developer/s on your team as well as the Front End Framework Developer on the product to deliver a fully functioning web app.

### Your role as a Front End Developer is work on the features of the product that allow you to demonstrate mastery over the concepts such as:

- Network request for reading data
- Displaying and laying out the information received from a 3rd API
- Implementing industry standards in regards to the way that your React Components are
- architected and developed, i.e. hooks are used and implemented correctly
- Proper usage of React Router
- Forms in the app are managed well, including the use of form validation
- Your application should be built to demonstrate that your app solves the problem your team set out to solve.
    - Focus the displaying of information and working with other members of your team to ensure that users can seamlessly navigate through the tools that you’re building.

### rubric Score of 3

Student incorperated a third party event/animation library like unto Greensock, Anime, React-motion etc.

Student was able to architect components to be easily reused. Student used advanced React techniques like the composition pattern, custom hooks, render props, HOCs, etc.

Not only are standard network request techniques employed, the code is organized in such a fashion that the student demonstrated proper use of container vs presentational components or other industry standards, conventions or patterns.

Student showed great insight in setting up the state management for the app's forms. Form validation is in place for all fields, and covers all use cases. Loading states and success/error notifications are in place and add to the overall UX of the app.

### rubric Score of 2

Student created functional components and used events in application to add dynamic functionality to app.

Student's code was organized at the component level, proper usage of state and props are demonstrated throughout the project, the UI is composed of small reusable components, proper usage of useState and useEffect hooks are clearly incorporated and correctly implemented.  Student used Array methods to dynamically render HTML elements.

Student implemented GET requests using either Axios or Fetch to display 3rd party data on a deployed page. Route management properly installed and used to show top level pages as well as nested views where necessary.

Student has set up component management for the forms in the app that makes sense for each form. Student made the decision to use a third-party library, like Formik, or not, and can defend their decision. Some form validation is in place.


## ✅ **MVP**

1. User can create/register as a `client` and login with the registered credentials.

2. User can create/register as an `instructor` by entering an additional Auth Code during signup, and can login with the registered credentials.

3. Authenticated `Instructor` can create update and delete a `class`. At a minimum, each `class` must have the following properties:

- `Name`
- `Type`
- `Start time`
- `Duration`
- `Intensity level`
- `Location`
- `Current number of registered attendees`
- `Max class size`

5. Authenticated `client` can search for available classes. At a minimum, they must be able to search by the following criteria:

- `class time`
- `class date`
- `class duration`
- `class type`
- `intensity level`
- `class location`
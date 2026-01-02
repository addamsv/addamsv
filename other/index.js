/**
*
* @copyright (c) 2025 S.Adamovich
* @license GPL 3.0 http://www.gnu.org/licenses/gpl.html
* @version: 1.0.0 
*
* Examples and documentation at: https://addamsv.github.io/addamsv
*
* @author S.Adamovich
*/

/** 
* @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
*/

/** 
* @link https://developers.google.com/speed/pagespeed/insights/ 
* @link https://jigsaw.w3.org/css-validator/
* @link https://validator.w3.org
*/

window.addEventListener("load", () => {
  // tryToLogin();
})

const tryToLogin = () => {
  fetch(
  'http://localhost:8080/api/v1/users/login',
  {
      method: 'POST',
      headers: {
          Authorization: "Basic " + btoa('admin:123')
      }
  })
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
};

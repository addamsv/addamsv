fetch(
  'http://localhost:8080/api/v1/users/login',
  {
      method: 'POST',
      headers: {
          Authorization: "Basic " + btoa('admin:123')
      }
  }
)
.then((resp) => resp.json())
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.log(error);
});
$('.btn-google').click(function(){
  window.location=('https://accounts.google.com/o/oauth2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080&scope=profile&client_id=856670607753-2jriljkug9mihnqkhnmbkhpom3dn3r9b.apps.googleusercontent.com')
})

var qs = querystring.parse();
if(qs.code ){
  // TODO: remember to change once deployed
    $.ajax('http://localhost:3000/auth/google?' + querystring.stringify(qs), {xhrFields: {withCredentials: true}, crossDomain: true})
  .done(function(data){
    console.log(data)
  }).fail(function(error){
    console.error(error)
  })
}

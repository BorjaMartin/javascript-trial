function literal() {
 var m = document.getElementById("matricula").value;
  var expreg = /^[A-Z]{1,2}\s\d{4}\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/;

 if(expreg.test(m))
alert("La matr�cula es correcta");
 else
   alert("La matr�cula NO es correcta");
}

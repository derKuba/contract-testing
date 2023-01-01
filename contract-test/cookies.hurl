
GET {{base_url}}/random
HTTP/1.1 200

[Asserts]
cookie "foo" exists
cookie "foo[HttpOnly]" exists
cookie "foo[Secure]" exists
cookie "foo[SameSite]" equals "Lax"
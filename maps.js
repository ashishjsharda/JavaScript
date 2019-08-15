<!DOCTYPE html>
<script>
'use strict';
let user = {
  name: "John",
  age: 30
};
//Print all Keys
alert(Object.keys(user))
//Print all values
alert(Object.values(user))
//Print all values 
for (let val of Object.values(user))
{
  alert(val)
}
</script>

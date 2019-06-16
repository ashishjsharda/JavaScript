<!DOCTYPE html><script>
  function compareNumeric(a,b){
          if(a>b) return 1;
          if(a==b) return 0;
          if(a<b) return -1;
        }
        let arr=[1,2,15,20];
        arr.sort(compareNumeric);
        document.writeln(arr)
//alert( arr );  // 1, 15, 2
</script>

let arr = prompt("enter value");
            let ans = arr.split(" ").map(Number); 
            let max=0;
    ----reduce-----
            max = ans.reduce(myFunc,max);
            //reduce(fn,value) fn(acc,currValue)
            function myFunc(a,b){
                return Math.max(a,b);
            }
            let count = 0;
            ans.map((x)=>{
                if(x==max){
                    count+=1;
                }
            });
            alert(count);
    ----filter-----
            a=[1,2,3]
            a.filter(myFunc);
            function myFunc(value){
                if(value>10){
                    return value;
                }
            }
    

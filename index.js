var findAnagrams = function(s, p) {
    let res=[];
    if(s.length<p.length) return res;
    const map=new Map();
    for(const c of p){
        map.set(c,(map.get(c)||0)+1);
    }
    let left=0,count=p.length;
    for(let right=0; right<s.length; right++){
        let ch=s.charAt(right);
        let val=map.get(ch)||0;
        if(val>0) count--;
        map.set(ch,val-1);
        if(right-left+1>p.length){
            let leftchar=s.charAt(left);
            let leftval=map.get(leftchar)||0;
            if(leftval>=0) count++;
            map.set(leftchar,leftval+1);
            left++;
        }
        if(count===0){
            res.push(left);
        }
    }
    return res;
};
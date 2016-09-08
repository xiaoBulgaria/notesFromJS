var  sum  = function(){
	var i ,sum = 0; 
	for(i=0;i<arguments.length;i++){
		sum += arguments[i]
	}
	return sum
};
   document.writeln(sum(4,15,15,88,33,1,65));
   
   
   //length只是argument的一个属性
   //argument并不是一个真正的数组，而是一个对象 ，他没有数组所有的方法
var  sum  = function(){
	var i ,sum = 0; 
	for(i=0;i<arguments.length;i++){
		sum += arguments[i]
	}
	return sum
};
   document.writeln(sum(4,15,15,88,33,1,65));
   
   
   //lengthֻ��argument��һ������
   //argument������һ�����������飬����һ������ ����û���������еķ���
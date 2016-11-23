var hanoi = function (disc,src,aux,dst) {
	if(disc > 0){
		hanoi(disc - 1,src,dst,aux);
		document.writeln('move disc'+disc+'from'
			+src+'to'+dst);
		hanoi(disc - 1,aux,src,dst);
	}
}

hanoi(3,'Src','Aux','Dst')

var names=new Array();
names[0]="Raja";
names[1]="jeeva";
names[2]="John";
names[3]="jason";
names[4]="Hari";
names[5]="naveen";
names[6]="ajay";
names[7]="siva";
names[8]="dinesh";
names[9]="arun";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
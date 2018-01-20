/*class Mainpage{
	constructor(Name,Lastname,From,Live,Age,imageUrl){
		this.Name = Name;
		this.Lastname = Lastname;
		this.From = From;
		this.Live = Live;
		this.Age = Age;
		this.imageUrl = imageUrl;
	}
}
// Function to create an item
	createCard(){
		var collectionCard = $('<div></div>')
				.addClass("col-8 col-md-3 col-lg-2 col-sm-5 mx-auto py-3")
				.html(`
					<div class="card">
						<div class="card-title px-2">
							<span class="text-muted">Type:</span><strong>${this.Name}</strong>
						</div>
			        	<img src=${this.imageUrl} alt="Image" style="object-fit:contain">
			    		<h5 class="px-2"><strong>${this.Lastname}</strong></h5>
			        	<p class="px-2"><span class="text-muted ">From:</span> <strong>${this.From}</strong></p>
			            <p class="px-2"><span class="text-muted">Live:</span> <strong>${this.Live}</strong></p>
			            <p class="px-2"><span class="text-muted">Age:</span> <strong>${this.Age}</strong></p>
			        </div> 
			        `);

    	$('#mainContent').append(Mainpage);
    }
}
var allpages=[
		new Female("Ema","Smith","Austria","Wien","Girl-imd/girl1.jpg",25),
		new Female("Sophia","Brown","Austria","Lins","Girl-imd/girl2.jpg",21),
		new Female("Maryam","Hall","Iran","Salzburg","Girl-imd/girl3.jpg",24),
		new Female("Isabella","cooper","Austria","Grazt","Girl-imd/girl4.jpg",23),
		new Female("Mia","Murphy","Austria","Boden","Girl-imd/girl5.jpg",20),
		new Female("Amelia","Hamilton","Austria","Hollabrunn","Girl-imd/girl6.jpg",19),
		new Female("Charlette","Conner","Austria","Vösendorf","Girl-imd/girl7.jpg",27),
		new Female("Aria","Jones","Austria","Kerms","Girl-imd/girl8.jpg",29),
		new Female("Abigail","Quinn","Austria","Wien","Girl-imd/girl9.jpg",22),
		new Female("Emily","Winston","Austria","Wien","Girl-imd/girl10.jpg",25),
		new Female("Madison","Tayler","Austria","Wien","Girl-imd/girl11.jpg",31),
		new Female("Riley","parker","Austria","Wien","Girl-imd/girl12.jpg",28),
		new Female("Lily","Cassiy","Austria","Wien","Girl-imd/girl13.jpg",33),
		new Female("Natalie","Millers","Austria","Wien","Girl-imd/girl14.jpg",25),
		new Male("Liam","Jones","Austria","Wien","Boy-img/boy1.jpg",20),
		new Male("Zack","Afron","Austria","Lins","Boy-img/boy2.jpg",23),
		new Male("Oliver","Millers","Austria","Salzburg","Boy-img/boy3.jpg",25),
		new Male("Ethan","Thampson","Austria","Grazt","Boy-img/boy4.jpg",26),
		new Male("Hassan","Hassani","Oman","Boden","Boy-img/boy5.jpg",21),
		new Male("Jackob","Foster","Austria","Hollabrunn","Boy-img/boy6.jpg",24),
		new Male("Lucas","Grandy","Austria","Vösendorf","Boy-img/boy7.jpg",30),
		new Male("Sebastian","Kramer","Austria","Kerms","Boy-img/boy8.jpg",19),
		new Male("Jackson","Mills","Austria","Wien","Boy-img/boy9.jpg",24),
		new Male("William","Slater","Austria","Wien","Boy-img/boy10.jpg",31),
		new Male("Henry","Anderson","Austria","Wien","Boy-img/boy11.jpg",33),
		new Male("Owen","Carter","Austria","Wien","Boy-img/boy12.jpg",28),
		new Male("Leo","Lee","Austria","Wien","Boy-img/boy13.jpg",29),
		new Male("Mohammad","Golsar","Iran","Wien","Boy-img/boy14.jpg",34),

];
function showBigList() {
  for (let i = 0; i < allpages.length; i++) {
  content[i].createCard();
  }
}

function showOnlyFemale() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < allpages.length; i++) {

    if (allpages[i].constructor.name == "Female") {
    bigList.innerHTML += allpages[i].render();
    }
  }
}

function showOnlyMale() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < allpages.length; i++) {

    if (allpages[i].constructor.name == "Male") {
    bigList.innerHTML += allpages[i].render();
    }
  }
}
*/

		
		
		
document.writeln();
var Female = [{
    Name:"Ema",
    Lastname:"Smith",
    From:"Austria",
    Live: "Wien",
    Age: 25,
    Photo:"Girl-imd/girl1.jpg",  

    },{
        
    Name:"Sophia",
    Lastname:"Brown",
    From:"Austria",
    Live: "Lins",
    Age: 21,
    Photo:"Girl-imd/girl2.jpg",
    },{

    Name:"Maryam",
    Lastname:"Hall",
    From:"Iran",
    Live: "Salzburg",
    Age: 24,
    Photo:"Girl-imd/girl3.jpg",

    },{
    	
    Name:"Isabella",
    Lastname:"cooper",
    From:"Austria",
    Live:"Grazt",
    Age: 23,
    Photo:"Girl-imd/girl4.jpg",

    },{
    	
    Name:"Mia",  
    Lastname:"Murphy",
    From:"Austria",
    Live: "Boden",
    Age: 20,
    Photo:"Girl-imd/girl5.jpg",

    },{ 
		
    Name:"Amelia",
    Lastname:"Hamilton",
    From:"Austria",
    Live: "Hollabrunn",
    Age: 19,
    Photo:"img/citylights_image.jpg",

    },{
    	
    Name:"Charlette",
    Lastname:"Conner",
    From:"Austria",
    Live: "Vösendorf",
    Age: 27,
    Photo:"Girl-imd/girl7.jpg",

    },{
  
    Name:"Aria",
    Lastname:"Jones",
    From:"Austria",
    Live: "Kerms",
    Age: 29,
    Photo:"Girl-imd/girl8.jpg",

    },{
    	
    Name:"Abigail",
    Lastname:"Quinn",
    From:"Austria",
    Live: "Wien",
    Age: 22,
    Photo:"Girl-imd/girl9.jpg",

    },{
    	
    Name:"Emily",
    Lastname:"Winston",
    From:"Austria",
    Live: "Wien",
    Age: 25,
    Photo:"Girl-imd/girl10.jpg",

    },{
    	
    Name:"Madison",
    Lastname:"Tayler", 
    From:"Austria",
    Live: "Wien",
    Age: 31,
    Photo:"Girl-imd/girl11.jpg",

    },{
    	
    Name:"Riley",
    Lastname:"parker",
    From:"Austria",
    Live: "Wien",
    Age: 28,
    Photo:"Girl-imd/girl12.jpg",

    },{
    	
    Name:"Lily",
    Lastname:"Cassiy",
    From:"Austria",
    Live: "Wien",
    Age: 33,
    Photo:"Girl-imd/girl13.jpg",

    },{
    	
    Name:"Natalie",
    Lastname:"Millers",
    From:"Austria",
    Live: "Wien",
    Age: 25,
    Photo:"Girl-imd/girl14.jpg",

}];

for(var i=0; i<Female.length; i++){
document.getElementById("Female").innerHTML += ('<div class="col-lg-4"> <img src=" '+ Female[i].Photo +' " class="img-fluid alt="Responsive image"> <h2>'+ Female[i].Name +'</h2> <p> Lastname : ' + Female[i].Lastname + '</p> <p> From : '+ Female[i].From +' </p> <p> Live : '+ Female[i].Live +' </p> <P> Age : ' + Female[i].Age + '</P> <hr></div>'); 
};
function mFEMALE() {
    Name = document.getElementById("Name").value;
    lastname = document.getElementById("Lastname").value;
    From = document.getElementById("From").value;
    Live = document.getElementById("Live").value;
    Image = document.getElementById("img");
    Age = document.getElementById("Age").value;
    
    var elementN = document.getElementById("Name"),
        elementL = document.getElementById("Lastname"),
        elementI = document.getElementById("Image");
    
    x = ('<div class="col-lg-4"> <img src=" '+ Image +' " class="img-fluid alt="Responsive image"> <h2>'+ Name +'</h2> <p> Lastname : ' + Lastname + '</p> <p> From : '+ From +' </p> <p> Live: '+ Live +' </p><hr></div>'); 
    
    y = Female.push(x);

    if (Name == "" || Lastname == "" || Image == "") {
        document.getElementById("massage").innerHTML = "Please complete the entries...";
        elementN.classList.add("sorry");
        elementL.classList.add("sorry");

    } else {
        document.getElementById("massage").style.color = "#8EEA90";
        document.getElementById("massage").innerHTML = "Successfully added";
        elementN.classList.remove("sorry");
        elementL.classList.remove("sorry");
        document.getElementById("Female").innerHTML += x;
        myReset()
    }
}

/* ======== ========= */
var Male = [{
    Name:"Liam",
    Lastname:"Jones",
    From:"Austria",    
    Live: "Wien",
    Age: 20,
    Photo:"Boy-img/boy1.jpg",  

    },{
        
    Name:"Zack",
    Lastname:"Afron",   
    From:"Austria",
    Live: "Lins",
    Age: 23,
    Photo:"Boy-img/boy2.jpg",
    },{

    Name:"Oliver",
    Lastname:"Millers",  
    From:"Iran",
    Live: "Salzburg",
    Age: 25,
    Photo:"Boy-img/boy3.jpg",

    },{
    	
    Name:"Ethan",   
    Lastname:"Thampson",
    From:"Austria",
    Live:"Grazt",
    Age: 26,
    Photo:"Boy-img/boy4.jpg",

    },{             
			
    Name:"Hassan", 
    Lastname:"Hassani",
    From:"Oman",
    Live:"Boden",
    Age: 21,
    Photo:"Boy-img/boy5.jpg",

    },{ 
		
    Name:"Jackob",
    Lastname:"Foster",                  
    From:"Austria",
    Live: "Hollabrunn",
    Age: 24,
    Photo:"Boy-img/boy6.jpg",

    },{
    	
    Name:"Lucas",
    Lastname:"Grandy",
    From:"Austria",          
    Live: "Vösendorf",
    Age: 30,
    Photo:"Boy-img/boy7.jpg",

    },{
  
    Name:"Sebastian",
    Lastname:"Kramer",     
    From:"Austria",
    Live: "Kerms",
    Age: 19,
    Photo:"Boy-img/boy8.jpg",

    },{
    	
    Name:"Jackson",         
    Lastname:"Mills",
    From:"Austria",
    Live: "Wien",
    Age: 24,
    Photo:"Boy-img/boy9.jpg",

    },{
    	
    Name:"William",
    Lastname:"Slater",   
    From:"Austria",
    Live: "Wien",
    Age: 31,
    Photo:"Boy-img/boy10.jpg",

    },{
    	
    Name:"Henry",
    Lastname:"Anderson",  
    From:"Austria",
    Live: "Wien",
    Age: 33,
    Photo:"Boy-img/boy11.jpg",

    },{
    	
    Name:"Owen",
    Lastname:"Carter",   
    From:"Austria",
    Live: "Wien",
    Age: 28,
    Photo:"Boy-img/boy12.jpg",

    },{
    	
    Name:"Leo",         
    Lastname:"Lee",
    From:"Austria",
    Live: "Wien",
    Age: 29,
    Photo:"Boy-img/boy13.jpg",

    },{
    	
    Name:"Mohammad",
    Lastname:"Golsar",
    From:"Iran",
    Live: "Wien",
    Age: 34,
    Photo:"Boy-img/boy14.jpg",

}];

for(var i=0; i<Male.length; i++){
document.getElementById("Male").innerHTML += ('<div class="col-lg-4"> <img src=" '+ Male[i].Photo +' " class="img-fluid alt="Responsive image"> <h2>'+ Male[i].Name +'</h2> <p> Lastname : ' + Male[i].Lastname + '</p> <p> From : '+ Male[i].From +' </p> <p> Live : '+ Male[i].Live +' </p> <P> Age : ' + Male[i].Age + '</P> <hr></div>'); 
};
function mMALE() {
    Name = document.getElementById("Name").value;
    Lastname = document.getElementById("Lastname").value;
    From = document.getElementById("From").value;
   	Live = document.getElementById("Live").value;
    Image = document.getElementById("img");
    Age = document.getElementById("Age").value;
    
    var elementN = document.getElementById("Name"),
        elementL = document.getElementById("Lastname"),
        elementI = document.getElementById("Image");
    
    x = ('<div class="col-lg-4"> <img src=" '+ Image +' " class="img-fluid alt="Responsive image"> <h2>'+ Name +'</h2> <p> Lastname : ' + Lastname + '</p> <p> From : '+ From +' </p> <p> Live: '+ Live +' </p><hr></div>'); 
    
    y = Female.push(x);

    if (Name == "" || Lastname == "" || Image == "") {
        document.getElementById("massage").innerHTML = "Please complete the entries...";
        elementN.classList.add("sorry");
        elementL.classList.add("sorry");

    } else {
        document.getElementById("massage").style.color = "#8EEA90";
        document.getElementById("massage").innerHTML = "Successfully added";
        elementN.classList.remove("sorry");
        elementL.classList.remove("sorry");
        document.getElementById("Female").innerHTML += x;
        myReset()
    }
}





      let age1 = 17;
      let isVoterId = 'yes';

      if(age>=18){
      alert("you are eligible for vote");
      } 
      else if(isVoterId == 'no'){
        alert("please make voter id");
      }
      else{
        alert("you are not eligible for vote");
      }

  

      let age = 18;

      let vote = age>=18 ? "eligible" : "not";
      console.log(vote);

     
      let fname = "suhail";
      let lname = "ahmed";

      let full = `${fname} ${lname}`;
      console.log(full);


      let str1 = "hello guyz my name is suhail ahmed";
      let store = str1.substr(22, 34);
      console.log(store);

      let fnamee = "suhail";
      let lnamee = "ahmed";

      let fullname = fnamee.concat(" " + lnamee);
      console.log(fullname);

      let str = "hello guyz my name is suhail ahmed";
      let position = str.replace('suhail', 'shaan');
      console.log(position);

      
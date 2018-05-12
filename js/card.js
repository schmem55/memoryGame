$(window).on('load',function(){
  $('#myModal').modal('show')
 });

var pictures =0;
//array of pictures
const cardsArrayBegginer = [{
    'name': 'aubameyang',
    'img': 'images/aubameyang.jpg',
  },
  {
    'name': 'ronaldo',
    'img': 'images/ronaldo.jpg',
  },
  {
    'name': 'bale',
    'img': 'images/bale.jpg',
  },
  {
    'name': 'buffon',
    'img': 'images/buffon.jpg',
  },
  {
    'name': 'debruyne',
    'img': 'images/deBruyne.jpg',
  },
  {
    'name': 'falcao',
    'img': 'images/falcao.jpg'
  }
  
];

const cardsArrayMedium=[
  {
    'name': 'aubameyang',
    'img': 'images/aubameyang.jpg',
  },
  {
    'name': 'ronaldo',
    'img': 'images/ronaldo.jpg',
  },
  {
    'name': 'bale',
    'img': 'images/bale.jpg',
  },
  {
    'name': 'buffon',
    'img': 'images/buffon.jpg',
  },
  {
    'name': 'debruyne',
    'img': 'images/deBruyne.jpg',
  },
  {
    'name': 'falcao',
    'img': 'images/falcao.jpg'
  },
  {
    'name':'zidane',
    'img':'images/zidane.jpg'
  },
  {
    'name':'gronaldo',
    'img':'images/gronaldo.jpg'
  },
  {
    'name':'juninho',
    'img':'images/juninho.jpg'
  }
]

const cardsArrayLegend=[
  {
    'name': 'aubameyang',
    'img': 'images/aubameyang.jpg',
  },
  {
    'name': 'ronaldo',
    'img': 'images/ronaldo.jpg',
  },
  {
    'name': 'bale',
    'img': 'images/bale.jpg',
  },
  {
    'name': 'buffon',
    'img': 'images/buffon.jpg',
  },
  {
    'name': 'debruyne',
    'img': 'images/deBruyne.jpg',
  },
  {
    'name': 'falcao',
    'img': 'images/falcao.jpg'
  },
  {
    'name':'zidane',
    'img':'images/zidane.jpg'
  },
  {
    'name':'gronaldo',
    'img':'images/gronaldo.jpg'
  },
  {
    'name':'juninho',
    'img':'images/juninho.jpg'
  },
  {
    'name':'beckham',
    'img':'images/beckham.jpg'
  },
  {
    'name':'cruyff',
    'img':'images/cruyff.jpg'
  },
  {
    'name':'cantona',
    'img':'images/cantona.jpg'
  },
  
]

var Game ={}
//disabled buttons
Game.startBegginer = ()=>{  
  for (var i = 0;i<document.getElementsByClassName('buttonStart').length ;i++) {
      document.getElementsByClassName('buttonStart')[i].disabled= "disabled"
      
  }
  Game.beginnerStarted();

}

Game.startMedium = ()=>{
  for (var i = 0;i<document.getElementsByClassName('buttonStart').length ;i++) {
    document.getElementsByClassName('buttonStart')[i].disabled= "disabled"
      
  }
  Game.mediumStarted();
}

Game.startLegend = ()=>{
  for (var i = 0;i<document.getElementsByClassName('buttonStart').length ;i++) {
    document.getElementsByClassName('buttonStart')[i].disabled= "disabled"
      
  }
  Game.legendStarted();
}

Game.beginnerStarted= ()=>{
    Game.createGrid(cardsArrayBegginer);
    Game.checkCards();
}

Game.mediumStarted= ()=>{
  Game.createGrid(cardsArrayMedium);
  Game.checkCards();
}
Game.legendStarted= ()=>{
  Game.createGrid(cardsArrayLegend);
  Game.checkCards();
}



Game.createGrid = (cardsArray)=>{
  //create the container 
  var game = document.getElementById('game');
  var container = document.createElement('div');
  container.setAttribute('class', 'row');
  game.appendChild(container);
  //multiplicate the array
  var gameGrid = cardsArray.concat(cardsArray);
  //random it
  gameGrid.sort(() => 0.5 - Math.random());
  //add card back and front element inside the game
  gameGrid.forEach(element => {

    var card = document.createElement('div');
    card.classList.add('col-3');
    card.classList.add('card');
    card.id=('card')
    card.dataset.name = element.name;
  


    var front = document.createElement('div');
    front.classList.add('col-12');
    front.classList.add('front');
    front.id =('front');
    front.style.backgroundImage = `url(${element.img})`;
    card.appendChild(front);

    var back = document.createElement('div');
    back.classList.add('col-12');
    back.classList.add('back');
    back.id=('back');
    back.style.backgroundImage='url(images/back.jpg)' 
    card.appendChild(back);
    //to compare pictures with the number of pictures guessed
    pictures+=1;
    container.appendChild(card);


  });
}
Game.checkCards = ()=>{
  var count = 0;
  var firstGuess = '';
  var secondGuess = '';
  var previousTarget = null;
  var guessedToWin=0;
  var guesses=0;

  for(var i=0; i<card.length;i++){
    card[i].addEventListener('click', function (event) {
      var clicked = event.target;
      
      if (clicked.style.backgroundImage){
        
        if (count < 2) {
          count+=1;
          if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
    
          } 
          else {
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
            guesses+=1;
            document.getElementById('counter').innerHTML=`${guesses}`        
          }
    
          if (firstGuess !== '' && secondGuess !== '' && firstGuess===secondGuess) { 
            guessedToWin+=1

            if(guessedToWin*2===pictures){
              
              document.getElementById('counterWin').innerHTML=`${guesses}`

              document.getElementById('modalWin').style.display="block";


              document.getElementById('btnYes').addEventListener("click",()=>{
                    location.reload();
              })

          


              
            }
            setTimeout(match,1000);
            setTimeout(resetGuesses,1000);
           
          
          }
          else if(count===2){
            setTimeout(resetGuesses,1000);
          }
        }
      }
    });
  }
  var match = () => {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
      card.classList.add('match');
    });
  }
  var resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
  
    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
      card.classList.remove('selected');
    });
  };

}






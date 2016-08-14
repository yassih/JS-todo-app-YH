var selected = document.querySelector(".firstItem");
console.log('this is ' + selected.innerHTML);

function removeItemEventHandler(e){
  var removeLi = e.target.parentElement;
  removeLi.setAttribute("style", "text-decoration: line-through");
  setTimeout( function(){
    removeLi.remove();
  }, 2000 );

}

var removed = document.querySelectorAll('a');
for(var i= 0  ; i < removed.length ; i ++)
{
  removed[i].addEventListener('click',  function(event){
      removeItemEventHandler(event);
  })
}
//Adding an Item to the list with remove + calling the eventlistner adding fucntion
var addClick = document.querySelector('#add');
addClick.addEventListener('click', function(event){
  var addText = document.querySelector('#newItem').value;
  if(addText.length !== 0){
    var newLi = document.createElement('li');
    var list = document.querySelector('.listOne');

    var newA = document.createElement('a');
    newA.className = 'remove';
    newA.innerHTML = '&#10008;';
    newLi.appendChild(newA);

    var span = document.createElement('span')
    span.innerHTML = addText;
    newLi.appendChild(span);


    list.appendChild(newLi);
    newA.addEventListener('click', function(event){
      removeItemEventHandler(event);
    })
    document.querySelector('#newItem').value = "";
  }else{
    alert('Looks like there is nothing to add!');
  }
  document.querySelector('#newItem').focus();

})

// to delete the entire list
var deleteList = document.querySelector('#deleteList');
deleteList.addEventListener('click', function(event){
  var result = confirm('The Entire list will be deleted , are you sure?');
  if (result){
    var list = document.querySelectorAll('.listOne li');

    for(var i = list.length-1 ; i >=0  ; i--)
    {
        list[i].setAttribute("style", "text-decoration: line-through");
    }
    setTimeout( function(){
      document.querySelector('.listOne').innerHTML = "";
    }, 2000 );
  }

});
